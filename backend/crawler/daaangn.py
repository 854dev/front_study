import requests
from bs4 import BeautifulSoup as bs
from urllib.parse import quote
from fake_useragent import UserAgent

class Daaangn:
    kwd = None
    def __init__(self, keyword):
        self.kwd = keyword

    def daaangn_crawler(self):
        keyword = self.kwd
        try:
            session = requests.session()
            base_url = 'https://www.daangn.com/search/' + quote(keyword) + '/more/flea_market'
            params = {
                'page': 1
            }
            session.headers[
                'user-agent'] = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.272 Whale/2.9.117.22 Safari/537.36'
            session.headers['upgrade-insecure-requests'] = '1'
            session.headers['referer'] = 'https://www.daangn.com/'

            ua = UserAgent()
            headers = {
                'user-agent': ua.random
            }
            res = session.get(base_url, headers=headers, params=params)

            html = bs(res.text, 'html.parser')
            product_list = html.select('article.flea-market-article.flat-card')
            """
            수집 데이터 목록
            - 이름
            - 가격
            - 썸네일
            - 상품
            - 평점
            - 평점개수
            """
            product_data = []
            for x in product_list:
                name = x.select_one('a > div.article-info > div.article-title-content > span.article-title').get_text()
                price = x.select_one('a > div.article-info > p.article-price').get_text().strip()
                if price == '가격없음' or price == '-':
                    price = 0
                else:
                    price = int(price.replace(',', '').replace('원', ''))
                thumbnail = x.select_one('a > div.card-photo > img').attrs['src']
                url = 'https://www.daangn.com/' + x.select_one('a').attrs['href']

                rating = 0.0
                rating_count = 0
                product_info = {
                    'product_title': name,
                    'product_price': price,
                    'product_thumbnail': thumbnail,
                    'product_url': url,
                    'product_rating': rating,
                    'product_rating_cnt': rating_count
                }
                product_data.append(product_info)

            params = {
                'code': res.status_code,
                'msg': "Data Loding success",
                'data': product_data
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


# def test_d(keyword):
#     print(daaangn_crawler(keyword))
#
#
# if __name__ == '__main__':
#     k = input()
#     test_d(k)
