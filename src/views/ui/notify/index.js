import React, { Component } from "react";
import { Card, Button,Icon,notification,Radio } from 'antd';
import './index.less'
export default class Notification extends Component {
    state={
        value: 'topRight'
    }
    handleNotify = (type) => {
        notification[type]({
            message: '标题',
            description: '这是通知的内容',
            
        });
    }

    handleCustomer = (location) => {
        notification.open({
            message: '标题',
            description: '这是通知的内容',
            placement: location,
            icon: <Icon type="smile" style={{ color: '#108ee9' }} />,
        });
    }
    handleChange=(e)=> {
        this.setState({
            value: e.target.value
        })
    }
    render() {
        return (
           <div>
                <Card title='通知'>
                    <Button type='primary' onClick={ ()=>this.handleNotify('success')}>success</Button>
                    <Button type='primary' onClick={ ()=>this.handleNotify('error')}>error</Button>
                    <Button type='primary' onClick={ ()=>this.handleNotify('warning')}>info</Button>
                    <Button type='primary' onClick={ ()=>this.handleNotify('info')}>warning</Button>
                </Card>
                <Card title='自定义图标'>
                    <Button type='primary' onClick={ this.handleCustomer}>自定义位置</Button>
                </Card>
                <Card title='自定义位置'>
                    <Radio.Group onChange={this.handleChange} value={this.state.value}>
                        <Radio value='topLeft'>左上边</Radio>
                        <Radio value='topRight'>右上边</Radio>
                        <Radio value='bottomLeft'>左下边</Radio>
                        <Radio value='bottomRight'>右下边</Radio>
                    </Radio.Group>
                    <Button type='primary' onClick={ ()=> this.handleCustomer(this.state.value)}>自定义</Button>
                </Card>
           </div>
        )
    }

    
}