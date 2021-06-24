import requests
from bs4 import BeautifulSoup

def get_hns_data(keyword):

    url = f'https://www.hnsmall.com/search/search.do?viewtype=matrix&query={keyword}'
    res = requests.get(url)

    html = BeautifulSoup(res.text, 'html.parser')
    uls = html.select('#srchRight > div.cateListWrap.cateListWrap_v2.cateListWrap_v3 > div.viewTypeImg.v2 > ul')
    uls = uls[:5]

    print(len(uls))

    result = []
    for ul in uls:
        lis = ul.select('li')
        for li in lis:
            # if li.select_one('div.textZone > p.price > em'):
            #     price = li.select_one('div.textZone > p.price > em').text
            # else:
            #     price = li.select_one('div.textZone > p.sale_price > em').text
            
            data = {
                'product_title': li.select_one('div.textZone > p.goodsName > a > span').text,
                'product_thumbnail': li.select_one('div.img > a > img').get('src'),
                'product_price': li.select_one('div.textZone > p.price > em').text if li.select_one('div.textZone > p.price > em') else li.select_one('div.textZone > p.sale_price > em').text,
                'product_url': li.select_one('div.img > a').get('href'),
                'product_rating': 0,
                'product_rating_cnt': 0,
            }
            result.append(data)
    return result