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
                  <td>{{item.time}}</td>
                  <td><a href="javascript:;" style="color: #3385ff;" :data-id="item.id" :data-index="activeIndex" @click="showeidt($event)">修改</a></td>
                </tr>
              </tbody>
              <tfoot></tfoot>
            </table>
          </div>
        </li>
        <li class="rightlist" data-index="2">
          <div>
            <header>右侧推荐列表</header>
            <table>
              <thead>
                <tr>
                  <th width="5%">编号</th>
                  <th width="10%">图片标题</th>
                  <th width="10%">图片src</th>
                  <th width="10%">标题</th>
                  <th width="10%">时间</th>
                  <th width="45%">内容</th>
                  <th width="10%">操作</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item,i) of rightrecommend" :key="i">
                  <td height="50">{{item.id}}</td>
                  <td>{{item.imgtitle}}</td>
                  <td>{{item.imgsrc}}</td>
                  <td>{{item.title}}</td>
                  <td>{{item.time}}</td>
                  <td>{{item.con}}</td>
                  <td><a href="javascript:;" style="color: #3385ff;" :data-id="item.id" :data-index="activeIndex" @click="showeidt($event)">修改</a></td>
                </tr>
              </tbody>
              <tfoot></tfoot>
            </table>
          </div>
        </li>
        <li class="rightlist" data-index="3">
          <div>文章管理</div>
          <div>修改</div>
        </li>
        <li class="rightlist" data-index="4">
          <div>图片分享管理</div>
          <div>修改</div>
        </li>
        <li class="rightlist" data-index="5">
          <div>技术分享管理</div>
          <div>修改</div>
        </li>
        <div class="editlist">
          <ul>
            <li class="edititem activeedit" data-index="1">
              <div class="edittop">
                <header>顶部文章修改<span class="back" @click="backbnav()">返回</span></header>
                <div class="edittopbox">
                  <div><b>编号</b><span>：</span>{{edittop.id}}</div>
                  <div><b>内容</b><span>：</span><textarea style="width: 50%;min-height: 100px;resize:none;" v-model="edittop.con"></textarea></div>
                  <div><b>图片名称</b><span>：</span><input  type="text" v-model="edittop.bgimg"></div>
                  <div><b>标题</b><span>：</span><input  type="text" v-model="edittop.title"></div>
                  <div><b>分类</b><span>：</span><input  type="text" v-model="edittop.classify"></div>
                  <div><b>发表时间</b><span>：</span><input class="Wdate" type="text" v-model="edittop.time"></div> 
                  <div class="surebox"><button @click="topedit">确定</button></div>
                </div>
              </div>
            </li>
            <li class="edititem" data-index="2">
              <div class="edittop">
                <header>右侧文章修改<span class="back" @click="backbnav()">返回</span></header>
                <div class="edittopbox">
                  <div><b>编号</b><span>：</span>{{editright.id}}</div>
                  <div><b>图片标题</b><span>：</span><input type="text" v-model="editright.imgtitle"></div>
                  <div><b>图片src</b><span>：</span><input  type="text" v-model="editright.imgsrc"></div>
                  <div><b>标题</b><span>：</span><input  type="text" v-model="editright.title"></div>
                  <div><b>时间</b><span>：</span><input  type="text" v-model="editright.time"></div>
                  <div><b>内容</b><span>：</span><textarea style="width: 50%;min-height: 100px;resize:none;" v-model="editright.con"></textarea></div> 
                  <div class="surebox"><button @click="rightedit">确定</button></div>
                </div>
              </div>
            </li>
            <li class="edititem" data-index="3">文章修改</li>
            <li class="edititem" data-index="4">图片分享修改</li>
            <li class="edititem" data-index="5">技术分享修改</li>
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
      activeIndex:0,
      toprecommend:[],
      rightrecommend:[],
      edittop:{
        con:'',
        bgimg:'',
        title:'',
        classify:'',
        time:'',
        id:parseInt(''),
      },
      editright:{
        imgtitle:'',
        imgsrc:'',
        title:'',
        time:'',
        con:'',
        id:parseInt(''),
      }
    }
  },
  methods: {
    changerightlist(){
      $('.leftitem').click(function(){
        $(this).addClass('activeleft').siblings().removeClass('activeleft');
        this.activeIndex = $(this).attr('data-index');
        $('.rightlist[data-index='+this.activeIndex+']').addClass('activeright').show().siblings().removeClass('activeright').siblings('.editlist').hide();
      })
    },
    loadcon(){
      this.axios.get('/toprecommend').then(result=>{
        this.toprecommend = result.data.data;
      });
      this.axios.get('/rightrecommend').then(result=>{
        this.rightrecommend = result.data.data;
      });
    },
    showeidt(e){
      this.activeIndex = $('.activeleft').attr('data-index');
      $('.editlist').show().children().children('.edititem[data-index='+this.activeIndex+']').show().siblings().hide();
      $('.rightlist.activeright').hide();
      if(this.activeIndex == 1){
        this.edittop = this.toprecommend[e.target.getAttribute('data-id')-1]
      }else if(this.activeIndex == 2){
        this.editright = this.rightrecommend[e.target.getAttribute('data-id')-1]
      } 
    },
    backbnav(){
      $('.rightlist[data-index='+this.activeIndex+']').show().siblings('.editlist').hide();
    },
    topedit(){
      this.axios({method:"post",url:"/edittop",data:{con:this.edittop.con,bgimg:this.edittop.bgimg,title:this.edittop.title,classify:this.edittop.classify,time:this.edittop.time,id:this.edittop.id,}})
      .then(
        (res)=>{
        if(res.data.data.affectedRows!=0){
          alert('修改成功！')
          window.location.reload();
        }
      })
    },
    rightedit(){
      this.axios({method:"post",url:"/editright",data:{imgtitle:this.editright.imgtitle,imgsrc:this.editright.imgsrc,title:this.editright.title,time:this.editright.time,con:this.editright.con,id:this.editright.id,}})
      .then(
        (res)=>{
        if(res.data.data.affectedRows!=0){
          alert('修改成功！')
          window.location.reload();
        }
      })
    },
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
  .activeright,.activeedit{display: block;}
  .rightlist>div{padding: 20px;}
  .rightcon header{font-size: 18px;border-left: 6px solid #3385ff;padding-left: 10px;margin:20px 0 50px 20px;}

  .editlist{padding: 20px;display: none;}
  .edititem{display: none;}
  .edittopbox{padding-left: 20px;}
  .edittopbox b{display: inline-block;width: 80px;text-align: center;text-align-last:justify;vertical-align: top;}
  .edittopbox>div{min-height: 50px;line-height: 50px;}
  .edittopbox>div>span{vertical-align: top;}
  .edittopbox>div>input{width: 50%;min-height: 30px;}
  .back{float: right;cursor: pointer;color: cornflowerblue;}
  .surebox button{width: 100px;height: 40px;border: none;background-color: #3385ff;color: #FFF;border-radius: 7px;}
</style>
