import requests
from bs4 import BeautifulSoup
from fake_useragent import UserAgent


def get_hns_data(keyword):
    try:
        ua = UserAgent()
        url = f'https://www.hnsmall.com/search/search.do?viewtype=matrix&query={keyword}'
        headers = {
            'user-agent': ua.random
        }
        res = requests.get(url)

        html = BeautifulSoup(res.text, 'html.parser')
        uls = html.select('#srchRight > div.cateListWrap.cateListWrap_v2.cateListWrap_v3 > div.viewTypeImg.v2 > ul')
        uls = uls[:5]

        # print(len(uls))

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
                    'product_price': li.select_one('div.textZone > p.price > em').text if li.select_one(
                        'div.textZone > p.price > em') else li.select_one('div.textZone > p.sale_price > em').text,
                    'product_url': li.select_one('div.img > a').get('href'),
                    'product_rating': 0,
                    'product_rating_cnt': 0,
                }
                result.append(data)
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
        return result


if __name__ == '__main__':
    return_list = get_hns_data("apple")
    print(return_list)