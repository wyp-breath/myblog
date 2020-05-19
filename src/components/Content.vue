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
          <a href="javascript:;" class="cat">美食分享 / Food</a>
          <div class="actor"><a target="_blank" href="javascript:;">MR.jack</a> 写在2015年03月30日</div>
        </li>
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
          <a href="javascript:;" class="cat">美食分享 / Food</a>
          <div class="actor"><a target="_blank" href="javascript:;">MR.jack</a> 写在2015年03月30日</div>
        </li>
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
          <a href="javascript:;" class="cat">美食分享 / Food</a>
          <div class="actor"><a target="_blank" href="javascript:;">MR.jack</a> 写在2015年03月30日</div>
        </li>
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
          <a href="javascript:;" class="cat">美食分享 / Food</a>
          <div class="actor"><a target="_blank" href="javascript:;">MR.jack</a> 写在2015年03月30日</div>
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
      mouseover(){
        $('.recommend_img').mouseover(function(){
          
          $(this).children('.recommend_list').css('opacity','1');
        })
        $('.recommend_img').mouseleave(function(){
         
          $(this).children('.recommend_list').css('opacity','0');
        })
      }
    },
    created() {
        
    },
    mounted() {
      this.mouseover();
    },
}
</script>

<style scoped>
  .content{width: 11.2rem;margin: 30px auto 0;}
  .recommend{width: 100%;background: #fff;box-shadow: 0 0 3px #999999;height: auto;overflow: hidden;}
  .recommend ul li{float: left; margin: 1%; display: block; text-align: center;}
  .recommend_img img, .recommend_img, .recommend_img .btn,.recommend_list{transition: all .5s;-moz-transition: all 0.5s;-webkit-transition: all 0.5s;-o-transition: all 0.5s;}
  .recommend_list{opacity:0;width: 80%;height: 100%;padding: 0 10%;background: rgba(0,0,0,.3);position: absolute;top: 0;left: 0;font-size: 12px;color: #fff;text-align: left;z-index: 2;}
  .recommend_list p:first-letter{float: left;font-size:30px; font-weight:bold;padding-right:5px;}
  .recommend_list .btn:hover{ color:#ff7200;border:solid 1px #ff7200; background:rgba(0,0,0,.3);}
  .recommend ul li .recommend_img:hover img{-webkit-filter: blur(5px);-moz-filter: blur(5px); -o-filter: blur(5px);  -ms-filter: blur(5px); filter: blur(5px);}
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
  .recommend_img img{position: relative;z-index: 1;}
  .recommend_list p {margin-top: 30%;}
  .recommend_list .btn {font-size: 12px;color: #f5b302;border: solid 1px #f5b302;background: rgba(0,0,0,.3);display: block;float: left;padding: 5px 15px;border-radius: 5px;   margin-top: 20px;text-transform: uppercase;}
  .recommend ul li .recommend_title a {font-size: 16px; color: #666; height: 24px;overflow: hidden; margin-top: 5px;}
  .recommend ul li .recommend_title a, .recommend ul li .cat, .recommend ul li .actor {display: block;width: 100%;margin-bottom: 5px;}
  .recommend ul li .cat {font-size: 12px; color: #0066a6; transition: all 0.8s;  -moz-transition: all 0.8s;-webkit-transition: all 0.8s;-o-transition: all 0.8s;}
  .recommend ul li .actor, .recommend ul li .actor a {font-size: 12px;color: #666;}
  .recommend ul li .recommend_title a {font-size: 16px;color: #666;height: 24px;overflow: hidden;margin-top: 5px;}
</style>
