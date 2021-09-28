import requests
from bs4 import BeautifulSoup
from pprint import pprint
from fake_useragent import UserAgent

class Wemakeprice:
    kwd = None
    def __init__(self, keyword):
        self.kwd = keyword

    def get_wmp_data(self):
        """
        이름, 가격, 썸네일(url)
        상품(url), 평점, 평점 개수
        """
        keyword = self.kwd
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
                    'product_title': item['dispNm'],
                    'product_thumbnail': item['originImgUrl'],
                    # 'product_price': item['originPrice'],
                    'product_price': item['originPrice'] if item['salePrice'] is None else item['salePrice']  ,
                    'discountRate': item['discountRate'],
                    'product_rating': item['reviewAvgPoint'],
                    'product_rating_cnt': item['reviewCount']
                }
                for item in data
            ]
            params =  result[:20]
            return params
        except requests.exceptions.HTTPError as err:
            params = {
                'code': 400,
                'msg': err,
                'data': []
            }
            return params
        except Exception as e:
            params = {
                'code': 400,
                'msg': e,
                'data': []
            }
            return params


# if __name__ == '__main__':
#     return_list = get_wmp_data("러닝화")
#     print(return_list)
