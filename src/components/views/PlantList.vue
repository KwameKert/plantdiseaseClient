<template>
    <div class="mt-5">
       

      <div class="row">
        <div class="col-12">
 <b-table
      id="my-table"
      :items="items"
      :per-page="perPage"
      :current-page="currentPage"
      :fields="fields"
      small
    ></b-table>
        </div>
      </div>

      <div class="row">
        <div class="col-12">
<b-pagination class="float-right"
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="my-table"
    ></b-pagination>
        </div>
      </div>
   
     
    </div>
</template>

<script>
import axios from 'axios';
export default {
      data() {
      return {

        fields: ['name', 'disease', 'remedy'],
        perPage: 5,
        currentPage: 1,
        items: []
       
      }
    },
    methods: {
      loadList(){
        axios.get('http://localhost:5000/plants').then(response => {
                let res = response.data.data
                this.items = res;
                
            }, error=>{
                console.error(error)
            })
      }
    },
    created: function(){
        this.loadList();
    },
    computed: {
      rows() {
        return this.items.length
      }
    }
    
}
</script>

<style >
  body{
    overflow-y :auto;
  }
</style>