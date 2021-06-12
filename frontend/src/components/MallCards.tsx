/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import StarRatings from 'react-star-ratings';
import { Card } from 'antd';

interface IData {
  name: string;
  price: string;
  thumbnail: string;
  goodsUrl: string;
  rating: number;
  rating_cnt: number;
}
function MallCards({
  name,
  price,
  thumbnail,
  goodsUrl,
  rating,
  rating_cnt,
}: IData) {
  const { Meta } = Card;

  return (
    <a href={goodsUrl} target='_blank'>
      <Card
        hoverable
        style={{ width: 240, marginLeft: '4rem' }}
        cover={<img alt='example' src={thumbnail} />}
      >
        <Meta title={name} description={`가격 : ${price}`} />
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
      </Card>
    </a>
  );
}

export default MallCards;
