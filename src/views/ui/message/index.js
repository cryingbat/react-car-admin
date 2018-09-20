import React, { Component } from "react";
import { Card, Button, message } from 'antd';
import './index.less'
export default class Buttons extends Component {
    state = {
        value: 'topRight'
    }
    handleMessage = (type) => {
        message[type](' 这是一个消息通知的提示框');
    }
    handleCustomer= () => {
        message.loading('正在加载', 2.5)
            .then(() => message.success('加载完成', 2.5))
            .then(() => message.info('加载完成之后', 2.5));
    }
    render() {
        return (
            <div>
                <Card title='基础通知'>
                    <Button type='primary' onClick={() => this.handleMessage('success')}>success</Button>
                    <Button type='primary' onClick={() => this.handleMessage('error')}>error</Button>
                    <Button type='primary' onClick={() => this.handleMessage('warning')}>warning</Button>
                    <Button type='primary' onClick={() => this.handleMessage('info')}>info</Button>
                </Card>
                <Card title='通知回调'>
                    <Button type='primary' onClick={this.handleCustomer}>加载完回调</Button>
                </Card>
            </div>
        )
    }
}