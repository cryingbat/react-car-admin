import React, { Component } from "react";
import App from './App';
import Admin from './admin';
import Login from './views/login';
import Button from './views/ui/buttons';
import Modals from './views/ui/modals';
import Spin from './views/ui/Spin';
import Notify from './views/ui/notify';
import Message from './views/ui/message';
import NoMatch from './components/NoMatch'
import { HashRouter, Switch, Route } from 'react-router-dom';
export default class RouterList extends Component {
    render() {
        return (
            <HashRouter>
               <App>
                    <Route path='/login' component={Login} />
                    <Route path='/admin' render={()=>
                        <Admin>
                            <Switch>
                                <Route path='/admin/ui/buttons' component={Button}></Route>
                                <Route path='/admin/ui/modals' component={Modals}></Route>
                                <Route path='/admin/ui/Loading' component={Spin}></Route>
                                <Route path='/admin/ui/notify' component={Notify}></Route>
                                <Route path='/admin/ui/message' component={Message}></Route>
                                <Route path='/admin/ui/tab' component={Button}></Route>
                                <Route path='/admin/ui/img' component={Button}></Route>
                                <Route path='/admin/ui/carousel' component={Button}></Route>
                                <Route component={NoMatch} />
                            </Switch>
                        </Admin>
                    }/>
                    <Route path='/order/detail' component={Login} />
               </App>
            </HashRouter>
        )
    }
}