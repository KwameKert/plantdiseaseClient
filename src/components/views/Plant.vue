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
                <b-button variant="primary" class="mr-2" @click.prevent="search"><b-icon-search class="mr-2" ></b-icon-search>Detect Disease</b-button>
            <b-button variant="secondary"  @click="clearField" ><b-icon-trash class="mr-2"></b-icon-trash>Clear</b-button>
            </div>
      </div>
      
  </div>
  
  <div class="row" v-if="response.plant">

      <div class=" col-sm-12 col-lg-12">
          <div class="card">
              <div class="card-header">
                    <p><b>Plant : </b> {{response.plant}} </p>
              </div>
              <div class="card-body">
                  <div class="row">
                      <div class="col-4 text-center">
                            <b-img thumbnail fluid :src="imageData" :alt="response.disaseName"></b-img>
                            <p class="font-italic">{{response.status}}</p>
                      </div>
                      <div class="col-8">
                            <h4>Remedy</h4>
                            <p class="lead">{{response.remedy}}</p>
                      </div>
                  </div>
              </div>
          </div>
      
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
                this.response.plant = res.plant;
                this.response.status = res.status;
                this.response.remedy = res.remedy;
                
            }, error=>{
                console.error(error)
            })
        }
    }

}
</script>

<style>

</style>