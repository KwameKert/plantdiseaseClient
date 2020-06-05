<template>
    <div>
        <Header/>
        <div class="container ">
            <router-view></router-view>
        </div>
    </div>
  
</template>

<script>
import Header from './Header';
export default {
    name:'Default',
    components:{
        Header
    }

}
</script>

<style>

</style>