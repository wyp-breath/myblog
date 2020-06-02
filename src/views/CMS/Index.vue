<template>
  <div class="index">
    <div class="header">
      博客管理系统
    </div>
    <div class="main">
      <div class="leftnav">
        <ul>
          <li class="leftitem activeleft" data-index="1"><a href="javascript:;">顶部推荐列表</a></li>
          <li class="leftitem"  data-index="2"><a href="javascript:;">右侧推荐列表</a></li>
          <li class="leftitem" data-index="3"><a href="javascript:;">文章管理</a></li>
          <li class="leftitem" data-index="4"><a href="javascript:;">图片分享管理</a></li>
          <li class="leftitem" data-index="5"><a href="javascript:;">技术分享管理</a></li>
        </ul>
      </div>
      <div class="rightcon">
        <li class="rightlist activeright" data-index="1">
          <div>
            <header>顶部推荐列表</header>
            <table>
              <thead>
                <tr>
                  <th width="5%">编号</th>
                  <th width="45%">内容简介</th>
                  <th width="10%">上传图片</th>
                  <th width="10%">标题</th>
                  <th width="10%">分类</th>
                  <th width="10%">发表时间</th>
                  <th width="10%">操作</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item,i) of toprecommend" :key="i">
                  <td>{{item.id}}</td>
                  <td>{{item.con}}</td>
                  <td>{{item.bgimg}}</td>
                  <td>{{item.title}}</td>
                  <td>{{item.classify}}</td>
                  <td>{{item.year}}-{{item.month}}-{{item.date}}</td>
                  <td><a href="javascript:;" style="color: #3385ff;" @click="showeidt()">修改</a></td>
                </tr>
              </tbody>
              <tfoot></tfoot>
            </table>
          </div>
        </li>
        <li class="rightlist" data-index="2">
          <div>右侧推荐列表管理</div>
        </li>
        <li class="rightlist" data-index="3">
          <div>文章管理</div>
        </li>
        <li class="rightlist" data-index="4">
          <div>图片分享管理</div>
        </li>
        <li class="rightlist" data-index="5">
          <div>技术分享管理</div>
        </li>
        <div class="editlist">
          <ul>
            <li class="edititem">
              <div class="edittop">
                <header>顶部文章修改</header>
                <div class="edittopbox">
                  <div>编号：<input type="text" value="1" readonly></div>
                  <div>内容：<input type="text" value="1"></div>
                  <div>图片名称：<input type="text" value="1"></div>
                  <div>标题：<input type="text" value="1"></div>
                  <div>分类：<input type="text" value="1"></div>
                  <div>发表时间：<input type="text" value="1"></div> 
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import $ from 'jquery';
export default {
  name: 'Index',
  data() {
    return {
      activeIndex:1,
      toprecommend:[]
    }
  },
  methods: {
    changerightlist(){
      $('.leftitem').click(function(){
        $(this).addClass('activeleft').siblings().removeClass('activeleft');
        this.activeIndex = $(this).attr('data-index');
        $('.rightlist[data-index='+this.activeIndex+']').addClass('activeright').siblings().removeClass('activeright');
      })
    },
    loadcon(){
      this.axios.get('/toprecommend').then(result=>{
        this.toprecommend = result.data.data;
      })
    },
    showeidt(){
      $('.rightlist').hide().siblings('.editlist').show();
    }
  },
  created() {
    
  },
  mounted() {
    this.changerightlist();
    this.loadcon();
  },
}
</script>
<style scoped>
  .index{height: 100%;}
  .header{width: 100%;height: 8%;line-height: .55rem;background-color: #000;color: #FFF;font-size: 25px;padding-left: 20px;}
  .leftnav{width: 15%;min-height: 92%;background-color: rgba(153, 153, 153,0.5);position: absolute;}
  .rightcon{width: 85%;height: 92%;position: absolute;left: 15%;}
  .leftitem{width: 100%;height: 50px;text-align: center;line-height: 50px;}
  .leftitem a{display: inline-block;width: 100%;height: 50px;text-align: center;line-height: 50px;font-size: 18px;border-bottom: 1px solid #FFF;}
  .leftitem a:hover{background-color: brown;color: #FFF;}
  .activeleft{background-color: brown;}
  .activeleft a{color: #FFF;}

  .rightlist{width: 100%;display: none;}
  .rightlist table{border-collapse: collapse;}
  .rightlist th,.rightlist td{text-align: center;border: 1px solid #999;}
  .activeright{display: block;}
  .rightlist>div{padding: 20px;}
  .rightcon header{font-size: 18px;border-left: 6px solid #3385ff;padding-left: 10px;margin:20px 0 50px 20px;}

  .editlist{padding: 20px;display: none;}
  .edittopbox{padding-left: 20px;}
</style>
