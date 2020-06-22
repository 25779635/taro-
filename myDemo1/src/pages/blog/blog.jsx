import Taro,{useState} from '@tarojs/taro'
import {View,Text,Button} from '@tarojs/components'
function Blog(){
    const [blogTitle,setBlogTitle] = useState('参数一')
    const [introduce,setIntroduce] = useState('参数二')
    const gotoIndex = () => {
        Taro.navigateTo({url:`/pages/index/index?blogTitile=${blogTitle}${introduce}`})
    }
    return (
        <View>
            <Text>Blog页面</Text>
            <Button onClick={gotoIndex}>点击跳转</Button>
        </View>
    )
}
export default Blog
