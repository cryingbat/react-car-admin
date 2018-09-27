import React, { Component } from "react";
import App from './App';
import Admin from './admin';
import Login from './views/login';
import Home from './views/home'
import Button from './views/ui/buttons';
import Modals from './views/ui/modals';
import Spin from './views/ui/Spin';
import Notify from './views/ui/notify';
import Message from './views/ui/message';
import Tabs from './views/ui/tabs';
import Card from './views/ui/card';
import Carousel from './views/ui/Carousel';

import Form from './views/form/base';
import alignForm from './views/form/alignForm';
import Regist from './views/form/regist';
import CustomerRegist from './views/form/CustomerRegist';

import TableBase from './views/table/TableBase';

import Permission from './views/permission';

import { BrowserRouter as Router , Switch, Route,Redirect } from 'react-router-dom';
export default class RouterList extends Component {
    render() {
        return (
            <Router>
               <App>
                <Switch>
                        <Route path='/login' component={Login} />
                        <Route path='/' render={()=>
                            <Admin>
                                <Switch>
                                    <Route path='/home' component={Home} />
                                    <Route path='/ui/buttons' component={Button}></Route>
                                    <Route path='/ui/modals' component={Modals}></Route>
                                    <Route path='/ui/Loading' component={Spin}></Route>
                                    <Route path='/ui/notify' component={Notify}></Route>
                                    <Route path='/ui/message' component={Message}></Route>
                                    <Route path='/ui/tab' component={Tabs}></Route>
                                    <Route path='/ui/img' component={Card}></Route>
                                    <Route path='/ui/carousel' component={Carousel}></Route>
                                    <Route path='/form/base' component={Form}></Route>
                                    <Route path='/form/align' component={alignForm}></Route>
                                    <Route path='/form/regist' component={Regist}></Route>
                                    <Route path='/form/customerRegist' component={CustomerRegist}></Route>
                                    <Route path='/table/basic' component={TableBase}></Route>
                                    <Route path='/authorSet' component={Permission}></Route>
                                    <Redirect to="/home" />
                                </Switch>
                            </Admin>
                        }/>
                        <Route path='/order/detail' component={Login} />
                    </Switch>
                </App>
            </Router>
        )
    }
}