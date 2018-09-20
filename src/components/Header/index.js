import React, { Component } from 'react';
import { Row, Col } from 'antd';
import Utils from '../../util';
import './index.less'
export default class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            system:''
        }
    }
    render() {
        return (
            <div className='header'>
                <Row className='header-top'>
                    <Col span='24'>
                        <span>欢迎您，admin</span>
                        <a href="www.baidu.com">退出</a>
                    </Col>
                </Row>
                <Row className='crumb'>
                    <Col span='4' className='crumb-title'>
                        首页
                    </Col>
                    <Col span='20' className='weather'>
                        <span className='date'>{this.state.system}</span>
                        <span className='weather-detail'>天气</span>
                    </Col>
                </Row>
            </div>
        )
    }
    componentWillMount() {
        setInterval(()=> {
          let system =  Utils.formateDate(new Date().getTime())
          this.setState({
              system
          })
        },1000)
    }
}