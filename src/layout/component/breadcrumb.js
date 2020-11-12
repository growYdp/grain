/*
 * @Descripttion: 
 * @Author: growydp
 * @Date: 2020-11-12 09:18:13
 * @LastEditors: growydp
 * @LastEditTime: 2020-11-12 09:19:07
 */

import React from 'react'
import { Breadcrumb } from 'antd'

function BreadcrumbCommon() {
  return (
    <Breadcrumb style={{ margin: '16px 0' }}>
      <Breadcrumb.Item>User</Breadcrumb.Item>
      <Breadcrumb.Item>Bill</Breadcrumb.Item>
    </Breadcrumb>
  )
}

export default BreadcrumbCommon