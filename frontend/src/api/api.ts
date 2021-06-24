/* eslint-disable import/prefer-default-export */
import ImgB from '../asset/img/img/watch.jpg';

interface IData {
  name: string;
  price: string;
  thumbnail: string;
  goodsUrl: string;
  rating: number;
  rating_cnt: number;
}

const sleep = (n: number) => new Promise((resolve) => setTimeout(resolve, n));

const apiData: IData[] = [
  {
    name: '애플워치',
    price: '320,000',
    thumbnail: ImgB,
    goodsUrl: 'https://google.com',
    rating: 5,
    rating_cnt: 852,
  },
  {
    name: '애플워치',
    price: '320,000',
    thumbnail: ImgB,
    goodsUrl: 'https://google.com',
    rating: 2,
    rating_cnt: 2,
  },
  {
    name: '애플워치',
    price: '320,000',
    thumbnail: ImgB,
    goodsUrl: 'https://google.com',
    rating: 2.5,
    rating_cnt: 2,
  },
  {
    name: '애플워치',
    price: '320,000',
    thumbnail: ImgB,
    goodsUrl: 'https://google.com',
    rating: 3,
    rating_cnt: 2,
  },
  {
    name: '애플워치',
    price: '320,000',
    thumbnail: ImgB,
    goodsUrl: 'https://google.com',
    rating: 2,
    rating_cnt: 2,
  },
  {
    name: '애플워치',
    price: '320,000',
    thumbnail: ImgB,
    goodsUrl: 'https://google.com',
    rating: 1,
    rating_cnt: 2,
  },
  {
    name: '애플워치',
    price: '320,000',
    thumbnail: ImgB,
    goodsUrl: 'https://google.com',
    rating: 4,
    rating_cnt: 2,
  },
  {
    name: '애플워치',
    price: '320,000',
    thumbnail: ImgB,
    goodsUrl: 'https://google.com',
    rating: 3.5,
    rating_cnt: 2,
  },
  {
    name: '애플워치',
    price: '320,000',
    thumbnail: ImgB,
    goodsUrl: 'https://google.com',
    rating: 5,
    rating_cnt: 2,
  },
  {
    name: '애플워치',
    price: '320,000',
    thumbnail: ImgB,
    goodsUrl: 'https://google.com',
    rating: 2,
    rating_cnt: 2,
  },
  {
    name: '애플워치',
    price: '320,000',
    thumbnail: ImgB,
    goodsUrl: 'https://google.com',
    rating: 1,
    rating_cnt: 2,
  },
  {
    name: '애플워치',
    price: '320,000',
    thumbnail: ImgB,
    goodsUrl: 'https://google.com',
    rating: 1,
    rating_cnt: 2,
  },
  {
    name: '애플워치',
    price: '320,000',
    thumbnail: ImgB,
    goodsUrl: 'https://google.com',
    rating: 1,
    rating_cnt: 2,
  },
  {
    name: '애플워치',
    price: '320,000',
    thumbnail: ImgB,
    goodsUrl: 'https://google.com',
    rating: 1,
    rating_cnt: 2,
  },
  {
    name: '애플워치',
    price: '320,000',
    thumbnail: ImgB,
    goodsUrl: 'https://google.com',
    rating: 1,
    rating_cnt: 2,
  },
  {
    name: '애플워치',
    price: '320,000',
    thumbnail: ImgB,
    goodsUrl: 'https://google.com',
    rating: 1,
    rating_cnt: 2,
  },
  {
    name: '애플워치',
    price: '320,000',
    thumbnail: ImgB,
    goodsUrl: 'https://google.com',
    rating: 1,
    rating_cnt: 2,
  },
  {
    name: '애플워치',
    price: '320,000',
    thumbnail: ImgB,
    goodsUrl: 'https://google.com',
    rating: 1,
    rating_cnt: 2,
  },
  {
    name: '애플워치',
    price: '320,000',
    thumbnail: ImgB,
    goodsUrl: 'https://google.com',
    rating: 1,
    rating_cnt: 2,
  },
  {
    name: '애플워치',
    price: '320,000',
    thumbnail: ImgB,
    goodsUrl: 'https://google.com',
    rating: 1,
    rating_cnt: 2,
  },
  {
    name: '애플워치',
    price: '320,000',
    thumbnail: ImgB,
    goodsUrl: 'https://google.com',
    rating: 1,
    rating_cnt: 2,
  },
];

export const getItems = async () => {
  await sleep(500); // 0.5초 쉬고
  return apiData; // peymentHeader 배열
};
