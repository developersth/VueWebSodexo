<template>
  <div class="login">
      <div class="text-right mr-4">English | Thai</div>
    <img class="wave" src="/dist/img/wave.png">
	<div class="container">
		<div class="img">
			<img src="/dist/img/bg.svg">
		</div>
<div class="login-content">
   <form>
      <img src="dist/img/avatar.svg">
      <h2 class="title">Welcome</h2>
      <div class="input-div one" :class="{ focus: focused}" >
         <div class="i">
            <i class="fas fa-user"></i>
         </div>
         <div class="div">
            <h5>Username</h5>
           <input type="text" class="input" @focus="focused=true" v-model="username" @keydown="usernameKeydown" @blur="checkUsername">
         </div>
      </div>
      <div class="input-div pass" :class="{ focus: focusedPass}" >
         <div class="i"> 
            <i class="fas fa-lock"></i>
         </div>
         <div class="div">
            <h5>Password</h5>
            <input type="password" class="input"  @focus="focusedPass=true" @blur="focusedPass=false">
         </div>
      </div>
      <a href="#">Forgot Password?</a>
      <input type="submit" class="btn" value="Login">
   </form>
</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username:'',
      isActive:false,
      focused:false,
      focusedPass:false,
      activeClass: 'text-success',
      errorClass: 'text-danger'
    }
  },
    methods: {
txtFocus(name){
    console.log(name)
    this.isActive=true
},
usernameKeydown(){
    console.log(this.username.length)
 if (this.username.length>0){
     this.focused=true
 }
},
checkUsername(){
    if (this.username.length>0){
        this.focused=true
    }
    else{
        this.focused=false
    }
    return this.focused
}
    }
}
</script>

<style scoped>

@import url('/dist/css/style.css');
@import url('https://fonts.googleapis.com/css?family=Poppins:600&display=swap');

</style>