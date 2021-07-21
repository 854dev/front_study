/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';
import {
  Layout,
  Menu,
  Breadcrumb,
  Row,
  Input,
  Space,
  Spin,
  Collapse,
} from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'store/index';
// import * as action from 'store/mallReducer';
// import { getItems } from '../api/api';
import MallCard from './MallCards';
import ImgA from '../asset/img/img/react.png';
// import ImgB from '../asset/img/img/watch.jpg';`

interface IData {
  product_title: string;
  product_price: string;
  product_thumbnail: string;
  product_url: string;
  product_rating: number;
  product_rating_cnt: string;
}

function Template() {
  const dispatch = useDispatch();
  console.log(dispatch);
  const { number } = useSelector((state: RootState) => state.numberReducer);
  console.log(number);
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
    getItems().then((res) => setMallItems(res));
    console.log(mallItems);
  };

  useEffect(() => {
    getItemsApi();
  }, []);

  // const increaseModule = () => {
  //   console.log('asd');
  //   dispatch(action.increaseAction);
  // };

  // const decreaseModule = () => {
  //   dispatch(action.decreaseAction);
  // };

  const onSearch = (value: any) => console.log(value);
  const { Panel } = Collapse;

  const callback = (key: any) => {
    console.log(key);
  };

  const renderCard = (itemList: IData[]): React.ReactNode => {
    return itemList.map((item: IData, index: number) => {
      return (
        <MallCard
          key={index}
          name={item.product_title}
          price={item.product_price}
          thumbnail={item.product_thumbnail}
          goodsUrl={item.product_url}
          rating={Number(item.product_rating)}
          rating_cnt={item.product_rating_cnt}
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
          <Collapse defaultActiveKey={['1']} onChange={callback}>
            <Panel header='쿠팡' key='1'>
              <p>
                <Row gutter={[16, 16]} justify='center'>
                  {mallItems.length === 0 ? <Spin /> : renderCard(mallItems)}
                </Row>
              </p>
            </Panel>
            <Panel header='This is panel header 2' key='2'>
              <p>{1}</p>
            </Panel>
            <Panel header='This is panel header 3' key='3'>
              <p>{2}</p>
            </Panel>
          </Collapse>
          ,
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  );
}

export default Template;
