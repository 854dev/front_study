from crawler import (coupang, daaangn, homenshopping, naverShopping, wemakeprice)
from multiprocessing import Pool
from crawler.dbconn import DBConn
crawl_function_info = {
    0:coupang.coupang_crawler,
    1:homenshopping.get_hns_data,
    2:daaangn.daaangn_crawler,
    3:naverShopping.naver_shopping_crawl,
    # 4:wemakeprice.get_wmp_data
}

def get_crawl(crawl_code, keyword):
    res = crawl_function_info[crawl_code](keyword)
    print(crawl_code)
    if type(res) == dict:
            data = res.get('data')
    else:
        data= res
    for row in data:
        row.update({'shoppingmall_id':crawl_code})
    return data
def input_generator(result):
    for row in result:
        yield tuple(row.values())

if __name__ == '__main__':
    keyword = '아이폰'
    dict_list = []
    dbcon = DBConn()
    pool = Pool(processes=4)
    args = [(i,keyword) for i in range(4)]
    outputs = pool.starmap(func=get_crawl,iterable=args)
    results = []
    for outputs in outputs:
        results.extend(outputs)

    cursor = dbcon.conn.cursor()

    crawler_info_cur = cursor.execute('SELECT * FROM shopping_mall_meta')
    crawler_info = {row[0]:row[1] for row in crawler_info_cur}
    cursor.executemany("INSERT INTO t_crawled_data values (?,?,?,?,?,?,?);", input_generator(results))
    # cursor.execute("SELECT * FROM t_crawled_data")
    # print(cursor.fetchall())
    dbcon.conn.commit()
    dbcon.conn.close()
