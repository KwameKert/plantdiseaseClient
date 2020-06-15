<template>
<div>
 
<div class="bg-light border-right" id="sidebar-wrapper">
     <h4 class="text-center py-3">Plant Lab</h4>
      <div class="list-group list-group-flush">
        <router-link  class="list-group-item list-group-item-action bg-light" to="/dashboard">
         <b-icon icon="house-door"></b-icon>  Dashboard
        </router-link>
     
        <a href="#" class="list-group-item list-group-item-action bg-light">
          <b-icon icon="search"></b-icon>
          Dignose Plant</a>
        <a href="#" class="list-group-item list-group-item-action bg-light">
          <b-icon icon="list-task"></b-icon>
          Plant Diseases</a>
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