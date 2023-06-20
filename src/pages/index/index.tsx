import { View, Text, Button } from '@tarojs/components'
import { useDidHide, useDidShow, useLoad, usePageScroll } from '@tarojs/taro'
import './index.scss'
import Taro from '@tarojs/taro'
import { Component } from 'react'

export default class Index extends Component {
  render() {
    return <IndexFC />
  }
}

function IndexFC() {
  const width = Taro.pxTransform(720)

  usePageScroll((e) => {
    console.log('pageScroll', e)
  })

  useLoad(() => {
    console.log('Page loaded.')
  })

  useDidShow(() => {
    console.log('Page did show.')
  })

  useDidHide(() => {
    console.log('Page did hide.')
  })

  return (
    <View className='index'>
      <Button onClick={() => Taro.navigateTo({ url: '/pages/index2/index'})}>index2</Button>
      <Text>Hello world!</Text>
      <Text>{ width }</Text>

      <View style={{height: 1000}}></View>
    </View>
  )
}
