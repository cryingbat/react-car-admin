import React, { Component } from "react";
import { Card, Button, Modal } from 'antd';
const confirm = Modal.confirm;

export default class Buttons extends Component {
    state ={
        loading: false,
        value:'small',
        visible1: false,
        visible2: false,
        visible3: false,
        visible4: false,
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

    handleModals = (type) => {
        this.setState({
            [type]: true
        })
    }

    handleConfirm=() => {
        confirm({
            title: '确定删除所选择的项目吗?',
            content: '删除之后不可恢复',
            onOk() {
                console.log('OK');
            },
            onCancel() {
                console.log('Cancel');
            },
        });
    }

    handleInfo= () => {
        Modal.info({
            title: '这是一个通知类的消息',
            content: (
            <div>
                <p>通知你下午开会</p>
                <p>通知你下午开会</p>
            </div>
            ),
            onOk() {
                console.log('OK');
            },
        });
    }

    handleSuccess= () => {
        Modal.success({
            title: '这是一个成功类的消息',
            content: 'some messages...some messages...',
        }); 
    }

    handleError = () => {
        Modal.error({
            title: '这是一个错误类的消息',
            content: 'some messages...some messages...',
        });
    }

    handleWarning = () => {
        Modal.warning({
            title: '这是一个警告类的消息',
            content: 'some messages...some messages...',
        });
    }
    render() {
        return (
           <div>
                <Card title='基础模态框'>
                    <Button type='primary' onClick={()=>this.handleModals('visible1')}>Open</Button>
                    <Button type='primary' onClick={()=>this.handleModals('visible2')}>自定义页脚</Button>
                    <Button type='primary' onClick={()=>this.handleModals('visible3')}>顶部20px距离</Button>
                    <Button type='primary' onClick={()=>this.handleModals('visible4')}>水平垂直居中</Button>
                </Card>
                <Modal
                    title="基础模态框"
                    visible={this.state.visible1}
                    onOk={this.handleOk}
                    onCancel={()=> {
                        this.setState({
                            visible1: false
                        })
                    }}
                >
                    <p>Some contents...</p>
                </Modal>
                <Modal
                    title="自定义页脚"
                    visible={this.state.visible2}
                    okText='下一步'
                    cancelText = '上一步'
                    onCancel={()=> {
                        this.setState({
                            visible2: false
                        })
                    }}
                >
                    <p>Some contents...</p>
                </Modal>
                <Modal
                    title="顶部20px"
                    visible={this.state.visible3}
                    style={{ top: 20 }}
                    okText='确定'
                    cancelText = '取消'
                    onCancel={()=> {
                        this.setState({
                            visible3: false
                        })
                    }}
                >
                    <p>Some contents...</p>
                </Modal>
                <Modal
                    title="水平垂直居中"
                    visible={this.state.visible4}
                    centered
                    okText='确定'
                    cancelText = '取消'
                    onCancel={()=> {
                        this.setState({
                            visible4: false
                        })
                    }}
                >
                    <p>Some contents...</p>
                </Modal>
                <Card title='信息确认框'>
                    <Button type='primary' onClick={this.handleConfirm}>确认框</Button>
                    <Button type='primary' onClick={this.handleInfo}>信息框</Button>
                    <Button type='primary' onClick={this.handleSuccess}>success</Button>
                    <Button type='primary' onClick={this.handleError}>error</Button>
                    <Button type='primary' onClick={this.handleWarning}>warning</Button>
                </Card>
           </div>
        )
    }

    
}