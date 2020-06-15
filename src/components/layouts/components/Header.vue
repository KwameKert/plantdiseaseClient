<template>
    <div>
       <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom">
        

    <b-button size="sm" variant="outline" @click="toggleMenu" >
      <b-icon icon="list" ></b-icon>
    </b-button>

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
            <li class="nav-item ">
              <a class="nav-link" href="#">Account <b-icon icon="person"></b-icon> </a>
            </li>
            <li class="nav-item ">
              <a class="nav-link" href="#">Logout <b-icon icon="box-arrow-in-right"></b-icon></a>
            </li>
            
          </ul>
        </div>
      </nav>


</div>
</template>

<script>
export default {
    name: 'Header',
    data (){
        return {

        }
    },
    methods: {
      toggleMenu(){
        this.$emit('toggleMenu')

      }
        
    }

}
</script>

<style>

    b-navbar{
        height: 40px;
    }

</style>