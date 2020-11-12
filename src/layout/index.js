/*
 * @Descripttion: 
 * @Author: growydp
 * @Date: 2020-11-11 17:33:16
 * @LastEditors: growydp
 * @LastEditTime: 2020-11-12 09:24:22
 */
import React, { useState, createContext } from 'react'
import { Layout } from 'antd';
import './index.less'
import Menu from './component/menu'
import Header from './component/header'
import Content from './component/content'
import Breadcrumb from './component/breadcrumb'

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
      <CollContext.Provider value={pass}>
        <Menu />
        <Layout className="layout-right">
          <Header />
          <Breadcrumb />
          <Content />
        </Layout>
      </CollContext.Provider>
    </Layout>
  )
}

export default LayoutCommon