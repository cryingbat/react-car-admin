import React, { Component } from "react";
import { Card, Table, Modal, Button, message } from 'antd';
import Fetch from '../../../util/fetch';
import './index.less'
import Utils from "../../../util/index";
export default class TableBase extends Component {
    state = {
        dataSource: [],
        Source: [],
        selectData: [],
        pagenation: null,
    }
    //初始化基础数据
    componentDidMount() {
        const dataSource = [{
            key: '1',
            name: 'John Brown',
            age: 32,
            sex: 1,
            address: 'New York No. 1 Lake Park',
            birth: '2018-12-05',
            work: '前端工程师'
        }, {
            key: '2',
            name: 'Joe Black',
            age: 42,
            sex: 2,
            address: 'London No. 1 Lake Park',
            birth: '2018-12-05',
            work: '前端工程师'
        }];

        this.setState({
            dataSource
        })
        this.requestData()
    }
    //动态表格请求数据
    requestData() {
        Fetch.Get({
            url: '/table/list',
            data: {
                params: {
                    page: 1
                }
            }
        }).then((res) => {
            if (res.code === '0') {
                this.setState({
                    Source: res.result,
                    pagenation: Utils.pagenation(res.result, (current) => {
                        console.log(current);
                    })
                })
            }
        }).catch(err => {
            console.log(err.data);
        })
    }
    //单选行点击
    rowClick = (selectedRows, index) => {
        Modal.info({
            title: '提示',
            content: (
                <div>
                    <div>姓名：{selectedRows.name}</div>
                    <div>年龄：{selectedRows.age}</div>
                </div>
            ),
        });
    }
    //删除所选项
    handleDelete = () => {
        Modal.confirm({
            title: '确定删除所选项吗?',
            content: '删除的选项打印在控制台了',
            cancelText: '取消',
            okText: '确定',
            onOk() {
                message.success('删除成功')
            },
            onCancel() {
                message.error('您取消了删除')
            },
        })
        console.log(this.state.selectData);
    }
    render() {
        const columns = [{
            title: 'Id',
            dataIndex: 'key',
        }, {
            title: '姓名',
            dataIndex: 'name',
        }, {
            title: '年龄',
            dataIndex: 'age',
        }, {
            title: '性别',
            dataIndex: 'sex',
            render(type) {
                return type === 1 ? '男' : '女'
            }
        }, {
            title: '地址',
            dataIndex: 'address',
        }, {
            title: '生日',
            dataIndex: 'birth',
        }, {
            title: '职业',
            dataIndex: 'work',
        }];
        const rowSelection = {
            onChange: (selectedRowKeys, selectedRows) => {
                this.setState({
                    selectData: selectedRows
                })
                console.log(selectedRows);
            },
            onSelectAll: (selected, selectedRows, changeRows) => {
                this.setState({
                    selectData: selectedRows
                })
                console.log(selectedRows);
            },
        };
        const rowSelectionRadio = {
            type: 'radio',
        }
        return (
            <div>
                <Card title='基础表格'>
                    <Table dataSource={this.state.dataSource} columns={columns}></Table>
                </Card>
                <Card title='动态数据表格+单选'>
                    <Table
                        dataSource={this.state.Source}
                        onRow={
                            (record, index) => {
                                return {
                                    onClick: () => {
                                        this.rowClick(record, index)
                                    }
                                }
                            }
                        }
                        rowSelection={rowSelectionRadio}
                        columns={columns}
                    >
                    </Table>
                </Card>
                <Card title='动态数据+可选择'>
                    <Button type='primary' onClick={this.handleDelete}>删除</Button>
                    <Table
                        dataSource={this.state.Source}
                        rowSelection={rowSelection}
                        columns={columns}
                    >
                    </Table>
                </Card>
            </div>
        )
    }
}

