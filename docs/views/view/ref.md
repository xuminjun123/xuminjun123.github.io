# ref

ref 是一个 标签上的属性 ，Vue 添加的
this.\$refs ( 包含了，所有的 ref 属性 的元素)

```javascript
<div  id="app">
    <div class="box" ref="box1"></div>
</div>

<script>
    created(){
        console.log(this.$refs.box1)  // 但是
                                     //  在 created中 得不到 this.$refs
                                    //   mounted可以获取
    }

</script>

```

想要在 created 获取 this.$refs解决的办法就需要   【  $nextTick 】
【 \$nextTick 】 表示 在页面 Dom 渲染完成之后 才会执行的

```vue
<script>
created(){

    this.$nextTick(()=>{   // 这是一个 异步操作，页面Dom全部渲染之后执行
    console.log(this.$refs.box1) //可以获得 box1 的DOM对象 ，

    })
}
</script>
```

如果 ref 加在 原生 子组件 的组件上呢? 后台打印会有 child:Vuecomponent

```vue
<child ref="child">
    
</child>
```
