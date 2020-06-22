import Taro, { Component, useState, useEffect } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import Children from './children'
import './index.scss'
import { demo1, demo2 } from '../../tools/index'
function Index() {
  const [UserName, setUserName] = useState('这是一个首页啊啊啊');
  const [blogTitle, setBlogTitle] = useState('');
  const [introduce, setIntroduce] = useState('')
  const [bloglist, setBloglist] = useState('')
  useEffect(() => {
    setBlogTitle(this.$router.params.blogTitile);
    setIntroduce(this.$router.params.introduce);
  }, [])
  const demoOneClick = () => {
    demo1()
  }
  const demoTwoClick = () => {
    demo2()
  }
  const girls = [
    { id: 1, name: '张三' },
    { id: 2, name: '李四' },
    { id: 3, name: '王五' },
    { id: 4, name: '赵六' }
  ]
  let Name = 5

    Taro.request({
      url: 'https://apiblog.jspang.com/default/getArticleList'
    }).then(res => {
      setBloglist(res.data.list)
      console.log(res.data.list)
    })

  return (
    <View className='index'>
      <Text>{UserName}</Text>
      <Children UserName={UserName}></Children>
      <Text>{blogTitle}</Text>
      <Text>{introduce}</Text>
      <Button onClick={demoOneClick}>demo1</Button>
      <Button onClick={demoTwoClick}>demo2</Button>
      {
        girls.map((item, index) => {
          return (
            <Text key={index}>{item.name}:{item.id}</Text>
          )
        })
      }
      <View>
        {Name === 1 && '张三' || '李四'}
      </View>
      {
        bloglist.map((item,index)=>{
            return (
            <Text key={index}>{item.title}</Text>
            )
        })
      }
    </View>
  )
}
export default Index;