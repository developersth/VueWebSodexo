<template>
   <div class="login">
      <img class="wave" src="/dist/img/wave.png">
    <div class="container">
         <div class="img">
            <img src="/dist/img/bg.svg">
         </div>
         <div class="login-content">
            <form @submit.prevent="validate_login()">
               <img src="/dist/img/avatar.svg">
               <h2 class="title">{{ $t('login.title') }}</h2>
               <div class="input-div one" :class="{ focus: focusedUser}" >
                  <div class="i">
                     <i class="fas fa-user"></i>
                  </div>
                  <div class="div">
                     <h5>{{ $t('login.username') }}</h5>
                     <input type="text" class="input" @focus="focusedUser=true" v-model="username"  @blur="checkUsername">
                  </div>
               </div>
               <div class="input-div pass" :class="{ focus: focusedPass}" >
                  <div class="i"> 
                     <i class="fas fa-lock"></i>
                  </div>
                  <div class="div">
                     <h5>{{ $t('login.password') }}</h5>
                     <input type="password" class="input"   v-model="password" @focus="focusedPass=true"  @blur="checkPassword">
                  </div>
               </div>
               <a href="#">{{ $t('login.forgotpassword') }}</a>
               <input type="submit" class="btn" :value="$t('login.login_btn')">
            </form>
         </div>
      </div>
   </div>
</template>
<script>
   import api_service from '@/service/api_service';
   const service = new api_service();
   export default {
     data() {
       return {
         username:'',
         password:'',
         isActive:false,
         focusedUser:false,
         focusedPass:false,
         activeClass: 'text-success',
         errorClass: 'text-danger'
       }
     },
     methods: {
    setLocale(locale) {
       if (this.$i18n.locale !== locale) {
          this.$i18n.locale = locale
          this.$router.push({params: { lang: locale }})
       }
   },
   txtFocus(){
       //console.log(name)
       this.isActive=true
   },
    async validate_login() {
         const body ={
           username:this.username,
           password:this.password
         }
           await service.users_login(body)
            .then((res) =>   {
               if (res.success) {
                this.$session.start()
				this.$session.set('jwt', res.token)	
				this.$session.set('user_id', res.user_id)
                this.$session.set('username', res.username)
                this.$session.set('name', res.name)
                this.$session.set('email', res.email)
				this.$session.set('mobile', res.mobile)
				this.$session.set('role_name', res.role_name)
				this.$session.set('role_type', res.role_type)
				this.$swal({position: "top-end",icon: "success",title: "Login",text: res.message,showConfirmButton: false,timer: 3000});
				this.$router.push('/')
               }else{
                 this.$swal({position: "top-end",icon: "warning",title: "Information",text: res.message,showConfirmButton: false,timer: 3000});  
               }
               
           })
           .catch(e => {
               console.log(e);
               this.$swal({position: "top-end",icon: "warning",title: "warning",text: e,showConfirmButton: false,timer: 3000});
           });
	},
   checkUsername(){
       if (this.username.length>0)
           this.focusedUser=true
       else
           this.focusedUser=false
       return this.focusedUser
   },
   checkPassword(){
       if (this.password.length>0)
           this.focusedPass=true
       else
           this.focusedPass=false
       return this.focusedPass
   },
   }
   }
</script>
<style scoped>
*{
	padding: 0;
	margin: 0;
	box-sizing: border-box;
}

body{
    font-family: 'Prompt', sans-serif;
    overflow: hidden;
}
.wave{
	position: fixed;
	bottom: 0;
	left: 0;
	height: 100%;
	z-index: -1;
}

.container{
    width: 100vw;
    height: 60vh;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap :7rem;
    padding: 0 2rem;
}

.img{
	display: flex;
	justify-content: flex-end;
	align-items: center;
}

.login-content{
	display: flex;
	justify-content: flex-start;
	align-items: center;
	text-align: center;
}

.img img{
	width: 500px;
}

form{
	width: 360px;
}

.login-content img{
    height: 100px;
}

.login-content h2{
	margin: 15px 0;
	color: #333;
	text-transform: uppercase;
	font-size: 2.9rem;
}

.login-content .input-div{
	position: relative;
    display: grid;
    grid-template-columns: 7% 93%;
    margin: 25px 0;
    padding: 5px 0;
    border-bottom: 2px solid #d9d9d9;
}

.login-content .input-div.one{
	margin-top: 0;
}

.i{
	color: #d9d9d9;
	display: flex;
	justify-content: center;
	align-items: center;
}

.i i{
	transition: .3s;
}

.input-div > div{
    position: relative;
	height: 45px;
}

.input-div > div > h5{
	position: absolute;
	left: 10px;
	top: 50%;
	transform: translateY(-50%);
	color: #999;
	font-size: 18px;
	transition: .3s;
}

.input-div:before, .input-div:after{
	content: '';
	position: absolute;
	bottom: -2px;
	width: 0%;
	height: 2px;
	background-color: #38d39f;
	transition: .4s;
}

.input-div:before{
	right: 50%;
}

.input-div:after{
	left: 50%;
}

.input-div.focus:before, .input-div.focus:after{
	width: 50%;
}

.input-div.focus > div > h5{
	top: -5px;
	font-size: 15px;
}

.input-div.focus > .i > i{
	color: #38d39f;
}

.input-div > div > input{
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	border: none;
	outline: none;
	background: none;
	padding: 0.5rem 0.7rem;
	font-size: 1.2rem;
	color: #555;
	font-family: 'poppins', sans-serif;
}

.input-div.pass{
	margin-bottom: 4px;
}

a{
	display: block;
	text-align: right;
	text-decoration: none;
	color: #999;
	font-size: 0.9rem;
	transition: .3s;
}

a:hover{
	color: #38d39f;
}

.btn{
	display: block;
	width: 100%;
	height: 50px;
	border-radius: 25px;
	outline: none;
	border: none;
	background-image: linear-gradient(to right, #32be8f, #38d39f, #32be8f);
	background-size: 200%;
	font-size: 1.2rem;
	color: #fff;
	font-family: 'Poppins', sans-serif;
	text-transform: uppercase;
	margin: 1rem 0;
	cursor: pointer;
	transition: .5s;
}
.btn:hover{
	background-position: right;
}


@media screen and (max-width: 1050px){
	.container{
		grid-gap: 5rem;
	}
}

@media screen and (max-width: 1000px){
	form{
		width: 290px;
	}

	.login-content h2{
        font-size: 2.4rem;
        margin: 8px 0;
	}

	.img img{
		width: 400px;
	}
}

@media screen and (max-width: 1200px){
	.container{
		grid-template-columns: 1fr;
	}

	.img{
		display: none;
	}

	.wave{
		display: none;
	}

	.login-content{
		justify-content: center;
	}
}
</style>