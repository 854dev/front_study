import requests
from bs4 import BeautifulSoup as bs

def coupang_crawler(keyword):

    session = requests.session()
    base_url = 'https://www.coupang.com/np/search'
    params = {
        'component':None,
        'q':keyword,
        'channel':'user'
    }
    session.headers['user-agent'] = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.272 Whale/2.9.117.22 Safari/537.36'
    session.headers['upgrade-insecure-requests'] = '1'
    session.headers['referer']='referer: https://www.coupang.com/'

    res = session.get(base_url, params=params)

    html = bs(res.text,'html.parser')
    product_list = html.select('ul#productList li')
    product_data = []
    for x in product_list:

        if 'search-product__ad-badge' in x.attrs['class']:
            continue
        name = x.select_one('a > dl > dd.descriptions > div > div.name').get_text()
        try:
            price = x.select_one(
                'a > dl > dd.descriptions > div > div.price-area > div.price-wrap > div.price > span.price-info > del.base-price').get_text()
        except Exception as e:
            price = '1000000000000000000'
        sale = x.select_one(
            'a > dl > dd.descriptions > div > div.price-area > div.price-wrap > div.price > em.sale > strong.price-value').get_text()
        price = int(price.replace(',', ''))
        sale = int(sale.replace(',', ''))
        if price > sale:
            price = sale
        thumbnail_url = x.select_one('a > dl > dt.image > img').attrs['src']
        if thumbnail_url == '//img1a.coupangcdn.com/image/coupang/search/blank1x1.gif':
            thumbnail_url = x.select_one('a > dl > dt.image > img').attrs['data-img-src']
        url = 'www.coupang.com' + x.select_one('a.search-product-link').attrs['href']
        try:
            rating = x.select_one('em.rating').get_text()
        except:
            rating = '0.0'
        try:
            rating_count = x.select_one('span.rating-total-count').get_text().replace('(','').replace(')','')
        except:
            rating_count = '0'
        product_info = {
            'product_title' : name,
            'product_price' : price,
            'product_thumbnail' : thumbnail_url,
            'product_url' : url,
            'product_rating' : rating,
            'product_rating_cnt' : rating_count
        }
        product_data.append(product_info)
    return product_data