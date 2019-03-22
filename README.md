# nextjs_demo
React同构(服务端渲染)框架nextjs

> https://nextjs.org/

### 使用步骤

```
1、创建好项目，目录结构有严格要求
	根目录
	  |-- components 存放组件
	  |-- pages 存放页面，文件名就是路由地址
	  |-- static 存放静态资源
	
2、写好pages、components下面的代码

3、安装包
	npm install --save next react react-dom
	
4、package.json中配置编译及运行脚本
	{
      "scripts": {
        "dev": "next",
        "build": "next build",
        "start": "next start"
      }
    }
    
5、编译项目
	yarn build
	
6、运行项目
	yarn start
	
7、浏览器中输入 http://localhost:3000 查看结果
```

### 注意事项

```
1、pages下面的页面名字即是路由地址

2、必须先编译（yarn build） 然后在再运行（yarn start）

3、Link中可以通过prefetch预加载，提高加载效率

4、nextjs可以通过 next/dynamic 动态加载（懒加载）组件
```

