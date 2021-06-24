import requests
from bs4 import BeautifulSoup as bs
keyword = input('Input the keyword to find: ')

def naver_shopping_crawl(keyword):
    base_url = 'https://search.shopping.naver.com/search/all'
    # query=자전거&cat_id=&frm=NVSHATC
    session = requests.session()
    session.headers['upgrade-insecure-requests']=1
    session.headers['']
    param = {
        'query':keyword,
        'cat_id':None,
        'frm':'NVSHATC'
    }
