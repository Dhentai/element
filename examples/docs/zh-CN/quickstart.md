## 介绍 Firefly
本节介绍为何要推出 Firefly

### 背景
- 一、目前前端处于方兴未艾的阶段，对于前端开发人员来说，无论是入行还是进阶，也还算最佳的时候。
- 二、2017前端市场的火热度
    - PWA（Progressive Web Apps 渐进式网络应用技术  由谷歌提出用前沿的技术开发，让网页使用如同APP般的体验的一系列方案 同事宣布PWA将获得与安卓原生应用同等待遇的体验）
    - typeScript （它是javaScript的一个超集 添加了静态类型和真正基于类的面向对象编程）
    - webpack (简单的来说就是javaScript的模块打包工具  替代gulp 等自动构建工具)
    - 前端MVVM框架的BBA，react/vue/angular.
    - 页面布局的简单化 flex布局方式替代 传统 float 、 inline-block布局。
    - 其他方面 微信小程序，在今年是大爆炸。
- 三、Firefly使用了哪些开源技术栈
    - vux 2.x    （基础MVVM框架）
    - ES6        （目前javaScript的新标准）
    - vue-router （vue路由相关插件）
    - vuex       （vue全局状态管理插件）
    - axios      （基于promise的HTTP库）
    - sass       （css的预处理）
    - webpack 3  （前端工程模块打包工具）
- 四、与之前oasisl的比较 前端技术栈脱离不了两个层次。场景边界与开发效率。
    - 不认为"vue全家桶技术栈"就比 "jQuery全家桶技术栈"强。一切都是考虑技术场景，谁比谁适合的问题
    - 1.开发效率，按照项目的需求来确定场景，是否需要考虑前后端分离、是否考虑seo。项目需求的可迭代程度，项目的大小。（比如一个简单的活动页面就不需要开发一堆一次性的vue组件）
    - 2.持续集成，一旦有项目，那么就存在，上线，修复BUG，合作，甚至交接。那么在目前前后端分离，前端工程化的前提下，一个可持续集成工程化项目架构就非常重要的，那么项目架构和技术栈往往密不可分。
    - 3.所以，jQuery也好，vue也好，只不过是我们目前时代的产物。只有把底层技术打扎实，任何框架又何惧。我们只是大自然的搬运工。
- 五、未来可能考虑的场景
## 快速上手

本节将介绍如何在项目中使用 Firefly。


### 引入 Element （Firefly 基础组件基于 Element UI）

你可以引入整个 Element，或是根据需要仅引入部分组件。我们先介绍如何引入完整的 Element。

#### 完整引入

在 main.js 中写入以下内容：

```javascript
import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';

Vue.use(ElementUI);

new Vue({
  el: '#app',
  render: h => h(App)
});
```

以上代码便完成了 Element 的引入。需要注意的是，样式文件需要单独引入。


接下来，如果你只希望引入部分组件，比如 Button 和 Select，那么需要在 main.js 中写入以下内容：

```javascript
import Vue from 'vue';
import { Button, Select } from 'element-ui';
import App from './App.vue';

Vue.component(Button.name, Button);
Vue.component(Select.name, Select);
/* 或写为
 * Vue.use(Button)
 * Vue.use(Select)
 */

new Vue({
  el: '#app',
  render: h => h(App)
});
```
### 全局配置

在引入 Element 时，可以传入一个全局配置对象。该对象目前仅支持 `size` 字段，用于改变组件的默认尺寸。按照引入 Element 的方式，具体操作如下：

完整引入 Element：

```js
import Vue from 'vue';
import Element from 'element-ui';
Vue.use(Element, { size: 'small' });
```

按需引入 Element：

```js
import Vue from 'vue';
import { Button } from 'element-ui';

Vue.prototype.$ELEMENT = { size: 'small' };
Vue.use(Button);
```

按照以上设置，项目中所有拥有 `size` 属性的组件的默认尺寸均为 'small'。

### 开始使用

至此，一个基于 Vue 和 Element 的开发环境已经搭建完毕，现在就可以编写代码了。各个组件的使用方法请参阅它们各自的文档。



