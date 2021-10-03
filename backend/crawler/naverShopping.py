import requests
from bs4 import BeautifulSoup
from fake_useragent import UserAgent
import json


def naver_shopping_crawl(keyword):
    parse_list = []
    ua = UserAgent()
    url = 'https://search.shopping.naver.com/search/all'
    headers = {
        'user-agent': ua.random
    }
    param = {
        'query': keyword,
        'cat_id': None,
        'frm': 'NVSHATC'
    }
    res = requests.get(url, headers=headers, params=param)
    html = BeautifulSoup(res.text, 'html.parser')
    title_list = html.select(
        '#__next > div > div.style_container__1YjHN > div.style_inner__18zZX > div.style_content_wrap__1PzEo > div.style_content__2T20F > ul > div > div > li > div > div.basicList_info_area__17Xyo > div.basicList_title__3P9Q7 > a')
    print(title_list)
    more_list = html.select('#__NEXT_DATA__')
    text = more_list[0]
    parsed_data = text.contents
    data_json = json.loads(parsed_data[0])
    product_list = data_json['props']['pageProps']['initialState']['products']['list']
    for product in product_list:
        ret_params = {
            "product_title": product['item']['productTitle'],
            "product_price": product['item']['lowPrice'],
            "product_thumbnail": product['item']['imageUrl'],
            "product_url": 'https://search.shopping.naver.com/catalog/' + product['item']['id'],
            "product_rating": product['item']['reviewCount'],
            "product_rating_cnt": product['item']['productTitle'],
        }
        parse_list.append(ret_params)
    return parse_list

if __name__ == "__main__":
    naver_shopping_crawl("애플")
