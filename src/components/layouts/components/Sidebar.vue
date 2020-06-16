<template>
<div>
 
<div class="bg-light border-right" id="sidebar-wrapper">
     <h4 class="text-center py-3">Plant Lab</h4>

      <div class="row " >
        <div class="col-md-6 "  style="margin-left: 70px">
            <img src="@/assets/img/blue.jpg" alt="plant admin" class="rounded-circle" width="100px" height="100px" >
            <b class="text-bold ml-1">Administrator</b>
        </div>
        
    </div>
    
      <div class="list-group list-group-flush">
        <router-link  class="list-group-item list-group-item-action bg-light" to="/dashboard">
         <b-icon icon="house-door" class="mr-2"></b-icon>  Dashboard
        </router-link>

        <router-link  class="list-group-item list-group-item-action bg-light" to="/plant">
          <b-icon icon="search" class="mr-2"></b-icon> Dignose Plant
        </router-link>

        <router-link  class="list-group-item list-group-item-action bg-light" to="/plant-list">
          <b-icon icon="list-task" class="mr-2"></b-icon> Plant Disease Plant
        </router-link>
     

      </div>
    </div>  
</div>

  
</template>

<script>
export default {
    name: 'Sidebar'

}
</script>

<style>

</style>