import React, { Component } from "react";
import { Card, Button,Icon, Radio } from 'antd';
import '../index.less'
export default class Buttons extends Component {
    state ={
        loading: false,
        value:'small',
    }
    handleCloseLoading = () => {
        this.setState({
            loading: !this.state.loading
        })
    }

    onChange= (e) => {
        this.setState({
            value: e.target.value
        })
    }
    render() {
        return (
           <div>
                <Card title='基础按钮'>
                    <Button type='primary'>按钮</Button>
                    <Button >按钮</Button>
                    <Button type='dashed'>按钮</Button>
                    <Button type='danger'>按钮</Button>
                    <Button disabled>按钮</Button>
                </Card>
                <Card title='图形按钮'>
                    <Button type='primary' icon='plus'>新增</Button>
                    <Button icon='edit'>编辑</Button>
                    <Button shape='circle' icon='search'></Button>
                    <Button type='dashed' icon='delete'>删除</Button>
                    <Button  icon='search'>搜索</Button>
                    <Button disabled icon='download'>下载</Button>
                </Card>
                <Card title='Loading按钮'>
                    <Button type='primary' loading={true}>确定</Button>
                    <Button shape='circle' loading={true}></Button>
                    <Button loading={true}>点击加载</Button>
                    <Button loading={true}>确定</Button>
                    <Button loading={this.state.loading} onClick={this.handleCloseLoading}>关闭</Button>
                </Card>
                <Card title='按钮组'>
                 <Button.Group>
                    <Button type='primary' icon='left'>返回</Button>
                    <Button type='primary'>当前</Button>
                    <Button type='primary'  onClick={this.handleCloseLoading}>前进<Icon type="right" /></Button>
                 </Button.Group>
                </Card>
                <Card title='按钮尺寸'>
                    <Radio.Group onChange={this.onChange} value={this.state.value}>
                        <Radio value='small'>小</Radio>
                        <Radio value='default'>中</Radio>
                        <Radio value='large'>大</Radio>
                    </Radio.Group>
                    
                    <Button type='primary' size={this.state.value}>按钮</Button>
                    <Button size={this.state.value}>按钮</Button>
                    <Button type='dashed' size={this.state.value}>按钮</Button>
                    <Button type='danger' size={this.state.value}>按钮</Button>
                    <Button disabled size={this.state.value}>按钮</Button>
                </Card>
           </div>
        )
    }

    
}