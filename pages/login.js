import Head from 'next/head';
import Router from 'next/router'
import React, { Component } from 'react';
import {
  message,
  Form,
  Icon,
  Input,
  Button,
  Checkbox,

} from 'antd';
import '../asserts/styles.less';

const FormItem = Form.Item;

class NormalLoginForm extends Component{

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        //登录成功后跳转
        message.success('登录成功！')
        .then(()=>
          Router.push({
            pathname: '/'
          })
        );
      }
    });
  }

  render(){
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <Head>
          <meta charSet='utf-8' />
          <title>远昊智慧校园</title>
          <meta name='viewport' content='width=device-width, initial-scale=1' />
        </Head>
        <div className="nh-login-wrap">
          <div className="layout-top">
            <img src="/static/img/login-logo.png" alt="远昊智慧校园"/>
            <h1>智慧校园后台管理系统</h1>
          </div>
          <Form onSubmit={this.handleSubmit} className="login-form">
            <FormItem>
              {getFieldDecorator('userName', {
                rules: [{ required: true, message: '请输入手机号码' }],
              })(
                <Input size="large" prefix={<Icon type="mobile" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="手机号码" />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: '请输入密码' }],
              })(
                <Input size="large" prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="登录密码" />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('remember', {
                valuePropName: 'checked',
                initialValue: true,
              })(
                <Checkbox>自动登录</Checkbox>
              )}
              <Button size="large" type="primary" htmlType="submit" className="login-form-button">
                登录
              </Button>
            </FormItem>
          </Form>
        </div>
      </div>
    )
  }


}
export default Form.create()(NormalLoginForm);
