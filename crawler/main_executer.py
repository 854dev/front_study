from crawler import (coupang, daaangn, homenshopping, naverShopping, wemakeprice)
from multiprocessing import Pool
from crawler.dbconn import DBConn

crawl_function_info = {
    0: coupang.coupang_crawler,
    1: homenshopping.get_hns_data,
    2: daaangn.daaangn_crawler,
    3: naverShopping.naver_shopping_crawl,
    # 4:wemakeprice.get_wmp_data
}


def get_crawl(crawl_code:int, keyword:str):
    """
    각 크롤러를 실행해서 한 result로 만들어 반환하는 메소드
    """
    res = crawl_function_info[crawl_code](keyword)
    print(crawl_code)
    if type(res) == dict:
        data = res.get('data')
    else:
        data = res
    for row in data:
        row.update({'shoppingmall_id': crawl_code})
    return data


def input_generator(result:list):
    for row in result:
        yield tuple(row.values())


def return_data(keyword:str):
    """
    이미 검색한 적이 있는 키워드에 대해선 DB에서 데이터를 꺼내서 반환하고, 그렇지 않은 키워드에 대해선 크롤링한 데이터를 반환하는 메소드
    수정 및 고도화 필요
    """
    dbcon = DBConn()
    cursor = dbcon.conn.cursor()
    cursor.execute(f"select * from t_keyword_search_count where keyword='{keyword}'")
    result = cursor.fetchall()
    if len(result) == 0:
        item_result = run_crawl(keyword)
    else:
        item_result = get_items_from_db(keyword)
    return item_result


def get_items_from_db(keyword:str):
    """
    DB에서 키워드에 대한 크롤링된 데이터 가져와서 반환하는 메소드
    """
    dbcon = DBConn()
    cursor = dbcon.conn.cursor()
    cursor.execute(f"select * from t_crawled_data where keyword='{keyword}'")
    item_result = cursor.fetchall()
    # TODO : 고도화 필요
    return item_result


def run_crawl(keyword:str):
    """
    입력한 키워드에 대해 크롤링해서 DB에 적재하고 크롤링한 데이터를 반환하는 메소드
    """
    dbcon = DBConn()
    pool = Pool(processes=4)
    args = [(i, keyword) for i in range(4)]
    outputs = pool.starmap(func=get_crawl, iterable=args)
    results = []
    for outputs in outputs:
        results.extend(outputs)
    cursor = dbcon.conn.cursor()
    cursor.executemany("INSERT INTO t_crawled_data values (?,?,?,?,?,?,?);", input_generator(results))
    dbcon.conn.commit()
    dbcon.conn.close()
    return results


if __name__ == '__main__':
    return_data('자전거')
    run_crawl('자전거')
