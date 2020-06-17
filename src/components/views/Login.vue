<template>

    <!-- <div class="row  " >
        <div class="col-6">
             <img src="@/assets/img/bg1.jpg"  class="img-responsive" alt="">
        </div>
        <div class="col-6 text-center px-2">
            <h4>Login</h4>
                    <form @submit.prevent="submitForm(form)">
                        <div class="form-group">
                            <input type="text" class="form-control" placeholder="username" v-model="form.username" >
                        </div>
                        <div class="form-group">
                            <input type="password" class="form-control" placeholder="password" v-model="form.password">
                        </div>
                        <button class="btn btn-primary btn-block" type="submit">Login</button>
                    </form>
        </div>
    
    </div> -->
        <div class="row" >
        <div class="col-md-9 ">
            <img src="@/assets/img/bg1.jpg"  alt=""
            class="w-100 h-100">
        </div>
        <div class="col-md-3  mt-4">
            <div class="row   col-md-12 col-lg-12 mt-5">
                
                   <form @submit.prevent="submitForm(form)">
                        <h1 class="text-center mb-5" style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">Login</h1>
                       <div class="form-group">
                           <div class="form-label">Username</div>
                            <input type="text" class="form-control" placeholder="username" v-model="form.username" >
                       </div>
    
                       <div class="form-group">
                        <div class="form-label">Password</div>
                       <input type="password" class="form-control" placeholder="password" v-model="form.password">
                    </div>
                        <div class=" text-center">
                            <button class="btn btn-primary btn-block" type="submit" ><span class="px-3">Login</span></button>
                           
                           
                        </div>
                      </form>
               
            </div>
          
        </div>
    </div>
    

    
</template>

<script>
export default {
    name:'Login',
    data(){
        return {
            form:{
                username:'',
                password: ''
            }
            
        }
    },
    methods: {  
        submitForm: function(form){
            let loginForm = JSON.parse(JSON.stringify(form))
            if( loginForm.username === 'admin' && loginForm.password === 'password'){
                this.$router.push({path: '/dashboard'})
            }
        }
    }
}
</script>

<style >
 
        body{
   
 
}

</style>