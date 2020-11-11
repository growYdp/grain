/*
 * @Descripttion: 
 * @Author: growydp
 * @Date: 2020-11-05 16:05:52
 * @LastEditors: growydp
 * @LastEditTime: 2020-11-11 17:33:55
 */
import React, { useEffect } from 'react'
import { getToken } from 'utils/auth'
import Layout from '@/layout'

function Index(props) {
  useEffect(() => {
    if (!getToken()) {
      props.history.push('/login')
    }
  }, [])

  return (
    <div>
      <Layout />
    </div>
  )
}

export default Index