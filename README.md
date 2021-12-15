## 基本的后台框架
使用react + antd技术栈，去redux、mbox等状态库，使用hooks进行状态处理

提供了一下基本支持：
- 权限认证
- 基本布局
- 路由
- 图标
- 网络请求封装（未完善）
- 通用工具（持续更新中）

#### 权限
权限的判定逻辑在```root/src/utils/auth/common.js```中，从后端获取的权限点数据也临时写在里面，实际项目中，需要登录后就向后端请求权限点数据，然后缓存起来。由于权限点通常是无意义的编码，为了易于理解，前端做了一个映射，映射表在```root/src/config/auth.js```，需要权限判定的时候通常使用```root/src/utils/auth/common.js```里面暴露的几个鉴权方法，权限组件通常使用其中的高阶组件```AuthComponent```。

#### 基本布局
包含了顶部heaader，header右侧带有用户栏；左侧sider菜单栏为多级菜单，sider可缩起；暂无footer；

#### 路由
带有404页面以及错误页面，路由配置在```root/src/config/route.js```中