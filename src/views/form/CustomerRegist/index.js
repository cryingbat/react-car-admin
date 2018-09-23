import React, { Component } from "react";
import { Card, Form, Input, DatePicker, Col, TimePicker, Select  } from 'antd';
import './index.less'
const FormItem = Form.Item;
const Option = Select.Option;

export default class CustomerRegist extends Component {
    
    render() {
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 5 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 12 },
            },
        };
        return (
           <div>
                <Card title='验证的各种状态'>
                   <Form>
                        <FormItem
                            {...formItemLayout}
                            label="失败"
                            validateStatus="error"
                            help="应该包含字母数字"
                        >
                            <Input placeholder="不合法的输入" id="error" />
                        </FormItem>

                        <FormItem
                            {...formItemLayout}
                            label="失败"
                            hasFeedback
                            validateStatus="error"
                            help = "应该包含字母数字"
                        >
                            <Input placeholder="不合法的输入" id="error" />
                        </FormItem>

                        <FormItem
                            {...formItemLayout}
                            label="警告"
                            validateStatus="warning"
                        >
                            <Input placeholder="警告状态" id="warning" />
                        </FormItem>

                        <FormItem
                            {...formItemLayout}
                            label="警告"
                            hasFeedback
                            validateStatus="warning"
                        >
                            <Input placeholder="警告状态" id="warning" />
                        </FormItem>

                        <FormItem
                            {...formItemLayout}
                            label="正在验证"
                            hasFeedback
                            validateStatus="validating"
                            help="填写的信息正在被验证..."
                        >
                            <Input placeholder="信息正在被校验" id="validating" />
                        </FormItem>

                        <FormItem
                            {...formItemLayout}
                            label="成功"
                            hasFeedback
                            validateStatus="success"
                        >
                            <Input placeholder="成功的内容" id="success" />
                        </FormItem>

                        <FormItem
                            {...formItemLayout}
                            label="成功"
                            hasFeedback
                            validateStatus="success"
                        >
                            <DatePicker style={{ width: '100%' }} />
                        </FormItem>

                        <FormItem
                        {...formItemLayout}
                            label="警告"
                            hasFeedback
                            validateStatus="warning"
                        >
                        <TimePicker style={{ width: '100%' }} />
                        </FormItem>

                        <FormItem
                            {...formItemLayout}
                            label="错误"
                            hasFeedback
                            validateStatus="error"
                        >
                            <Select defaultValue="1">
                                <Option value="1">Option 1</Option>
                                <Option value="2">Option 2</Option>
                                <Option value="3">Option 3</Option>
                            </Select>
                        </FormItem>

                        <FormItem
                            label="行内"
                            {...formItemLayout}
                        >
                            <Col span={11}>
                                <FormItem validateStatus="error" help="请选择正确的日期">
                                <DatePicker />
                                </FormItem>
                            </Col>
                            <Col span={2}>
                                <span style={{ display: 'inline-block', width: '100%', textAlign: 'center' }}>
                                -
                                </span>
                            </Col>
                            <Col span={11}>
                                <FormItem>
                                <DatePicker />
                                </FormItem>
                            </Col>
                        </FormItem>
                    </Form>
                </Card>
           </div>
        )
    }
}

 