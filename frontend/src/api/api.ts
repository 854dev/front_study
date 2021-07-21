import axios from 'axios';

/*----------*/
/* 1. 상수 및 기본함수 */
/*---------*/
// 1.1 베이스URL
const BASE_URL = 'http://127.0.0.1:8000';
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
export const ajaxDaaangn = (param: MallQuery) => {
  return axiosGet(ApiUrls.daaangn, param);
};
export const ajaxHomenshopping = (param: MallQuery) => {
  return axiosGet(ApiUrls.homenshopping, param);
};

export interface MallQuery {
  query: string;
}
