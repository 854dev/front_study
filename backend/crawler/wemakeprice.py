import requests
from bs4 import BeautifulSoup
from pprint import pprint
from fake_useragent import UserAgent


def get_wmp_data(keyword):
    """
    이름, 가격, 썸네일(url)
    상품(url), 평점, 평점 개수
    """
    try:
        ua = UserAgent()
        url = f'https://search.wemakeprice.com/api/wmpsearch/api/v3.0/wmp-search/search.json?searchType=DEFAULT&search_cate=top&keyword={keyword}&isRec=1&_service=5&_type=3&page=1'
        headers = {
            'user-agent': ua.random
        }
        res = requests.get(url, headers=headers)
        res.raise_for_status()
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
        params = {
            'code': res.status_code,
            'msg': "Data Loding success",
            'data': result[:20]
        }
        return params
    except requests.exceptions.HTTPError as err:
        params = {
            'code': res.status_code,
            'msg': err,
            'data': []
        }
        return params
    except Exception as e:
        params = {
            'code': res.status_code,
            'msg': e,
            'data': []
        }
        return params


if __name__ == '__main__':
    return_list = get_wmp_data("apple")
    print(return_list)
