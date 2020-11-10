/*
 * @Descripttion: 
 * @Author: growydp
 * @Date: 2020-11-05 15:53:45
 * @LastEditors: growydp
 * @LastEditTime: 2020-11-10 16:21:59
 */
import React from 'react'
import './index.less'
import { Button, Form, Input } from 'antd'
import { UserOutlined, EyeOutlined } from '@ant-design/icons';
import ContentImg from 'assets/images/team.png'
import { BTNLOGIN, TIPUSERNAME, TIPPASSWORD } from 'utils/constants'
import { userLogin } from 'apis/user'

function Login() {
  const onFinish = values => {
    userLogin(values).then(response => {
      const { token } = response.data
      
    })
  }

  const onFinishFailed = ({ values, errorFields, outOfDate }) => {
    console.log(values)
    console.log(errorFields)
    console.log(outOfDate)
  }

  return (
    <div className="login-container">
      <div className="login-content">
        <div className="login-content-left">
          <img src={ContentImg} alt=""/>
        </div>
        <div className="login-content-right">
          <div className="login-form">
            <Form
              name="basic"
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
              <Form.Item
                name="username"
                rules={[{ required: true, message: TIPUSERNAME }]}
              >
                <Input prefix={<UserOutlined />} placeholder={TIPUSERNAME} />
              </Form.Item>

              <Form.Item
                name="password"
                rules={[{ required: true, message: TIPPASSWORD }]}
              >
                <Input.Password prefix={<EyeOutlined />} placeholder={TIPPASSWORD} />
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit" block size="large" shape="round">
                  {BTNLOGIN}
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