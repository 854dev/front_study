from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from crawler.coupang import coupang_crawler
from crawler.daaangn import daaangn_crawler
from crawler.homenshopping import get_hns_data
from crawler.wemakeprice import get_wmp_data
from crawler.naverShopping import naver_shopping_crawl
from crawler.crawl_854 import AuctionReact, NaverPowerProduct, NaverSearchShopping, MallGoogleAdProduct, MallNaverShoppingSearch

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

def call_crawler(query : str):
    return {'msg':'success'}

@app.get("/call_crawl/coupang")
async def read_item(query: str):
    coupang_result = coupang_crawler(query)
    return coupang_result

@app.get("/call_crawl/daaangn")
async def read_item(query: str):
    daaangn_result = daaangn_crawler(query)
    return daaangn_result

@app.get("/call_crawl/homenshopping")
async def read_item(query: str):
    homenshopping_result = get_hns_data(query)
    return homenshopping_result

@app.get("/call_crawl/wemakeprice")
async def read_item(query: str):
    wemakeprice_result = get_wmp_data(query)
    return wemakeprice_result

@app.get("/call_crawl/auction")
async def read_item(query: str):
    result = AuctionReact(query)
    return result.get_search_result()

@app.get("/call_crawl/naversearchshopping")
async def read_item(query: str):
    result = NaverSearchShopping(query)
    return result.get_search_result()

@app.get("/call_crawl/naverpowerproduct")
async def read_item(query: str):
    result =  NaverPowerProduct(query)
    return result.get_search_result()

@app.get("/call_crawl/navershopping")
async def read_item(query: str):
    result = naver_shopping_crawl(query)
    return result

@app.get("/call_crawl/navershopping/854")
async def read_item(query: str):
    result = MallNaverShoppingSearch(query)
    return result.get_search_result()

@app.get("/call_crawl/googlesearch")
async def read_item(query: str):
    result = MallGoogleAdProduct(query)
    return result.get_search_result()

