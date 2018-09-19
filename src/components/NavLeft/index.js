import React, { Component } from 'react';
import NavList from "../../config/menu";
import { Menu, Icon } from 'antd';
import "./index.less";
const SubMenu = Menu.SubMenu;

export default class NavLeft extends Component {
    componentWillMount() {
        const menu = this.renderNav(NavList);
        this.setState({
            menu
        })
    }
    renderNav = (data) => {
        return data.map((item) => {
            if (item.children) {
                return (
                    <SubMenu
                        title={item.title}
                        key={item.key}
                    >
                        {this.renderNav(item.children)}
                    </SubMenu>
                )

            }
            return <Menu.Item 
                        title={item.title}
                        key={item.key}
                    >
                    {item.title}
                    </Menu.Item>
        })
    }
    render() {

        return (
            <div>
                <div className='logo'>
                    <img src='' />
                    <h1>后台管理</h1>
                </div>
                <Menu
                    mode="inline"
                    theme='dark'
                >
                    {this.state.menu}
                </Menu>
            </div>
        )
    }

}