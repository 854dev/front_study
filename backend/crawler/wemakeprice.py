import requests
from bs4 import BeautifulSoup
from pprint import pprint

def get_wmp_data(keyword):
    """
    이름, 가격, 썸네일(url)
    상품(url), 평점, 평점 개수
    """
    url = f'https://search.wemakeprice.com/api/wmpsearch/api/v3.0/wmp-search/search.json?searchType=DEFAULT&search_cate=top&keyword={keyword}&isRec=1&_service=5&_type=3&page=1'
    res = requests.get(url)
    data = res.json()['data']['deals']
    result = [
        {
            'title': item['dispNm'],
            'image': item['originImgUrl'],
            'price': item['originPrice'],
            'salePrice': item['salePrice'],
            'discountRate': item['discountRate'],
            'reviewAvgPoint': item['reviewAvgPoint'],
            'reviewCount': item['reviewCount']
        }
        for item in data
    ]
    return result[:20]
