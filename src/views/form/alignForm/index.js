import React, { Component } from "react";
import { Card, Button,Icon, Form, Input,Checkbox  } from 'antd';
import './index.less'
const FormItem = Form.Item;
class FormAlign extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('通过验证: ', values);
            }
        });
    }
    componentDidMount() {
        this.props.form.validateFields();
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
           <div>
                <Card title='登录栏，常用在单独的登录'>
                   <Form onSubmit={this.handleSubmit} className="login-form">
                        <FormItem>
                            {getFieldDecorator('userName', {
                                rules: [{ required: true, message: '请输入用户名!' }],
                            })(
                                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="用户名" />
                            )}
                        </FormItem>
                        <FormItem>
                            {getFieldDecorator('password', {
                                rules: [{ required: true, message: '请输入密码!' }],
                            })(
                                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="密码" />
                            )}
                        </FormItem>
                        <FormItem>
                            {getFieldDecorator('remember', {
                                valuePropName: 'checked',
                                initialValue: true,
                            })(
                                <Checkbox>记住我</Checkbox>
                            )}
                        <a className="login-form-forgot" href="https://github.com/cryingbat/react-car-admin">忘记密码</a>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            登录
                        </Button>
                        <a href="https://github.com/cryingbat/react-car-admin" className='regist'>立即注册!</a>
                        </FormItem>
                    </Form>
                </Card>
           </div>
        )
    }

    
}

export default Form.create()(FormAlign)