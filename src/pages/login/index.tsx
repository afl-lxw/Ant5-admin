import React from 'react';
import type { FC } from 'react'
import './index.less'
import loginImg from '@/assets/icon/bg1-2.svg'
import { Button, Form, Input } from 'antd';
import type { FormInstance } from 'antd/es/form';


const Login: FC = () => {
  const [layout, setLayout] = React.useState([
    {
      labelCol: { span: 8 },
      wrapperCol: { span: 16 },
    },
    {
      wrapperCol: { offset: 12, span: 8 },
    }
  ])
  const onFinish = (values: any) => {
    console.log('Success:', values);
    console.log('formRef.current', formRef.current?.getFieldsValue())
  };

  const formRef = React.useRef<FormInstance>(null);

  return (
    <div className='login_container' >
      <div className='login_center'>
        <img className='login_img' src={''} alt="" />
        <div className='logo-from' >
          <Form
            {...layout[0]}
            ref={formRef}
            name="control-ref"
            onFinish={onFinish}
            style={{ maxWidth: 600 }}
          >
            <Form.Item name="account" label="账号" rules={[{ required: true, message: 'Please input your username!' }]}>
              <Input />
            </Form.Item>
            <Form.Item name="password" label="密码" rules={[{ required: true, message: 'Please input your password!' }]}>
              <Input.Password autoComplete="off" />
            </Form.Item>
            <Form.Item name="code" label="验证码" rules={[{ required: true, message: 'Please input your code!' }]}
            >
              <div className='code'>
                <Input style={{ width: '60%' }} />
                <img style={{ height: '32px', background: '#577DF3', width: '35%' }} src={loginImg} alt="" />
              </div>
            </Form.Item>
            <Form.Item {...layout[1]}>
              <Button type="primary" htmlType="submit" style={{ width: '100%' }} >
                Submit
              </Button>
            </Form.Item>
          </Form>

        </div>
      </div>
    </div>
  )
}

export default Login