<template>
  <div class="login">
    <div class="loginbox">
      <div class="usernamebox">
        <span class="itmename">用户名</span>：
        <input type="text" placeholder="请输入用户名" v-model="uname">
      </div>
      <div class="userpwdbox">
        <span class="itmename">密码</span>：
        <input type="password" placeholder="请输入密码" v-model="upwd">
      </div>
    </div>
    <div class="commitbox">
      <button class="cancelBtn">取消</button>
      <button class="loginBtn" @click="logincheck">登录</button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  data() {
    return {
      uname:'',
      upwd:''
    }
  },
  methods: {
    login(){
      this.axios({method:"post",url:"/cmslogin",data:{uname:this.uname,upwd:this.upwd,}})
      .then(
        (res)=>{
        if(res.data.data.length==0){
          alert('用户名或密码错误！');
        }else{
          alert('用户登录成功！'); 
          this.$router.replace('/cms/cmsindex');
        }
      })
    },
    logincheck(){
      if(this.uname.length==0){
          alert('用户名不能为空！');
          return;
      }else if(this.upwd.length==0){
          alert('密码不能为空！');
          return;
      }else{
          this.login();
      }
    }
  },
}
</script>
<style scoped>
  .login{font-size: 16px;}
  .itmename{display: inline-block;width: 60px;text-align: justify;text-align-last: justify;}
  .login{width: 100%;margin-top: 200px;}
  .loginbox{width: 300px;height: 130px;margin: 0 auto;}
  .loginbox div{height:50px;line-height: 50px;}
  .loginbox div input{width: 218px;height:30px;line-height: 30px;font-size: 16px;}
  .commitbox{width: 300px;margin: 0 auto;text-align: center;padding: 0 20px;}
  .commitbox button{width: 80px;height: 35px;border-radius: 8px;border: none;background-color: #4e6ef2;color: #FFF;cursor: pointer;font-size: 15px;}
  .commitbox .cancelBtn{float: left;background-color: #999;}
  .commitbox .loginBtn{float: right;}
</style>
