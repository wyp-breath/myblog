<template>
  <div class="index">
    <div class="header">
      博客管理系统
    </div>
    <div class="main">
      <div class="leftnav">
        <ul>
          <li class="leftitem"><a href="javascript:;">顶部推荐列表</a></li>
          <li class="leftitem"><a href="javascript:;">右侧推荐列表</a></li>
          <li class="leftitem"><a href="javascript:;">文章管理</a></li>
          <li class="leftitem"><a href="javascript:;">文章管理</a></li>
          <li class="leftitem"><a href="javascript:;">文章管理</a></li>
        </ul>
      </div>
      <div class="rightcon">
        <li>
          
        </li>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Index',
  data() {
    return {
      
    }
  },
  methods: {
    
  },
}
</script>
<style scoped>
  .index{height: 100%;}
  .header{width: 100%;height: 8%;line-height: .55rem;background-color: #000;color: #FFF;font-size: 25px;padding-left: 20px;}
  .leftnav{width: 15%;height: 92%;background-color: rgba(153, 153, 153,0.5);position: absolute;}
  .rightcon{width: 85%;height: 92%;position: absolute;left: 15%;}
  .leftitem{width: 100%;height: 50px;text-align: center;line-height: 50px;}
  .leftitem a{display: inline-block;width: 100%;height: 50px;text-align: center;line-height: 50px;font-size: 18px;border-bottom: 1px solid #FFF;}
  .leftitem a:hover{background-color: brown;}
</style>
