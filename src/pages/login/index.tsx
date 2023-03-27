import React from 'react';
import type { FC } from 'react'
import './index.less'
import loginImg from '@/assets/icon/bg1-2.svg'
import { Button, Form, Input, message } from 'antd';
import type { FormInstance } from 'antd/es/form';
import loginBC from '@/assets/image/login.png'
// import LayoutBC from '@/components/common/loginBC/loginBg'
import { useLocalStorageState } from 'ahooks';
import { useNavigate } from "react-router-dom";

interface loginProps {

}

const Login: FC<loginProps> = <T extends unknown>(props) => {
  const navgate = useNavigate()
  const [layout, setLayout] = React.useState([
    {
      labelCol: { span: 8 },
      wrapperCol: { span: 16 },
    },
    {
      wrapperCol: { offset: 8, span: 8 },
    }
  ])
  const [token, setToken] = useLocalStorageState<string | undefined>(
    'token',
    undefined
  )
  const [messageApi, contextHolder] = message.useMessage();
  const success = () => {
    setToken('token-liuxiaowen')
    message.success('登录成功')
    navgate('/')
  };

  const onFinish = (values: any) => {
    console.log('Success:', values);
    console.log('formRef.current', formRef.current?.getFieldsValue())
    const { account, code, password } = values
    if (account && code && password) {
      success()
    }
  };


  React.useEffect(() => {

  })

  const formRef = React.useRef<FormInstance>(null);

  return (
    <div className='login_container' >
      <div className='flex justify-between items-center' style={{ width: '70%' }} >
        <img className='login_img' style={{ width: '530px', height: '400px' }} src={''} alt="" />
        <div className='login_center'>
          <div className='logo-from' >
            <Form
              {...layout[0]}
              ref={formRef}
              name="control-ref"
              onFinish={onFinish}
              labelAlign="left"
            // style={{ maxWidth: 400 }}
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
                  <img style={{ height: '32px', background: '#577DF3', width: '35%' }} src={''} alt="占位" />
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
    </div>
  )
}

export default Login