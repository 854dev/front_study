from . import (coupang, daaangn, homenshopping, naverShopping, wemakeprice, crawl_854)
from multiprocessing import Pool
from .dbconn import DBConn

def get_crawl(crawl_code:int, keyword:str):
    """
    각 크롤러를 실행해서 한 result로 만들어 반환하는 메소드
    """
    cp = coupang.Coupang(keyword)
    dg = daaangn.Daaangn(keyword)
    hms = homenshopping.Homenshopping(keyword)
    ns = naverShopping.NaverShopping(keyword)
    wmp = wemakeprice.Wemakeprice(keyword)
    auction = crawl_854.AuctionReact(keyword)
    naverpp = crawl_854.NaverPowerProduct(keyword)
    naverss = crawl_854.NaverSearchShopping(keyword)
    # googlead = crawl_854.MallGoogleAdProduct(keyword)

    crawl_function_info = {
        0: cp.coupang_crawler,
        1: hms.get_hns_data,
        2: dg.daaangn_crawler,
        3: ns.naver_shopping_crawl,
        4: wmp.get_wmp_data,
        5: auction.get_search_result,
        6: naverpp.get_search_result,
        7: naverss.get_search_result,
        # 8: googlead.get_search_result
    }
    res = crawl_function_info[crawl_code]()
    print(crawl_code)
    if type(res) == dict:
        data = res.get('data')
    else:
        data = res
    for row in data:
        row.update({'shoppingmall_id': crawl_code, 'search_keyword':keyword})
    return data


def input_generator(result:list):
    for row in result:
        res = tuple(row.values())
        yield res


# def return_data(keyword:str):
#     """
#     이미 검색한 적이 있는 키워드에 대해선 DB에서 데이터를 꺼내서 반환하고, 그렇지 않은 키워드에 대해선 크롤링한 데이터를 반환하는 메소드
#     수정 및 고도화 필요
#     """
#     item_result = run_crawl(keyword)
#         # 두 결과 합치기
#     return item_result


# def get_items_from_db(keyword:str):
#     """
#     DB에서 키워드에 대한 크롤링된 데이터 가져와서 반환하는 메소드
#     """
#     dbcon = DBConn()
#     cursor = dbcon.conn.cursor()
#     cursor.execute(f"select * from t_crawled_data where keyword='{keyword}'")
#     item_result = cursor.fetchall()
#     # TODO : 고도화 필요
#     return item_result


def run_crawl(keyword:str):
    """
    입력한 키워드에 대해 크롤링해서 DB에 적재하고 크롤링한 데이  터를 반환하는 메소드
    """
    dbcon = DBConn()
    pool = Pool(processes=8)
    args = [(i, keyword) for i in range(8)]
    outputs = pool.starmap(func=get_crawl, iterable=args)
    results = []

    for outputs in outputs:
        results.extend(outputs)
    url_list = []
    new_results = []
    for x in results:
        url = x.get('product_url')
        if url not in url_list:
            url_list.append(url)
            new_results.append(x)
    cursor = dbcon.conn.cursor()
    cursor.executemany("INSERT INTO t_crawled_data (product_title, product_price, product_thumbnail, product_url, product_rating, product_rating_cnt, shoppingmall_id, search_keyword) values (?,?,?,?,?,?,?,?);", input_generator(new_results))
    dbcon.conn.commit()
    dbcon.conn.close()
    return True


if __name__ == '__main__':
    run_crawl('아이폰')
