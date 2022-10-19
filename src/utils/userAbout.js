
// 这个函数是让用户获取到唯一的标识
// 第一步先从localStorage中获取，如果没有
// 第二部再调用uuid创建新的并存储到localStorage
import { v4 as uuidv4 } from 'uuid';
function getUserTempId() {
    // 这个函数三要素 功能 参数 返回值
    let userTempId = localStorage.getItem('USERTEMPID_KEY')
    if (!userTempId) {
        userTempId = uuidv4()
        localStorage.setItem('USERTEMPID_KEY', userTempId)
    }
    return userTempId
}



export {
    getUserTempId
}