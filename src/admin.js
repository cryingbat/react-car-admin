import React, { Component } from 'react';
import { Row, Col } from 'antd';
import Header from './components/Header';
import NavLeft from './components/NavLeft';
import Footer from './components/Footer';
import './style/common.less'
class Admin extends Component {
  render() {
    return (
      <Row className='container'>
        <Col span='4' className='nav_left'>
          <NavLeft />
        </Col>
        <Col span='20' className='main'>
          <Header></Header>
          <Row className='content'>zhong</Row>
          <Footer></Footer>
        </Col>
      </Row>      
    );
  }
}

export default Admin;
