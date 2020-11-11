/*
 * @Descripttion: layout menu
 * @Author: growydp
 * @Date: 2020-11-11 17:52:42
 * @LastEditors: growydp
 * @LastEditTime: 2020-11-11 18:10:44
 */
import React, { useContext } from 'react'
import { Layout, Menu } from 'antd';
import { CollContext } from '../index'
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';

const { Sider } = Layout;

function MenuCommon() {
  const collapse = useContext(CollContext)
  return (
    <Sider trigger={null} collapsible collapsed={collapse.coll}>
      <div className="logo" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
        <Menu.Item key="1" icon={<UserOutlined />}>
          nav 1
        </Menu.Item>
        <Menu.Item key="2" icon={<VideoCameraOutlined />}>
          nav 2
        </Menu.Item>
        <Menu.Item key="3" icon={<UploadOutlined />}>
          nav 3
        </Menu.Item>
      </Menu>
    </Sider>
  )
}

export default MenuCommon