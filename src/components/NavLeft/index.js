import React, { Component } from 'react';
import NavList from "../../config/menu";
import { Menu } from 'antd';
import { connect } from 'react-redux'
import {NavLink} from 'react-router-dom'
import { switchMenu } from './../../redux/action'
import "./index.less";
const SubMenu = Menu.SubMenu;

 class Nav extends Component {
    state = {
        currentKey: ''
    }
    componentWillMount() {
        const menu = this.renderNav(NavList);
        let currentKey = window.location.hash.replace(/#|\?.*$/g,'');
        this.setState({
            currentKey,
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
                        <NavLink to={item.key}> {item.title}</NavLink> 
                    </Menu.Item>
        })
    }

    // 菜单点击
    handleClick = ({ item, key }) => {
        if (key === this.state.currentKey) {
            return false;
        }
        // 事件派发，自动调用reducer，通过reducer保存到store对象中
        const { dispatch } = this.props;
        dispatch(switchMenu(item.props.title));

        this.setState({
            currentKey: key
        });
        // hashHistory.push(key);
    };
    homeHandleClick = () => {
        const { dispatch } = this.props;
        dispatch(switchMenu('首页'));
        this.setState({
            currentKey: ""
        });
    };
    render() {
        return (
            <div>
                <NavLink to="/home" onClick={this.homeHandleClick}>
                    <div className='logo'>
                        <img src={require('../../assets/images/logo.jpg')} alt='加载失败'/>
                        <h1>后台管理</h1>
                    </div>
                </NavLink>
                <Menu
                    onClick={this.handleClick}
                    mode="inline"
                    theme='dark'
                >
                    {this.state.menu}
                </Menu>
            </div>
        )
    }
}
export default connect()(Nav)