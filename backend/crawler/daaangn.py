import requests
from bs4 import BeautifulSoup as bs
from urllib.parse import quote

keyword = input("input the keyword to find : ")
print(keyword)
session = requests.session()
base_url = 'https://www.daangn.com/search/' + quote(keyword) + '/more/flea_market'
params = {
    'page':1
}
session.headers['user-agent'] = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.272 Whale/2.9.117.22 Safari/537.36'
session.headers['upgrade-insecure-requests'] = '1'
session.headers['referer'] = 'https://www.daangn.com/'

res = session.get(base_url, params=params)

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
    price = x.select_one('a > div.article-info > p.article-price').get_text()
    if price == '가격없음':
        price = 0
    price = int(price.replace(',','').replace('원',''))
    thumbnail = x.select_one('a > div.card-photo > img').attrs['src']
    url = 'https://www.daangn.com/' + x.select_one('a').attrs['href']

    rating = 0.0
    rating_count = 0
    product_info = {
        'name': name,
        'price': price,
        'thumbnail': thumbnail,
        'url': url,
        'rating': rating,
        'rating_count': rating_count
    }
    product_data.append(product_info)

print('crawling is done')
print('crawled product number :',product_data.__len__())
[print(x['name'])for x in product_data]