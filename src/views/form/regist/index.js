import React, { Component } from "react";
import { Card, Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete } from 'antd';
import './index.less'
const FormItem = Form.Item;
const Option = Select.Option;
const AutoCompleteOption = AutoComplete.Option;
const residences = [{
    value: '浙江',
    label: '浙江',
    children: [{
        value: '杭州',
        label: '杭州',
        children: [{
            value: '西湖',
            label: '西湖',
        }],
    }],
}, {
    value: '江苏',
    label: '江苏',
    children: [{
        value: '南京',
        label: '南京',
        children: [{
            value: '中华门',
            label: '中华门',
        }],
    }],
}];
class Regist extends Component {
    state = {
            confirmDirty: false,
            autoCompleteResult: [],
        };

        handleSubmit = (e) => {
            e.preventDefault();
            this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('验证通过: ', values);
            }
            });
        }

        handleConfirmBlur = (e) => {
            const value = e.target.value;
            this.setState({ confirmDirty: this.state.confirmDirty || !!value });
        }

        compareToFirstPassword = (rule, value, callback) => {
            const form = this.props.form;
            if (value && value !== form.getFieldValue('password')) {
            callback('Two passwords that you enter is inconsistent!');
            } else {
            callback();
            }
        }

        validateToNextPassword = (rule, value, callback) => {
            const form = this.props.form;
            if (value && this.state.confirmDirty) {
            form.validateFields(['confirm'], { force: true });
            }
            callback();
        }

        handleWebsiteChange = (value) => {
            let autoCompleteResult;
            if (!value) {
            autoCompleteResult = [];
            } else {
            autoCompleteResult = ['.com', '.org', '.net'].map(domain => `${value}${domain}`);
            }
            this.setState({ autoCompleteResult });
        }
    render() {
        const { getFieldDecorator } = this.props.form;
        const { autoCompleteResult } = this.state;
         const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 4 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 8 },
            },
            };
            const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                span: 24,
                offset: 0,
                },
                sm: {
                span: 16,
                offset: 4,
                },
            },
            };
            const prefixSelector = getFieldDecorator('prefix', {
            initialValue: '86',
            })(
            <Select style={{ width: 70 }}>
                <Option value="86">+86</Option>
                <Option value="87">+87</Option>
            </Select>
            );

            const websiteOptions = autoCompleteResult.map(website => (
                <AutoCompleteOption key={website}>{website}</AutoCompleteOption>
            ));
        return (
           <div>
                <Card title='注册栏，常用在单独的注册'>
                   <Form onSubmit={this.handleSubmit}>
                        <FormItem
                            {...formItemLayout}
                            label="邮箱"
                        >
                            {getFieldDecorator('email', {
                                rules: [{
                                    type: 'email', message: '邮箱不合法!',
                                }, {
                                    required: true, message: '邮箱不能为空!',
                                }],
                            })(
                                <Input />
                            )}
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label="密码"
                        >
                            {getFieldDecorator('password', {
                                rules: [{
                                required: true, message: '密码不能为空!',
                                }, {
                                validator: this.validateToNextPassword,
                                }],
                            })(
                                <Input type="password" />
                            )}
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label="确认密码"
                        >
                            {getFieldDecorator('confirm', {
                                rules: [{
                                required: true, message: '密码不能为空!',
                                }, {
                                validator: this.compareToFirstPassword,
                                }],
                            })(
                                <Input type="password" onBlur={this.handleConfirmBlur} />
                            )}
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label={(
                                <span>
                                昵称&nbsp;
                                <Tooltip title="昵称一经设置不允许修改">
                                    <Icon type="question-circle-o" />
                                </Tooltip>
                                </span>
                            )}
                        >
                            {getFieldDecorator('nickname', {
                                rules: [{ required: true, message: '请输入昵称!', whitespace: true }],
                            })(
                                <Input />
                            )}
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label="常用输入固定选择"
                        >
                        {getFieldDecorator('residence', {
                            initialValue: ['浙江', '杭州', '西湖'],
                            rules: [{ type: 'array', required: true, message: '请选择您的住处!' }],
                        })(
                            <Cascader options={residences} />
                        )}
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label="手机号"
                        >
                            {getFieldDecorator('phone', {
                                rules: [{ required: true, message: '手机号不能为空!' }],
                            })(
                                <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
                            )}
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label="网站"
                        >
                        {getFieldDecorator('website', {
                            rules: [{ required: true, message: '网站不能为空!' }],
                        })(
                            <AutoComplete
                                dataSource={websiteOptions}
                                onChange={this.handleWebsiteChange}
                                placeholder="请输入网址"
                            >
                            <Input />
                            </AutoComplete>
                        )}
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label="验证码"
                            extra=""
                        >
                        <Row gutter={8}>
                            <Col span={12}>
                                {getFieldDecorator('captcha', {
                                    rules: [{ required: true, message: '请输入验证码!' }],
                                })(
                                    <Input />
                                )}
                            </Col>
                            <Col span={12}>
                            <Button>获取验证码</Button>
                            </Col>
                        </Row>
                        </FormItem>
                        <FormItem {...tailFormItemLayout}>
                            {getFieldDecorator('agreement', {
                                valuePropName: 'checked',
                            })(
                                <Checkbox>我已经同意 <a href="https://github.com/cryingbat/react-car-admin">注册条例</a></Checkbox>
                            )}
                        </FormItem>
                        <FormItem {...tailFormItemLayout}>
                            <Button type="primary" htmlType="submit">注册</Button>
                        </FormItem>
                    </Form>
                </Card>
           </div>
        )
    }
}

export default Form.create()(Regist)