import axios from 'axios';
/**
 * 타입
 *
 */
export interface MallQuery {
  query: string;
}

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
  wemakeprice: 'call_crawl/wemakeprice',
  navershopping: 'call_crawl/navershopping/854',
  naverpowerproduct: 'call_crawl/naverpowerproduct',
  naversearchshopping: 'call_crawl/naversearchshopping',
  auction: 'call_crawl/auction',
};

// 토큰 없는 GET
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
const shoppingCrawl = {
  coupang: (param: MallQuery) => {
    return axiosGet(ApiUrls.coupang, param);
  },
  daaangn: (param: MallQuery) => {
    return axiosGet(ApiUrls.daaangn, param);
  },
  wemakeprice: (param: MallQuery) => {
    return axiosGet(ApiUrls.wemakeprice, param);
  },
  homenshopping: (param: MallQuery) => {
    return axiosGet(ApiUrls.homenshopping, param);
  },
  navershopping: (param: MallQuery) => {
    return axiosGet(ApiUrls.navershopping, param);
  },
  naverpowerproduct: (param: MallQuery) => {
    return axiosGet(ApiUrls.naverpowerproduct, param);
  },
  naversearchshopping: (param: MallQuery) => {
    return axiosGet(ApiUrls.naversearchshopping, param);
  },
  auction: (param: MallQuery) => {
    return axiosGet(ApiUrls.auction, param);
  },
};
export default shoppingCrawl;

// export const coupang = (param: MallQuery) => {
//   return axiosGet(ApiUrls.coupang, param);
// };
// export const daaangn = (param: MallQuery) => {
//   return axiosGet(ApiUrls.daaangn, param);
// };
// export const wemakeprice = (param: MallQuery) => {
//   return axiosGet(ApiUrls.homenshopping, param);
// };
// export const homenshopping = (param: MallQuery) => {
//   return axiosGet(ApiUrls.homenshopping, param);
// };
// export const navershopping = (param: MallQuery) => {
//   return axiosGet(ApiUrls.homenshopping, param);
// };
// export const naverpowerproduct = (param: MallQuery) => {
//   return axiosGet(ApiUrls.homenshopping, param);
// };
// export const naversearchshopping = (param: MallQuery) => {
//   return axiosGet(ApiUrls.homenshopping, param);
// };
// export const auction = (param: MallQuery) => {
//   return axiosGet(ApiUrls.homenshopping, param);
// };
