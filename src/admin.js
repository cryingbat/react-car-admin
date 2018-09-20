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
        <Col span='3' className='nav_left'>
          <NavLeft />
        </Col>
        <Col span='21' className='main'>
          <Header></Header>
          <Row className='content'>
            {this.props.children}
          </Row>
          <Footer></Footer>
        </Col>
      </Row>      
    );
  }
}

export default Admin;
