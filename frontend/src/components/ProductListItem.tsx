// import React from 'react'
// import {Product} from "../App"

export interface SovProduct {
    product_title: string;
    product_price: string;
    product_thumbnail: string;
    product_url: string;
    product_rating: string;
    product_rating_cnt: string;
    sovKeyword:string;
  }
  
export default function ProducListItem(props:SovProduct) {
    const {  
        product_title,
        product_price,
        product_thumbnail,
        product_url,
        product_rating,
        product_rating_cnt,
        sovKeyword
      } = props

    return (
        <div className={product_title.includes(sovKeyword) && sovKeyword.length > 0 ? "d-flex flex-row bg-danger" : "d-flex flex-row"  }>
            <div>
                <span>
                    <img className="icon_thumbnail" src={product_thumbnail} alt="섬네일"></img>
                </span>
            </div>
            <div>
                <div>
                    <a href={product_url}>
                        <span>
                            {product_title}
                        </span>
                    </a>
                    <span>
                        {product_price}
                    </span>
                </div>
                <div>
                    <span>
                        {product_rating}
                    </span>
                    <span>
                        {product_rating_cnt}
                    </span>
                </div>
            </div>
        </div>
    )
}
