<template>
    <div class="d-flex " id="wrapper" 
 v-bind:class="{ toggled: showMobileMenu }"
 >
 <Sidebar />
        <div  id="page-content-wrapper" >
             <Header v-on:toggleMenu="handleToggle"/>
            <div id="page-content-wrapper">
                <div class="container-fluid">
                  
                    <router-view></router-view>
                </div>
            </div>
        </div>
    </div>
  
</template>

<script>
import Header from './components/Header';
import Sidebar from './components/Sidebar';

export default {
    name:'Default',
    components:{
        Header,
        Sidebar
    },
    data(){
        return{
            showMobileMenu : false
        }
    },
    methods:  {
        handleToggle(){
         this.showMobileMenu = !this.showMobileMenu
        }
    }

}
</script>

<style >
#sidebar-wrapper {
  min-height: 100vh;
  margin-left: -15rem;
  -webkit-transition: margin .25s ease-out;
  -moz-transition: margin .25s ease-out;
  -o-transition: margin .25s ease-out;
  transition: margin .25s ease-out;
}

#sidebar-wrapper .sidebar-heading {
  padding: 0.875rem 1.25rem;
  font-size: 1.2rem;
}

#sidebar-wrapper .list-group {
  width: 15rem;
}

#page-content-wrapper {
  min-width: 100vw;
}

#wrapper.toggled #sidebar-wrapper {
  margin-left: 0;
}

@media (min-width: 768px) {
  #sidebar-wrapper {
    margin-left: 0;
  }

  #page-content-wrapper {
    min-width: 0;
    width: 100%;
  }

  #wrapper.toggled #sidebar-wrapper {
    margin-left: -15rem;
  }
}
</style>