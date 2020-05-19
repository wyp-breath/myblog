<template>
  <div class="header">
    <div class="header_top"></div>
    <div class="header_nav">
      <div class="logobox">
        <img src="../../assets/img/recored.png">
        <img class="logo" src="../../assets/img/logo.png">
        <img src="../../assets/img/share.png">
      </div>
      <div class="navmenu">
        <span class="nav_span">导航菜单</span>
        <ul>
          <li style="border-bottom: 3px solid #FF4800;"><a href="javascript:;">首页</a></li>
          <li><a href="javascript:;">技术笔记</a></li>
          <li><a href="javascript:;">生活美文</a></li>
          <li><a href="javascript:;">关于我</a></li>
          <li><a href="javascript:;">其他</a></li>
        </ul>
      </div>
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
    name: 'Header',
    methods:{ 
      menuchange(){
        $('.nav_span').click(function(){
          $(this).toggleClass('closed_nav_b').next().toggle();
          $('.navmenu ul').css('opacity',$('.navmenu ul').css('opacity') == 0 ? 1 : 0);
        })
      }
    },
    created() {
        
    },
    mounted() {
      this.menuchange();
    },
}
</script>

<style scoped>
  .header_top{width: 100%;height: 20px;background: url(../../assets/img/top_images.jpg) no-repeat;}
  .logobox{width: 11.2rem;margin: 0 auto;text-align: center;}
  .logobox img{vertical-align: middle;width: 200px;}
  .header_nav .logo{width: 100px;}
  .navmenu{font-size: 16px;border-top: 1px solid #ECECEC;border-bottom: 1px solid #ECECEC;text-align: center;}
  .navmenu ul{width: 92%;max-width: 1200px;margin: 0 auto;text-align: center;transition: linear 0.5s;background-color: #FFF;opacity: 1;}
  .navmenu ul li{display: inline-block;margin: 0 15px;padding: 10px 5px;transition:all .5s;border-bottom: 3px solid #FFF;}
  .navmenu ul li:hover{border-bottom: 3px solid #ff4800;}
  .navmenu ul li a{color: #666;}
  .nav_span{display: none;transition: linear .3s;}
  @media screen and (min-width:200px) and (max-width:1023px){
    .navmenu span{  font-size:14px; display:inline-block;   line-height:60px; margin:0 5px 0 45px; padding:0 0 0 40px;color:#666;background:-165px 19px no-repeat url('../../assets/img/icon.png');}
    .navmenu span.closed_nav_b{background:-165px -41px no-repeat url('../../assets/img/icon.png');}
    .navmenu ul{ border-top:1px solid #ececec; position: absolute; overflow:hidden; z-index:10; background:#fff; display: none;opacity: 0;}
    .navmenu ul li{ width:50%;}
	}
  @media screen and (min-width:200px) and (max-width:692px){
    .logobox{max-width: 200px;}
	}
</style>
