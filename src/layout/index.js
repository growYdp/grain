/*
 * @Descripttion: 
 * @Author: growydp
 * @Date: 2020-11-11 17:33:16
 * @LastEditors: growydp
 * @LastEditTime: 2020-11-11 18:08:54
 */
import React, { useState, createContext } from 'react'
import { Layout } from 'antd';
import './index.less'
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined
} from '@ant-design/icons';
import Menu from './component/menu'

const { Header, Content } = Layout;

export const CollContext = createContext(false)
function LayoutCommon() {
  const [ coll, setColl ] = useState(false)

  const handleToggle = () => {
    setColl(!coll)
  }

  const pass = {
    coll,
    handleToggle
  }

  return (
    <Layout className="layout-container">
      <CollContext value={pass}>
        <Menu />
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(coll ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: handleToggle,
            })}
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
            Content
          </Content>
        </Layout>
      </CollContext>
    </Layout>
  )
}

export default LayoutCommon