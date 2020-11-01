<template>
   <div class="wrapper">
      <!-- Navbar -->
      <nav class="main-header navbar navbar-expand navbar-white navbar-light">
         <!-- Left navbar links -->
         <ul class="navbar-nav">
            <li class="nav-item">
               <a class="nav-link" data-widget="pushmenu" href="#" role="button"
                  ><i class="fas fa-bars"></i
                  ></a>
            </li>
         </ul>
         <!-- Right navbar links -->
         <ul class="navbar-nav ml-auto">
            <!-- Messages Dropdown Menu -->
            <li class="nav-item dropdown">
               <a class="nav-link" data-toggle="dropdown" href="#">
                  <i>
                     <div class="user-panel pb-3 mb-3 d-flex">
                        <img
                           src="/dist/img/user2-160x160.jpg"
                           class="img-circle elevation-2"
                           alt="User Image"
                           />
                     </div>
                  </i>
               </a>
               <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                  <a href="#" class="dropdown-item">
                     <!-- Message Start -->
                     <div class="media">
                        <img
                           src="/dist/img/user1-128x128.jpg"
                           alt="User Avatar"
                           class="img-size-50 mr-3 img-circle"
                           />
                        <div class="media-body">
                           <h3 class="dropdown-item-title">
                              Brad Diesel
                              <span class="float-right text-sm text-danger"
                                 ><i class="fas fa-star"></i
                                 ></span>
                           </h3>
                           <p class="text-sm">Call me whenever you can...</p>
                           <p class="text-sm text-muted">
                              <i class="far fa-clock mr-1"></i> 4 Hours Ago
                           </p>
                        </div>
                     </div>
                     <!-- Message End -->
                  </a>
                  <div class="dropdown-divider"></div>
                  <a href="#" class="dropdown-item">
                     <!-- Message Start -->
                     <div class="media">
                        <img
                           src="/dist/img/user8-128x128.jpg"
                           alt="User Avatar"
                           class="img-size-50 img-circle mr-3"
                           />
                        <div class="media-body">
                           <h3 class="dropdown-item-title">
                              John Pierce
                              <span class="float-right text-sm text-muted"
                                 ><i class="fas fa-star"></i
                                 ></span>
                           </h3>
                           <p class="text-sm">I got your message bro</p>
                           <p class="text-sm text-muted">
                              <i class="far fa-clock mr-1"></i> 4 Hours Ago
                           </p>
                        </div>
                     </div>
                     <!-- Message End -->
                  </a>
                  <div class="dropdown-divider"></div>
                  <a href="#" class="dropdown-item">
                     <!-- Message Start -->
                     <div class="media">
                        <img
                           src="https://scontent.fbkk22-2.fna.fbcdn.net/v/t1.0-9/121965360_3638632652849634_5797198974255148906_o.jpg?_nc_cat=105&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeEnvgPRp4iiZWTUzTIdblpem_u6qif4YR2b-7qqJ_hhHXmVoVpfuqKn_MUFMSkg8xKcvg0SNhA7wz3Gq3aHdJrS&_nc_ohc=2mNqBAfnDicAX9r7K5K&_nc_ht=scontent.fbkk22-2.fna&oh=ddf7c55f2192ded1747fe4b9d3983e32&oe=5FBA8B8F"
                           alt="User Avatar"
                           class="img-size-50 img-circle mr-3"
                           />
                        <div class="media-body">
                           <h3 class="dropdown-item-title">
                              Nora Silvester
                              <span class="float-right text-sm text-warning"
                                 ><i class="fas fa-star"></i
                                 ></span>
                           </h3>
                           <p class="text-sm">The subject goes here</p>
                           <p class="text-sm text-muted">
                              <i class="far fa-clock mr-1"></i> 4 Hours Ago
                           </p>
                        </div>
                     </div>
                     <!-- Message End -->
                  </a>
                  <div class="dropdown-divider"></div>
                  <a href="#" class="dropdown-item dropdown-footer"
                     >See All Messages</a
                     >
               </div>
            </li>
            <!-- Notifications Dropdown Menu -->
            <li class="nav-item dropdown">
               <a class="nav-link" data-toggle="dropdown" href="#">
               <i class="far fa-bell"></i>
               <span class="badge badge-warning navbar-badge">15</span>
               </a>
               <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                  <span class="dropdown-header">15 Notifications</span>
                  <div class="dropdown-divider"></div>
                  <a href="#" class="dropdown-item">
                  <i class="fas fa-envelope mr-2"></i> 4 new messages
                  <span class="float-right text-muted text-sm">3 mins</span>
                  </a>
                  <div class="dropdown-divider"></div>
                  <a href="#" class="dropdown-item">
                  <i class="fas fa-users mr-2"></i> 8 friend requests
                  <span class="float-right text-muted text-sm">12 hours</span>
                  </a>
                  <div class="dropdown-divider"></div>
                  <a href="#" class="dropdown-item">
                  <i class="fas fa-file mr-2"></i> 3 new reports
                  <span class="float-right text-muted text-sm">2 days</span>
                  </a>
                  <div class="dropdown-divider"></div>
                  <a href="#" class="dropdown-item dropdown-footer"
                     >See All Notifications</a
                     >
               </div>
            </li>
            <li class="nav-item">
               <a class="nav-link" data-widget="fullscreen" href="#" role="button">
               <i class="fas fa-expand-arrows-alt"></i>
               </a>
            </li>
            <li class="nav-item">
               <a class="nav-link"  href="#" role="button">
                  <select class="form-control"  v-model="lang" @change="handleChange($event)">
                     <option value="en"> Englist</option>
                     <option value="th"> Thai</option>
                  </select>
               </a>
            </li>
         </ul>
      </nav>
      <!-- /.navbar -->
      <!-- Main Sidebar Container -->
      <aside class="main-sidebar elevation-4 sidebar-light-pink">
         <!-- Brand Logo -->
         <a href="index3.html" class="brand-link">
         <img
            src="/dist/img/medical-kit.png"
            alt="AdminLTE Logo"
            class="brand-image img-circle elevation-3"
            style="opacity: 0.8"
            />
         <span class="brand-text font-weight-light">Reserve</span>
         </a>
         <!-- Sidebar -->
         <div class="sidebar">
            <!-- Sidebar user panel (optional) -->
            <div class="user-panel mt-3 pb-3 mb-3 d-flex">
               <div class="image">
                  <img
                     src="https://scontent.fbkk22-2.fna.fbcdn.net/v/t1.0-9/121965360_3638632652849634_5797198974255148906_o.jpg?_nc_cat=105&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeEnvgPRp4iiZWTUzTIdblpem_u6qif4YR2b-7qqJ_hhHXmVoVpfuqKn_MUFMSkg8xKcvg0SNhA7wz3Gq3aHdJrS&_nc_ohc=2mNqBAfnDicAX9r7K5K&_nc_ht=scontent.fbkk22-2.fna&oh=ddf7c55f2192ded1747fe4b9d3983e32&oe=5FBA8B8F"
                     class="img-circle elevation-2"
                     alt="User Image"
                     />
               </div>
               <div class="info">
                  <a href="#" class="d-block">Patipan Khunma</a>
               </div>
            </div>
            <!-- SidebarSearch Form -->
            <div class="form-inline">
               <div class="input-group" data-widget="sidebar-search">
                  <input
                     class="form-control form-control-sidebar"
                     type="search"
                     placeholder="Search"
                     aria-label="Search"
                     />
                  <div class="input-group-append">
                     <button class="btn btn-sidebar">
                     <i class="fas fa-search fa-fw"></i>
                     </button>
                  </div>
               </div>
            </div>
            <!-- Sidebar Menu -->
            <nav class="mt-2">
               <ul
                  class="nav nav-pills nav-sidebar flex-column"
                  data-widget="treeview"
                  role="menu"
                  data-accordion="false"
                  >
                  <!-- Add icons to the links using the .nav-icon class
                     with font-awesome or any other icon font library -->
                  <li class="nav-item menu-open">
                  <li class="nav-item">
                     <router-link :to="{name:'home',params:{lang:this.$i18n.locale}}"  class="nav-link">
                        <i class="nav-icon fas fa-th"></i>
                        <p>
                           Dashboard
                        </p>
                     </router-link>
                  </li>
                  <li class="nav-item">
                     <router-link :to="{name:'login',params:{lang:this.$i18n.locale}}" active-class="active" class="nav-link">
                        <i class="nav-icon fas fa-th"></i>
                        <p>
                           Login
                           <span class="right badge badge-danger">New</span>
                        </p>
                     </router-link>
                  </li>
                  <li class="nav-item">
                     <router-link :to="`/${$i18n.locale}/booking`" active-class="active"  class="nav-link">
                        <i class="nav-icon fas fa-book"></i>
                        <p>
                           Booking
                           <span class="right badge badge-danger">5</span>
                        </p>
                     </router-link>
                  </li>
                  <li class="nav-item">
                     <router-link :to="`/${$i18n.locale}/hospital`" active-class="active"   class="nav-link">
                        <i class="nav-icon far fa-hospital"></i>
                        <p>
                           Hospital
                        </p>
                     </router-link>
                  </li>
                  <li class="nav-item">
                     <router-link :to="`/${$i18n.locale}/users`" active-class="active"   class="nav-link">
                        <i class="nav-icon fas fa-users"></i>
                        <p>
                           Users
                        </p>
                     </router-link>
                  </li>
               </ul>
            </nav>
            <!-- /.sidebar-menu -->
         </div>
         <!-- /.sidebar -->
      </aside>
      <!-- Content Wrapper. Contains page content -->
      <div class="content-wrapper">
         <router-view />
         <!-- /.content -->
      </div>
      <!-- /.content-wrapper -->
      <!-- Control Sidebar -->
      <aside class="control-sidebar control-sidebar-dark">
         <!-- Control sidebar content goes here -->
         <div class="p-3">
            <h5>Title</h5>
            <p>Sidebar content</p>
         </div>
      </aside>
      <!-- /.control-sidebar -->
      <!-- Main Footer -->
      <footer class="main-footer">
         <!-- To the right -->
         <div class="float-right d-none d-sm-inline">Anything you want </div>
         <!-- Default to the left -->
         <strong
            >Copyright &copy; 2020
         <a href="http://www.techsoul.co.th/" target="blank">techsoul.co.th</a>.</strong
            >
         All rights reserved.
      </footer>
      <!-- Control Sidebar -->
      <aside class="control-sidebar control-sidebar-dark">
         <!-- Control sidebar content goes here -->
      </aside>
      <!-- /.control-sidebar -->
   </div>
</template>
<script>
   export default {
     name: 'app',
     data() {
       return {
         menuOpen: false,
         lang:localStorage.getItem('lang')||'en'
       }
     },
     methods: {
       toggleMenu() {
         this.menuOpen = !this.menuOpen
       },
       handleChange: function(event){
         localStorage.setItem('lang', event.target.value)
         this.setLocale(event.target.value)
       },
       setLocale(locale) {
          if (this.$i18n.locale !== locale) {
             this.$i18n.locale = locale
             this.$router.push({params: { lang: locale }})
       }
       }
     }
   }
</script>
<style>
   html, body {
   font-family: 'Prompt', sans-serif;
   }
   #app {
   font-family: 'Prompt',Avenir, Helvetica, Arial, sans-serif;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
   text-align: center;
   color: #2c3e50;
   }
   #nav {
   padding: 30px;
   }
   #nav a {
   font-weight: bold;
   color: #2c3e50;
   }
   #nav a.router-link-exact-active {
   color: #42b983;
   }
</style>