// import React from 'react'
import { Product } from "../App";
import ProductListItem from "./ProductListItem"


export default function MallCard(props:any) {
    const {productList, mallName, sovKeyword, isLoading} = props;
    if(productList===undefined) {
        return(            <div className="col-3">
        <div className="card mb-4 box-shadow">
          <div className="card-header d-flex flex-row">
              <div>
                <h4 className="my-0 font-weight-normal">{mallName}</h4>
              </div>
              <div className="text-right">
                  <span className="bold">
                    {0} / {0}
                  </span>
                  <span>
                    {isLoading ? <div className="spinner-border" role="status">
                    <span className="sr-only"></span>
                    </div>
                    : ""}
                  </span>
              </div>
          </div>
          <div className="card-body overflow-scroll sov-mall-card">
            {/* <h1 className="card-title pricing-card-title">$15 <small className="text-muted">/ mo</small></h1> */}
            <div className="list-unstyled mt-3 mb-4">
                수집 실패!
            </div>
          </div>
        </div>
    </div>
)
    }
    else{
        const sovTrigger = productList.filter((elem:Product)=>{
            return elem.product_title.includes(sovKeyword) && sovKeyword.length > 0
        })
        
        return (
            <div className="col-3">
                <div className="card mb-4 box-shadow">
                  <div className="card-header d-flex flex-row">
                      <div>
                        <h4 className="my-0 font-weight-normal">{mallName}</h4>
                      </div>
                      <div className="text-right">
                          <span className="bold">
                            {sovTrigger.length} / {productList.length}
                          </span>
                          <span>
                            {isLoading ? <div className="spinner-border" role="status">
                            <span className="sr-only"></span>
                            </div>
                            : ""}
                          </span>
                      </div>
                  </div>
                  <div className="card-body overflow-scroll sov-mall-card">
                    {/* <h1 className="card-title pricing-card-title">$15 <small className="text-muted">/ mo</small></h1> */}
                    <div className="list-unstyled mt-3 mb-4">
                        {productList.map((elem:any) => (
                            <ProductListItem
                                key={elem.product_url}
                                sovKeyword={sovKeyword}
                                product_title = {elem.product_title}
                                product_price= {elem.product_price}
                                product_thumbnail= {elem.product_thumbnail}
                                product_url= {elem.product_url}
                                product_rating= {elem.product_rating}
                                product_rating_cnt= {elem.product_rating_cnt}
                            />
                        ))}
                    </div>
                  </div>
                </div>
            </div>
        )
    }

}
