import React, { Component } from "react";
import { Card, Button,Icon, Form, Input,  } from 'antd';
import './index.less'
const FormItem = Form.Item;
class FormList extends Component {
    hasErrors=(fieldsError) => {
        return Object.keys(fieldsError).some(field => fieldsError[field]);
    }
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
        const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;
        const userNameError = isFieldTouched('userName') && getFieldError('userName');
        const passwordError = isFieldTouched('password') && getFieldError('password');
        return (
           <div>
                <Card title='水平登录栏，常用在顶部导航栏中'>
                    <Form layout="inline" onSubmit={this.handleSubmit}>
                        <FormItem
                            validateStatus={userNameError ? 'error' : ''}
                            help={userNameError || ''}
                        >
                        {getFieldDecorator('userName', {
                            rules: [{ required: true, message: '请输入你的用户名!' }],
                        })(
                            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="用户名" />
                        )}
                        </FormItem>
                        <FormItem
                            validateStatus={passwordError ? 'error' : ''}
                            help={passwordError || ''}
                        >
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: '请输入你的密码!' }],
                        })(
                            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="密码" />
                        )}
                        </FormItem>
                        <FormItem>
                            <Button
                                type="primary"
                                htmlType="submit"
                                disabled={this.hasErrors(getFieldsError())}
                            >
                           登录
                        </Button>
                        </FormItem>
                    </Form>
                </Card>
           </div>
        )
    }

    
}

export default Form.create()(FormList)