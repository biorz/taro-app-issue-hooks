import { View, Text } from '@tarojs/components'
import { useDidHide, useLoad } from '@tarojs/taro'
import './index.scss'
import Taro from '@tarojs/taro'

export default function Index() {
  const width = Taro.pxTransform(720)

  useLoad(() => {
    console.log('Page loaded.')
  })

  useDidHide(() => {
    debugger
    console.log('Page did hide.')
  })

  return (
    <View className='index'>
      <Text>Hello world!</Text>
      <Text>{ width }</Text>
    </View>
  )
}
