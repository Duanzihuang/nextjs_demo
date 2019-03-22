import Link from 'next/link'
import dynimac from 'next/dynamic'

import Hello from '../components/Hello'

// const DynamicHello2 = dynimac(import('../components/Hello2'),{
//     loading:() => <p>加载中，请稍候...</p>
// })

const DynamicHello2 = dynimac(import('../components/Hello2'))

// 动态加载组件 (懒加载组件)

export default () => {
    return <div>
        <img src="/static/nextjs.jpg" alt=""/>
        <nav>
            {/* prefetch 预加载About页面的内容 */}
            <Link href="/about" prefetch><a>About</a></Link>
        </nav>
        <Hello/>
        <DynamicHello2/>
        <p>Welcome to Next.js</p>
    </div>
}