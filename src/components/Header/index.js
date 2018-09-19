import React, { Component } from 'react';
import { Row, Col } from 'antd';

export default class Header extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col span='24'>
                        <span>欢迎您，admin</span>
                        <a href="#">退出</a>
                    </Col>
                </Row>
                <Row>
                    <Col span='4'>
                        首页
                    </Col>
                    <Col span='20'>

                    </Col>
                </Row>
            </div>
        )
    }
}