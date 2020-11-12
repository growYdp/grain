/*
 * @Descripttion: layout header
 * @Author: growydp
 * @Date: 2020-11-12 08:29:40
 * @LastEditors: growydp
 * @LastEditTime: 2020-11-12 09:27:37
 */
import React, { useContext } from 'react'
import { Layout } from 'antd'
import { CollContext } from '../index'
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined
} from '@ant-design/icons'
const { Header } = Layout;

function HeaderCommon() {
  const collapse = useContext(CollContext)

  const handle = () => {
    collapse.handleToggle()
  }
  
  return ( 
    <Header className="layout-header">
      {React.createElement(collapse.coll ? MenuUnfoldOutlined : MenuFoldOutlined, {
        className: 'layout-header-trigger',
        onClick: handle,
      })}
    </Header>
  )
}

export default HeaderCommon