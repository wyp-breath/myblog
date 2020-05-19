<template>
  <div class="content">
    <div class="recommend">
      <ul>
        <li>
          <a href="javascript:;" class="recommend_img">
            <div class="recommend_list">
              <p>得去年我来Caltech第一个月里与导师第三次面谈时的情形。本来按第二次面谈结束时的约定，这次要谈的是研究计划，我也做了充分准备。哪知才聊一会儿，导师突然话锋...</p>
              <div class="btn">read more</div>
            </div>
            <img src="../assets/img/c1.jpg">
          </a>
          <strong class="recommend_title" title="问答社区演示文章">
            <a href="javascript:;">水果系早餐制作</a>
          </strong>  
          <a href="javascript:;">美食分享 / Food</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import $ from 'jquery';
export default {
    components: {
      
    },
    data(){
        return {
            
        }
    },
    name: 'Content',
    methods:{ 
      
    },
    created() {
        
    },
    mounted() {
      
    },
}
</script>

<style scoped>
  .content{width: 11.2rem;margin: 30px auto 0;}
  .recommend{width: 100%;background: #fff;box-shadow: 0 0 3px #999999;height: auto;overflow: hidden;}
  .recommend ul li{float: left; margin: 1%; display: block; text-align: center;}
  .recommend_img img, .recommend_img, .recommend_img .btn{transition: all .5s;-moz-transition: all 0.5s;-webkit-transition: all 0.5s;-o-transition: all 0.5s;}
  .recommend_list{display: block;width: 80%;height: 100%;padding: 0 10%;background: url(https://www.themepark.com.cn/demo/wp-content/themes/foldingtime/images/black_b2.png);position: absolute;top: 0;left: 0;font-size: 12px;color: #fff;text-align: left;z-index: 2;display: none;}
  @media screen and (max-width: 2000px) and (min-width: 1024px){
    .recommend ul li {
        width: 23%;
    }
  }
  @media screen and (max-width: 1023px) and (min-width: 100px){
    .recommend ul li {
      width: 245px;
    }
  }
  .recommend_img{font-size: 0;overflow: hidden; display: block; position: relative;}
</style>
