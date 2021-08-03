import axios from 'axios';

/*----------*/
/* 1. 상수 및 기본함수 */
/*---------*/
// 1.1 베이스URL
const BASE_URL =
  'https://255yfp8yx8.execute-api.ap-northeast-2.amazonaws.com/dev/';
axios.defaults.baseURL = BASE_URL;

// 1.2 URL
const ApiUrls = {
  coupang: 'call_crawl/coupang',
  daaangn: 'call_crawl/daaangn',
  homenshopping: 'call_crawl/homenshopping',
};
// 토큰 없는 GET : 필요시 주석해제
async function axiosGet(url: string, params?: any) {
  try {
    const res = await axios.get(url, { params });
    return res;
  } catch (e) {
    console.log(e);
    return e;
  }
}

/*----------*/
/* 2. 몰별 크롤러 실행 */
/*---------*/
export const ajaxCoupang = (param: MallQuery) => {
  return axiosGet(ApiUrls.coupang, param);
};
export const ajaxDaaangn = () => {
  // return axiosGet(ApiUrls.daaangn, param);
  return {
    msg: 'NO_RESPONSE',
    data: [
      {
        product_url: 'https://www.naver.com',
        product_thumbnail:
          'https://dnvefa72aowie.cloudfront.net/origin/article/202108/b739e75d149519642c5abd0f6d24357fb82e1d071b5719f169cb187353951cd2.webp?q=82&s=300x300&t=crop',
        product_title: '자전거',
        product_price: '500000',
        product_rating: 5,
        product_rating_cnt: 3,
      },
      {
        product_url: 'https://www.naver.com',
        product_thumbnail:
          'https://dnvefa72aowie.cloudfront.net/origin/article/202108/b739e75d149519642c5abd0f6d24357fb82e1d071b5719f169cb187353951cd2.webp?q=82&s=300x300&t=crop',
        product_title: '자전거',
        product_price: '500000',
        product_rating: 5,
        product_rating_cnt: 3,
      },
      {
        product_url: 'https://www.naver.com',
        product_thumbnail:
          'https://dnvefa72aowie.cloudfront.net/origin/article/202108/b739e75d149519642c5abd0f6d24357fb82e1d071b5719f169cb187353951cd2.webp?q=82&s=300x300&t=crop',
        product_title: '자전거',
        product_price: '500000',
        product_rating: 5,
        product_rating_cnt: 3,
      },
      {
        product_url: 'https://www.naver.com',
        product_thumbnail:
          'https://dnvefa72aowie.cloudfront.net/origin/article/202108/b739e75d149519642c5abd0f6d24357fb82e1d071b5719f169cb187353951cd2.webp?q=82&s=300x300&t=crop',
        product_title: '자전거',
        product_price: '500000',
        product_rating: 5,
        product_rating_cnt: 3,
      },
      {
        product_url: 'https://www.naver.com',
        product_thumbnail:
          'https://dnvefa72aowie.cloudfront.net/origin/article/202108/b739e75d149519642c5abd0f6d24357fb82e1d071b5719f169cb187353951cd2.webp?q=82&s=300x300&t=crop',
        product_title: '자전거',
        product_price: '500000',
        product_rating: 5,
        product_rating_cnt: 3,
      },
      {
        product_url: 'https://www.naver.com',
        product_thumbnail:
          'https://dnvefa72aowie.cloudfront.net/origin/article/202108/b739e75d149519642c5abd0f6d24357fb82e1d071b5719f169cb187353951cd2.webp?q=82&s=300x300&t=crop',
        product_title: '자전거',
        product_price: '500000',
        product_rating: 5,
        product_rating_cnt: 3,
      },
    ],
    code: 0,
  };
};
export const ajaxHomenshopping = (param: MallQuery) => {
  return axiosGet(ApiUrls.homenshopping, param);
};

export interface MallQuery {
  query: string;
}
