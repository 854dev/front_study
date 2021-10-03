// import { AxiosResponse } from 'axios';
import axios from 'axios';
import React, { useState } from 'react';
import shoppingCrawl from './api/api';
import MallCard from './components/MallCard';
import "./App.css"

type mall =
  | 'coupang'
  | 'daaangn'
  | 'wemakeprice'
  | 'homenshopping'
  | 'navershopping'
  | 'naverpowerproduct'
  | 'naversearchshopping'
  | 'auction';

export interface Product {
  product_title: string;
  product_price: string;
  product_thumbnail: string;
  product_url: string;
  product_rating: string;
  product_rating_cnt: string;
}

const App: React.FC = () => {
  const [isSearching, setIsSearching] = useState(false) 
  const [query, setQuery] = useState('');
  const [currentSovKeyword, setCurrentSovKeyword] = useState('');

  const [sovKeyword, setSovKeyword] = useState('');
  const [coupang, setCoupang] = useState<Product[]>([]);
  const [daaangn, setDaaangn] = useState<Product[]>([]);
  const [wemakeprice, setWemakeprice] = useState<Product[]>([]);
  const [homenshopping, setHomenshopping] = useState<Product[]>([]);
  const [navershopping, setNavershopping] = useState<Product[]>([]);
  const [naverpowerproduct, setNaverpowerproduct] = useState<Product[]>([]);
  const [naversearchshopping, setNaversearchshopping] = useState<Product[]>([]);
  const [auction, setAuction] = useState<Product[]>([]);

  const [isLoadingCoupang, setisLoadingCoupang] = useState(false);
  const [isLoadingDaaangn, setisLoadingDaaangn] = useState(false);
  const [isLoadingWemakeprice, setisLoadingWemakeprice] = useState(false);
  const [isLoadingHomenshopping, setisLoadingHomenshopping] = useState(false);
  const [isLoadingNavershopping, setisLoadingNavershopping] = useState(false);
  const [isLoadingNaverpowerproduct, setisLoadingNaverpowerproduct] = useState(false);
  const [isLoadingNaversearchshopping, setisLoadingNaversearchshopping] = useState(false);
  const [isLoadingAuction, setisLoadingAuction] = useState(false);

  const productContainer = (productList: Product[], mallName:string, sovKeyword:string, isLoading:boolean) => {
    return (
      <>
        <MallCard
          isLoading={isLoading}
          mallName={mallName}
          productList={productList}
          sovKeyword={sovKeyword}
        />
      </>
    );
  };

  const ajaxShoppingCrawl = async (mall: mall, query: string) => {
    setisLoadingCoupang(true)
    setisLoadingDaaangn(true)
    setisLoadingWemakeprice(true)
    setisLoadingHomenshopping(true)
    setisLoadingNavershopping(true)
    setisLoadingNaverpowerproduct(true)
    setisLoadingNaversearchshopping(true)
    setisLoadingAuction(true)

    const result: any = await shoppingCrawl[mall]({ query });
    switch (mall) {
      case 'coupang':
        setCoupang(result.data);
        setisLoadingCoupang(false)
        break;
      case 'daaangn':
        setDaaangn(result.data);
        setisLoadingDaaangn(false)

        break;
      case 'wemakeprice':
        setWemakeprice(result.data);
        setisLoadingWemakeprice(false)

        break;
      case 'homenshopping':
        setHomenshopping(result.data);
        setisLoadingHomenshopping(false)


        break;
      case 'navershopping':
        setNavershopping(result.data);
        setisLoadingNavershopping(false)

        break;
      case 'naverpowerproduct':
        setNaverpowerproduct(result.data);
        setisLoadingNaverpowerproduct(false)

        break;
      case 'naversearchshopping':
        setNaversearchshopping(result.data);
        setisLoadingNaversearchshopping(false)

        break;
      case 'auction':
        setAuction(result.data);
        setisLoadingAuction(false)

        break;
      default:
        break;
    }

  };

  const handleSearchBtnClick = (query: string) => {
    if (query === "") return;

    setIsSearching(true);
    setSovKeyword("");

    axios.all([
      ajaxShoppingCrawl('coupang', query),
      ajaxShoppingCrawl('daaangn', query),
      ajaxShoppingCrawl('wemakeprice', query),
      ajaxShoppingCrawl('homenshopping', query),
      ajaxShoppingCrawl('navershopping', query),
      ajaxShoppingCrawl('naverpowerproduct', query),
      ajaxShoppingCrawl('naversearchshopping', query),
      ajaxShoppingCrawl('auction', query),
    ]);
  };

  const handleSovBtnClick = (query: string) => {
    setSovKeyword(query);
  };

  

  return (
    <>        
        <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
          <h1 className="display-4">쇼핑크롤러 0.1</h1>
        </div>

        <div className="container">
              <div className="App">
                <div id="queryField" className="d-flex flex-row">
                  <input
                    className="form-control"
                    type="text"
                    name="name"
                    placeholder="여기에 검색어 입력"
                    value={query}
                    onChange={(e) => {
                      setQuery(e.target.value);
                    }}
                  />
                  <button
                    className="btn btn-md btn-block btn-primary"
                    onClick={() => {
                      handleSearchBtnClick(query);
                    }}
                  >
                    검색
                  </button>
                </div>
                <div id="sovField" className={isSearching ? "d-flex flex-row": "d-flex flex-row d-none"} >
                  <input
                    className="form-control"
                    type="text"
                    name="name"
                    placeholder="SOV 계산"
                    value={currentSovKeyword}
                    onChange={(e) => {
                      setCurrentSovKeyword(e.target.value);
                    }}
                  />
                  <button
                    className="btn btn-md btn-block btn-danger"
                    onClick={() => {
                      handleSovBtnClick(currentSovKeyword);
                    }}
                  >
                    키워드 노출도 계산
                  </button>
                </div>
                <div className="row">
                  {productContainer(navershopping, "네이버쇼핑", sovKeyword, isLoadingNavershopping)}
                  {productContainer(naverpowerproduct, "네이버파워상품", sovKeyword, isLoadingNaverpowerproduct)}
                  {productContainer(naversearchshopping, "네이버검색 쇼핑", sovKeyword, isLoadingNaversearchshopping)}
                  {productContainer(coupang, "쿠팡", sovKeyword, isLoadingCoupang)}
                  {productContainer(daaangn, "당근마켓", sovKeyword, isLoadingDaaangn)}
                  {productContainer(wemakeprice, "위메프", sovKeyword, isLoadingWemakeprice)}
                  {productContainer(auction, "옥션", sovKeyword, isLoadingAuction)}
                  {productContainer(homenshopping, "홈앤쇼핑", sovKeyword, isLoadingHomenshopping)}
                </div>
        </div>
    </div>
    </>
  );
};

export default App;
