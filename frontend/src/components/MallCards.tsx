/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
// import StarRatings from 'react-star-ratings';
import { Image } from 'antd';
import { IData } from 'store/feature/mallitemSlice';

function MallCards(props: IData) {
  // const { Meta } = Card;
  const {
    product_url,
    product_thumbnail,
    product_title,
    // product_price,
    // product_rating,
    // product_rating_cnt,
  } = props;

  return (
    <a
      href={product_url}
      target='_blank'
      style={{ display: 'flex', marginBottom: '1rem', alignItems: 'center' }}
    >
      {/* <Card
        hoverable
        style={{ width: 240, marginLeft: '4rem' }}
        cover={<img alt='example' src={thumbnail} />}
      >
        <Meta title={name} description={`가격 : ${price}원`} />
        <br />
        <div>
          평점 :&nbsp;
          <StarRatings
            rating={rating}
            starRatedColor='red'
            numberOfStars={5}
            name='rating'
            starDimension='18px'
            starSpacing='2px'
          />
        </div>
        <div>평점 갯수 : {rating_cnt}</div>
      </Card> */}
      <Image
        src={product_thumbnail}
        style={{ width: '32px', height: '32px' }}
      />
      상품명 : {product_title} <br />
      {/* 가격 : {product_price}원 <br /> 평점 : */}
      {/* {product_rating} */}
      {/* <StarRatings
        rating={product_rating}
        starRatedColor='red'
        numberOfStars={5}
        name='rating'
        starDimension='18px'
        starSpacing='2px'
      />{' '} */}
      {/* <br /> 평점 갯수 : {product_rating_cnt} */}
    </a>
  );
}

export default MallCards;
