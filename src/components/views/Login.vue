<template>
<div >
    <div class="row mt-4">
        <div class="col-md-4 offset-md-4">
              <div class="card">
                <div class="card-body text-center">
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
        </div>
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