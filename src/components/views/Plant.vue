<template>
<div>
  <div class="row mt-5">
      <div class="col-md-12 col-sm-12 col-lg-12">
               <b-form-file
            v-model="file"
            :state="Boolean(file)"
            @change="upload($event)"
            placeholder="Choose a file or drop it here..."
            drop-placeholder="Drop file here..."
            ></b-form-file>
            <div class="text-center my-3">
                <b-button variant="primary" class="mr-2" @click.prevent="search"><b-icon-search></b-icon-search>Detect Disease</b-button>
            <b-button variant="secondary"  @click="clearField" ><b-icon-trash></b-icon-trash>Clear</b-button>
            </div>
      </div>
      
  </div>
  
  <div class="row" v-if="response.plant">

      <div class=" col-sm-12 col-lg-12">
        <b-card >
            <div class="row justify-content-center">
                <div class="col-md-4 col-sm-6 col-lg-4">
                         <b-img thumbnail fluid :src="imageData" :alt="response.disaseName"></b-img>
                    <img  alt="">
                </div>

                <div class="col-md-6 col-sm-6 col-lg-">
                    <p><b>Plant:  {{response.plant}} </b></p>
                    <p><b>Status:  {{response.status}} </b></p>
                    <p><b>Remedies: </b></p>
                </div>
            </div>
          
              
        </b-card>
      </div>
    </div>
</div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'Plant',
    data () {
        return {
            file: null,
            imageData: null,
            plantData: null,
            response: {
                plant: '',
                status: '',
                remedy: ''
            }
        }
    }, 
    methods: {
        clearField(){
            this.file = null
        },
        previewImage: function(event) {
            var input = event.target;
            if (input.files && input.files[0]) {
                var reader = new FileReader();
                reader.onload = (e) => {
                    this.imageData = e.target.result;
                }
                reader.readAsDataURL(input.files[0]);
            }
        },
        upload(event){
            //call preview 
            this.previewImage(event)
            this.plantData = new FormData();
            this.file = event.target.files[0];
             this.plantData.append('name', 'my-file')
             this.plantData.append('file', this.file)

        },
        search(){
            axios.post('http://localhost:5000/', this.plantData ).then(response => {
                let res = response.data
                this.response.plant = res.plant
                this.response.status = res.status;
                
            }, error=>{
                console.error(error)
            })
        }
    }

}
</script>

<style>

</style>