/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
// import StarRatings from 'react-star-ratings';
import { Row, Col, Image } from 'antd';
import { IData } from 'store/feature/mallitemSlice';

// interface IData {
//   name: string;
//   price: string;
//   thumbnail: string;
//   goodsUrl: string;
//   rating: number;
//   rating_cnt: string;
// }
function MallCards(props: IData) {
  // const { Meta } = Card;
  const {
    product_url,
    product_thumbnail,
    product_title,
    product_price,
    product_rating,
    product_rating_cnt,
  } = props;

  return (
    <a href={product_url} target='_blank'>
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
      <Row
        gutter={{ xs: 32, sm: 32, md: 24, lg: 24 }}
        style={{ width: '65.5rem' }}
      >
        <Col className='gutter-row' span={8}>
          <Image width={200} src={product_thumbnail} />
        </Col>
        <Col className='gutter-row' span={16} style={{ padding: '4rem' }}>
          상품명 : {product_title} <br /> 가격 : {product_price}원 <br /> 평점 :
          {product_rating}
          {/* <StarRatings
            rating={rating}
            starRatedColor='red'
            numberOfStars={5}
            name='rating'
            starDimension='18px'
            starSpacing='2px'
          />{' '} */}
          <br /> 평점 갯수 : {product_rating_cnt}
        </Col>
      </Row>
    </a>
  );
}

export default MallCards;
