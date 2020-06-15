<template>
    <div>
        <Header/>
        <div class="d-flex " id="wrapper" v-bind:class="{ toggled: showMobileMenu }">
            <Sidebar />
            <div id="page-content-wrapper">
                <div class="container">
                    <router-view></router-view>
                </div>
            </div>
        </div>
    </div>
  
</template>

<script>
import Header from './Header';
import Sidebar from './Sidebar';

export default {
    name:'Default',
    components:{
        Header,
        Sidebar
    }

}
</script>

<style>

</style>