from fastapi import FastAPI, Request, Response, HTTPException
import asyncio
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from starlette.status import HTTP_504_GATEWAY_TIMEOUT
from crawler import (coupang,crawl_854,daaangn,wemakeprice,naverShopping,homenshopping, main_executer)
import time
app = FastAPI()
REQUEST_TIMEOUT_ERROR = 100000  # Threshold

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

@app.middleware("http")
async def timeout_middleware(request: Request, call_next):
    try:
        start_time = time.time()
        return await asyncio.wait_for(call_next(request), timeout=REQUEST_TIMEOUT_ERROR)

    except asyncio.TimeoutError:
        process_time = time.time() - start_time
        return JSONResponse({'detail': 'Request processing time excedeed limit',
                             'processing_time': process_time},
                            status_code=HTTP_504_GATEWAY_TIMEOUT)
@app.get('/db_save')
async def save_to_db(query:str):
    res = main_executer.run_crawl(query)
    return {'success':res}

@app.get("/call_crawl/coupang")
async def read_item(query: str):
    cp = coupang.Coupang(query)
    coupang_result = cp.coupang_crawler()
    return coupang_result

@app.get("/call_crawl/daaangn")
async def read_item(query: str):
    dg = daaangn.Daaangn(query)
    daaangn_result = dg.daaangn_crawler()
    return daaangn_result

@app.get("/call_crawl/homenshopping")
async def read_item(query: str):
    hs = homenshopping.Homenshopping(query)
    homenshopping_result = hs.get_hns_data()
    return homenshopping_result

@app.get("/call_crawl/wemakeprice")
async def read_item(query: str):
    wmp = wemakeprice.Wemakeprice(query)
    wemakeprice_result = wmp.get_wmp_data()
    return wemakeprice_result

@app.get("/call_crawl/auction")
async def read_item(query: str):
    result = crawl_854.AuctionReact(query)
    return result.get_search_result()

@app.get("/call_crawl/naversearchshopping")
async def read_item(query: str):
    result = crawl_854.NaverSearchShopping(query)
    return result.get_search_result()

@app.get("/call_crawl/naverpowerproduct")
async def read_item(query: str):
    result =  crawl_854.NaverPowerProduct(query)
    return result.get_search_result()

@app.get("/call_crawl/navershopping")
async def read_item(query: str):
    ns = naverShopping.NaverShopping(query)
    result = ns.naver_shopping_crawl()
    return result

@app.get("/call_crawl/googlesearch")
async def read_item(query: str):
    result = crawl_854.MallGoogleAdProduct(query)
    return result.get_search_result()
