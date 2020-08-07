# Vue 基础

## Mixin 混入

用途
一般是 2 个方面，
比如说 项目 开发完毕之后呢 ，所有的构造函数，基本上编写完毕，，但是这时候可能又会有新的需求加入，我们不想污染这些 构造函数，这时候 就可以用到 【 Mixins 】
第二种 就是 经常用到公共的方法 ，那么这些公共的方法 不想写入构造函数 ，同样也可以使用【 Mixin 】

Mixin 有全局混入和局部混入 2 种
::: tip
局部 混入
:::

创建一个 公共的 文件夹 utils/mixins,在 mixins 里新建 base.js

```javascript
export default {
  data(){
      return {
     .....
      }
  },
  method(){
      .....
  }
};
```

引入 base.js

```javascript
import baseMixins from "../../utils/mixins/base.js";
```

```javascript
export default {
  mixins: [baseMixins],
};
```

::: tip
全局 混入
:::
可以在 main.js 中直接注册

```javascript
Vue.mixin({
  created() {
    console.log("全局混入的钩子函数");
  },
});
```

::: warning
请谨慎使用全局混入，因为它会影响每个单独创建的 Vue 实例 (包括第三方组件)
:::

## 自定义选项合并策略

如果组件内部的方法和 Mixin 函数名 方法名 重复，优先级

```details
全局混入 ---》》》 局部混入---》组件内部的函数名
```
