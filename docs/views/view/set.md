# \$set 的用法

\$set 支持 3 个参数 （ target,key,value ）
target 可以是数组/对象、
key 表示 索引/ 键名
value 表示想改变的值

::: tip
为什么要用$set 呢？ 这是因为要 Vue 修改数组或者添加的某一个值，或者长度时候，Vue是检测不到的
解决的办法？只能引出了$set
:::

数组形式

```Vue
<template>
  <div id="root">
      <p v-for="item in names" :key="item">{{item.name}}</p>
      <button class="button" @click="upd">
          提交
      </button>
  </div>
</template>

<script>

export default {
    data() {
        return {
            names:['红','名','量']
        }
    },
    methods: {
        upd(){
            this.$set(this.name,1,'土豆')
        }
    }
}
</script>
```

如果数组里面是对象的话，如何改变呢？

```vue
<template>
  <div id="root">
    <p v-for="item in list" :key="item">{{ item.name }}</p>
    <button class="button" @click="upd">
      提交
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          name: "红",
        },
        {
          name: "名",
        },
        {
          name: "量",
        },
      ],
    };
  },
  methods: {
    upd() {
      this.$set(this.list[1], "name", "土豆");
    },
  },
};
</script>
```
