/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';
import { Layout, Menu, Breadcrumb, Row, Input, Space, Spin } from 'antd';
import { getItems } from '../api/api';
import MallCard from './MallCards';
import ImgA from '../asset/img/img/react.png';
// import ImgB from '../asset/img/img/watch.jpg';

interface IData {
  name: string;
  price: string;
  thumbnail: string;
  goodsUrl: string;
  rating: number;
  rating_cnt: number;
}

function Template() {
  const [mallItems, setMallItems] = useState<any>([]);

  // const apiData: IData[] = [
  //   {
  //     name: '애플워치',
  //     price: '320,000',
  //     thumbnail: ImgB,
  //     goodsUrl: 'https://google.com',
  //     rating: 1,
  //     rating_cnt: 2,
  //   },
  //   {
  //     name: '애플워치',
  //     price: '320,000',
  //     thumbnail: ImgB,
  //     goodsUrl: 'https://google.com',
  //     rating: 1,
  //     rating_cnt: 2,
  //   },
  //   {
  //     name: '애플워치',
  //     price: '320,000',
  //     thumbnail: ImgB,
  //     goodsUrl: 'https://google.com',
  //     rating: 1,
  //     rating_cnt: 2,
  //   },
  //   {
  //     name: '애플워치',
  //     price: '320,000',
  //     thumbnail: ImgB,
  //     goodsUrl: 'https://google.com',
  //     rating: 1,
  //     rating_cnt: 2,
  //   },
  //   {
  //     name: '애플워치',
  //     price: '320,000',
  //     thumbnail: ImgB,
  //     goodsUrl: 'https://google.com',
  //     rating: 1,
  //     rating_cnt: 2,
  //   },
  //   {
  //     name: '애플워치',
  //     price: '320,000',
  //     thumbnail: ImgB,
  //     goodsUrl: 'https://google.com',
  //     rating: 1,
  //     rating_cnt: 2,
  //   },
  //   {
  //     name: '애플워치',
  //     price: '320,000',
  //     thumbnail: ImgB,
  //     goodsUrl: 'https://google.com',
  //     rating: 1,
  //     rating_cnt: 2,
  //   },
  //   {
  //     name: '애플워치',
  //     price: '320,000',
  //     thumbnail: ImgB,
  //     goodsUrl: 'https://google.com',
  //     rating: 1,
  //     rating_cnt: 2,
  //   },
  //   {
  //     name: '애플워치',
  //     price: '320,000',
  //     thumbnail: ImgB,
  //     goodsUrl: 'https://google.com',
  //     rating: 1,
  //     rating_cnt: 2,
  //   },
  //   {
  //     name: '애플워치',
  //     price: '320,000',
  //     thumbnail: ImgB,
  //     goodsUrl: 'https://google.com',
  //     rating: 1,
  //     rating_cnt: 2,
  //   },
  //   {
  //     name: '애플워치',
  //     price: '320,000',
  //     thumbnail: ImgB,
  //     goodsUrl: 'https://google.com',
  //     rating: 1,
  //     rating_cnt: 2,
  //   },
  //   {
  //     name: '애플워치',
  //     price: '320,000',
  //     thumbnail: ImgB,
  //     goodsUrl: 'https://google.com',
  //     rating: 1,
  //     rating_cnt: 2,
  //   },
  //   {
  //     name: '애플워치',
  //     price: '320,000',
  //     thumbnail: ImgB,
  //     goodsUrl: 'https://google.com',
  //     rating: 1,
  //     rating_cnt: 2,
  //   },
  //   {
  //     name: '애플워치',
  //     price: '320,000',
  //     thumbnail: ImgB,
  //     goodsUrl: 'https://google.com',
  //     rating: 1,
  //     rating_cnt: 2,
  //   },
  //   {
  //     name: '애플워치',
  //     price: '320,000',
  //     thumbnail: ImgB,
  //     goodsUrl: 'https://google.com',
  //     rating: 1,
  //     rating_cnt: 2,
  //   },
  //   {
  //     name: '애플워치',
  //     price: '320,000',
  //     thumbnail: ImgB,
  //     goodsUrl: 'https://google.com',
  //     rating: 1,
  //     rating_cnt: 2,
  //   },
  //   {
  //     name: '애플워치',
  //     price: '320,000',
  //     thumbnail: ImgB,
  //     goodsUrl: 'https://google.com',
  //     rating: 1,
  //     rating_cnt: 2,
  //   },
  //   {
  //     name: '애플워치',
  //     price: '320,000',
  //     thumbnail: ImgB,
  //     goodsUrl: 'https://google.com',
  //     rating: 1,
  //     rating_cnt: 2,
  //   },
  //   {
  //     name: '애플워치',
  //     price: '320,000',
  //     thumbnail: ImgB,
  //     goodsUrl: 'https://google.com',
  //     rating: 1,
  //     rating_cnt: 2,
  //   },
  //   {
  //     name: '애플워치',
  //     price: '320,000',
  //     thumbnail: ImgB,
  //     goodsUrl: 'https://google.com',
  //     rating: 1,
  //     rating_cnt: 2,
  //   },
  //   {
  //     name: '애플워치',
  //     price: '320,000',
  //     thumbnail: ImgB,
  //     goodsUrl: 'https://google.com',
  //     rating: 1,
  //     rating_cnt: 2,
  //   },
  // ];

  const { Search } = Input;

  const getItemsApi = () => {
    const items = getItems();
    items.then((res) => setMallItems(res));
    console.log(mallItems);
  };

  useEffect(() => {
    getItemsApi();
  }, []);

  const onSearch = (value: any) => console.log(value);

  const renderCard = (itemList: IData[]): React.ReactNode => {
    return itemList.map((item: IData, index: number) => {
      return (
        <MallCard
          key={index}
          name={item.name}
          price={item.price}
          goodsUrl={item.goodsUrl}
          thumbnail={item.thumbnail}
          rating={item.rating}
          rating_cnt={item.rating_cnt}
        />
      );
    });
  };

  const { Header, Content, Footer } = Layout;
  return (
    <Layout className='layout'>
      <Header id='components-layout-demo-top'>
        <div
          className='logo'
          style={{
            backgroundImage: `url(${ImgA})`,
            backgroundSize: '100% 100%',
          }}
        />
        <Menu theme='dark' mode='horizontal' defaultSelectedKeys={['2']}>
          {new Array(3).fill(null).map((_, index) => {
            const key = index + 1;
            return <Menu.Item key={key}>{`nav ${key}`}</Menu.Item>;
          })}
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <Row justify='center' style={{ marginTop: '2rem' }}>
          <Space direction='vertical'>
            <Search
              placeholder='input search text'
              onSearch={onSearch}
              enterButton
            />
          </Space>
        </Row>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div className='site-layout-content'>
          <Row gutter={[16, 16]} justify='center'>
            {mallItems.length === 0 ? <Spin /> : renderCard(mallItems)}
          </Row>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  );
}

export default Template;
