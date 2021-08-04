/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/no-array-index-key */
import React, { useEffect } from 'react';
import {
  Layout,
  Menu,
  Breadcrumb,
  Row,
  Col,
  Input,
  Space,
  Spin,
  Collapse,
  Card,
} from 'antd';

import * as API from 'api/api';
import mallItemSlice, { IData } from 'store/feature/mallitemSlice';
import { AxiosResponse } from 'axios';

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'store/store';
import MallCard from './MallCards';
import ImgA from '../asset/img/img/react.png';

function Template() {
  const dispatch = useDispatch();
  const items = useSelector((state: RootState) => state.mallItem.items);
  const { Search } = Input;
  const apiCoupang = async (query: string) => {
    const param = { query };
    // 응답 메시지 디폴트 값
    try {
      const acp: AxiosResponse = await API.ajaxCoupang(param);
      if (acp.status === 200) {
        const responseData = acp.data.coupang;
        dispatch(mallItemSlice.actions.SET_ITEM_COUPANG(responseData.data));
      }
    } catch (e) {
      console.log(e);
    }
  };
  const apiDaangn = () => {
    // const param = { query };
    // 응답 메시지 디폴트 값
    let responseData: any = {
      msg: 'NO_RESPONSE',
      data: [],
      code: 0,
    };
    try {
      responseData = API.ajaxDaaangn();
      if (responseData.code === 200) return responseData.data;
      dispatch({
        type: mallItemSlice.actions.SET_ITEM_DAAANGN,
        payload: responseData.data,
      });
    } catch (e) {
      console.log(e);
    }
    return responseData.data;
  };
  const apiHomenshopping = async (query: string) => {
    const param = { query };
    // 응답 메시지 디폴트 값
    let responseData = {
      msg: 'NO_RESPONSE',
      data: [],
      code: 0,
    };
    try {
      responseData = await API.ajaxHomenshopping(param);
      if (responseData.code === 200) return responseData.data;
      dispatch({
        type: mallItemSlice.actions.SET_ITEM_HOMEANDSHOPPING,
        payload: { coupang: responseData.data },
      });
    } catch (e) {
      console.log(e);
    }
    return responseData.data;
  };

  const onSearch = (value: any) => {
    apiDaangn();
  };

  /** SOV 계산버튼 클릭시 이벤트핸들러 */
  const handleSov = (value: string) => {
    const sovEachMall = (keyword: string, itemlist: IData[]) => {
      let shareOfVoice = 0;
      shareOfVoice = itemlist.reduce((p: any, c: any) => {
        if (c.product_title.includes(keyword)) {
          return p + 1 / itemlist.length;
        }
        return p;
      }, 0);
      return shareOfVoice;
    };
    console.log(Object.values(items));
    Object.values(items).forEach((elem) => {
      console.log(sovEachMall(value, elem));
    });
  };

  const { Panel } = Collapse;

  const callback = (key: any) => {
    console.log(key);
  };

  const renderCard = (itemList: IData[]): React.ReactNode => {
    return itemList.map((item, index: number) => {
      return (
        <MallCard
          key={index}
          product_title={item.product_title}
          product_price={item.product_price}
          product_thumbnail={item.product_thumbnail}
          product_url={item.product_url}
          product_rating={Number(item.product_rating)}
          product_rating_cnt={item.product_rating_cnt}
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
            <Search
              placeholder='SOV 계산하기'
              onSearch={handleSov}
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
            <Col span={4}>
              <Card>
                {items.daaangn.length === 0 ? (
                  <Spin />
                ) : (
                  renderCard(items.daaangn)
                )}
              </Card>
            </Col>
            <Col span={4}>
              <Card>
                {items.daaangn.length === 0 ? (
                  <Spin />
                ) : (
                  renderCard(items.daaangn)
                )}
              </Card>
            </Col>
            <Col span={4}>
              <Card>
                {items.daaangn.length === 0 ? (
                  <Spin />
                ) : (
                  renderCard(items.daaangn)
                )}
              </Card>
            </Col>
            <Col span={4}>
              <Card>
                {items.daaangn.length === 0 ? (
                  <Spin />
                ) : (
                  renderCard(items.daaangn)
                )}
              </Card>
            </Col>
            <Col span={4}>
              <Card>
                {items.daaangn.length === 0 ? (
                  <Spin />
                ) : (
                  renderCard(items.daaangn)
                )}
              </Card>
            </Col>
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
