<template>
    <div>
  <b-navbar type="dark" variant="dark">
      <div class="container">
    <b-navbar-brand tag="h1" class="mb-0">Plant Lab</b-navbar-brand>
    <b-navbar-nav>
    


      <b-nav-item-dropdown text="User" right>
        <b-dropdown-item href="#">Account</b-dropdown-item>
        <b-dropdown-item href="#">Settings</b-dropdown-item>
      </b-nav-item-dropdown>
    </b-navbar-nav>
      </div>
    
  </b-navbar>
</div>
</template>

<script>
export default {
    name: 'Header',
    data (){
        return {

        }
    }

}
</script>

<style>

    b-navbar{
        height: 40px;
    }

</style>