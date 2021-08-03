from fastapi import FastAPI
from crawler import wemakeprice, daaangn, coupang, homenshopping
from fastapi.middleware.cors import CORSMiddleware
app = FastAPI()

origins = [
    "http://localhost",
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.get("/call_crawl/coupang")
async def read_item(query: str):
    coupang_result = coupang.coupang_crawler(query)
    return coupang_result


@app.get("/call_crawl/daaangn")
async def read_item(query: str):
    daaangn_result = daaangn.daaangn_crawler(query)
    # wemakeprice_result = wemakeprice.get_wmp_data(query)
    return daaangn_result


@app.get("/call_crawl/homenshopping")
async def read_item(query: str):
    homenshopping_result = homenshopping.get_hns_data(query)
    # wemakeprice_result = wemakeprice.get_wmp_data(query)
    return homenshopping_result


@app.get("/call_crawl/wemakeprice")
async def read_item(query: str):
    wemakeprice_result = wemakeprice.get_wmp_data(query)
    res_param = {
        'wemakeprice': wemakeprice_result
    }
    return res_param
