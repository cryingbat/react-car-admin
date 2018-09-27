import React, { Component } from "react";
import { Card,Tabs,Icon  } from 'antd';
import '../index.less'
const TabPane = Tabs.TabPane;

export default class Tab extends Component {
    state ={
        panes:[],
        activeKey: '',
        newTabIndex:'0'
    }
    componentWillMount() {
        const panes = [
            { title: 'Tab 1', content: 'Content of Tab 1', key: '1' },
            { title: 'Tab 2', content: 'Content of Tab 2', key: '2' },
            { title: 'Tab 3', content: 'Content of Tab 3', key: '3', closable: false },
        ];
        this.setState({
            activeKey:panes[0].key,
            panes
        })
    }
    onEdit = (targetKey, action) => {
        this[action](targetKey);
    }
    add = () => {
        const panes = this.state.panes;
        const activeKey = `newTab${this.state.newTabIndex++}`;
        
        panes.push({ title: 'New Tab', content: 'Content of new Tab', key: activeKey });
        this.setState({ panes, activeKey });
    }

    remove = (targetKey) => {
        let activeKey = this.state.activeKey;
        let lastIndex;
        this.state.panes.forEach((pane, i) => {
        if (pane.key === targetKey) {
            lastIndex = i - 1;
        }
        });
        const panes = this.state.panes.filter(pane => pane.key !== targetKey);
        if (lastIndex >= 0 && activeKey === targetKey) {
        activeKey = panes[lastIndex].key;
        }
        this.setState({ panes, activeKey });
    }

    onChange = (activeKey) => {
        this.setState({ activeKey });
    }
    render() {
        return (
           <div>
                <Card title='基础Tabs'>
                    <Tabs defaultActiveKey="1">
                        <TabPane tab="Tab 1" key="1">Content of Tab Pane 1</TabPane>
                        <TabPane tab="Tab 2" key="2">Content of Tab Pane 2</TabPane>
                        <TabPane tab="Tab 3" key="3">Content of Tab Pane 3</TabPane>
                    </Tabs>
                </Card>
                <Card title='带图标Tabs'>
                    <Tabs defaultActiveKey="2">
                        <TabPane tab={<span><Icon type="apple" />Tab 1</span>} key="1">
                        Tab 1
                        </TabPane>
                        <TabPane tab={<span><Icon type="android" />Tab 2</span>} key="2">
                        Tab 2
                        </TabPane>
                    </Tabs>
                </Card>
                <Card title='卡片式Tabs'>
                    <Tabs defaultActiveKey="3" type="card">
                        <TabPane tab="Tab 1" key="1">Content of Tab Pane 1</TabPane>
                        <TabPane tab="Tab 2" key="2">Content of Tab Pane 2</TabPane>
                        <TabPane tab="Tab 3" key="3">Content of Tab Pane 3</TabPane>
                    </Tabs>
                </Card>
                <Card title='卡片式Tabs'>
                <Tabs
                    onChange={this.onChange}
                    activeKey={this.state.activeKey}
                    type="editable-card"
                    onEdit={this.onEdit}
                >
                    {this.state.panes.map(pane => <TabPane tab={pane.title} key={pane.key} closable={pane.closable}>{pane.content}</TabPane>)}
                </Tabs>
                </Card>
           </div>
        )
    }

    
}