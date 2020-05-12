<template>
  <div class="row">
      <div class="col-md-8 col-sm-6 col-lg-5">
          <b-card class="text-center">
               <b-form-file
            v-model="file"
            :state="Boolean(file)"
            placeholder="Choose a file or drop it here..."
            drop-placeholder="Drop file here..."
            ></b-form-file>
            <div class="mt-3">Selected file: {{ file ? file.name : '' }}</div>
          </b-card>
       
      </div>

      <div class=" col-sm-6 col-lg-7">
        <b-card class="text-center"
        :title="title">
            <img src="https://picsum.photos/600/300/?image=25" alt="">
                <b-card-text>
                Some quick example text to build on the card title and make up the bulk of the card's content. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam nemo qui quis. Nulla doloremque fuga sit ipsam velit nam, blanditiis ratione ipsa, odio consectetur, magni impedit est rem voluptatem omnis.
                </b-card-text>
            </b-card>
      </div>
    
</div>
</template>

<script>
export default {
    name: 'Plant',
    data () {
        return {
            file: null,
            title: "hello"
        }
    }

}
</script>

<style>

</style>