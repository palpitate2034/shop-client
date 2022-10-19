// 所有路由匹配的数组

import Home from '../pages/Home';
import Register from '../pages/Register';
import Login from '../pages/Login';
import Search from '@/pages/Search';
import Detail from '@/pages/Detail';
import AddCartSuccess from '@/pages/AddCartSuccess';

export default [
    {
        path: '/',
        component: Home
    },
    {
        path: '/login',
        component: Login,
        meta: {
            isHideFooter: true
        }
    },
    {
        name: 'register',
        path: '/register',
        component: Register,
        meta: {
            isHideFooter: true
        }
    },
    {
        name: 'search',
        path: '/search/:keyword?',
        component: Search,
        // props: true,  // 只映射params参数
        props: (route) => ({
            keyword3: route.params.keyword,
            keyword4: route.query.keyword2
        })
    },
    {
        path: '/detail/:skuId',
        component: Detail
    },
    {
        path: '/addCartSuccess',
        component: AddCartSuccess
    }
]