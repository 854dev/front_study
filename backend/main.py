from fastapi import FastAPI
from crawler import wemakeprice, daaangn, coupang, homenshopping

app = FastAPI()


@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.get("/call_crawl/coupang")
async def read_item(query: str):
    coupang_result = coupang.coupang_crawler(query)
    res_param = {
        'coupang': coupang_result,
    }
    return res_param


@app.get("/call_crawl/daaangn")
async def read_item(query: str):
    daaangn_result = daaangn.daaangn_crawler(query)
    # wemakeprice_result = wemakeprice.get_wmp_data(query)
    res_param = {
        'daaangn': daaangn_result,
    }
    return res_param


@app.get("/call_crawl/homenshopping")
async def read_item(query: str):
    homenshopping_result = homenshopping.get_hns_data(query)
    # wemakeprice_result = wemakeprice.get_wmp_data(query)
    res_param = {
        'homenshopping': homenshopping_result
    }
    return res_param

#
# @app.get("/call_crawl/wemakeprice")
# async def read_item(query: str):
#     wemakeprice_result = wemakeprice.get_wmp_data(query)
#     res_param = {
#         'wemakeprice': wemakeprice_result
#     }
#     return res_param
