import React, { Component } from "react";
import { Card, Icon, Spin, Alert  } from 'antd';
import './index.less'
export default class Spins extends Component {
    render() {
        const icon = <Icon type='loading' />
        return (
           <div>
                <Card title='基础Spin'>
                    <Spin size="small" />
                    <Spin />
                    <Spin size="large" />
                    <Spin  indicator={icon}/>
                </Card>
                <Card title='内容遮罩'>
                    <Spin tip="Loading...">
                        <Alert 
                            message='react'
                            description='这是一段描述的文字'
                            type = "success"
                        />
                    </Spin>
                    <Spin tip="Loading..." indicator={icon}>
                        <Alert 
                            message='react'
                            description='这是一段描述的文字'
                            type = "info"
                        />
                    </Spin>
                    <Spin tip="Loading...">
                        <Alert 
                            message='react'
                            description='这是一段描述的文字'
                            type = "warning"
                        />
                    </Spin>
                </Card>
           </div>
        )
    }

    
}