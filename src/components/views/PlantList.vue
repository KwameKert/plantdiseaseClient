<template>
    <div class="mt-5">
       

    <b-table
      id="my-table"
      :items="items"
      :per-page="perPage"
      :current-page="currentPage"
      small
    ></b-table>
     <b-pagination class="float-right"
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="my-table"
    ></b-pagination>
    </div>
</template>

<script>
export default {
      data() {
      return {
        perPage: 3,
        currentPage: 1,
        items: [
          { id: 1, plant_disease: 'Fred', remedies: 'Flintstone' },
          { id: 2, plant_disease: 'Wilma', remedies: 'Flintstone' },
          { id: 3, plant_disease: 'Barney', remedies: 'Rubble' },
          { id: 4, plant_disease: 'Betty', remedies: 'Rubble' },
          { id: 5, plant_disease: 'Pebbles', remedies: 'Flintstone' },
          { id: 6, plant_disease: 'Bamm Bamm', remedies: 'Rubble' },
          { id: 7, plant_disease: 'The Great', remedies: 'Gazzoo' },
          { id: 8, plant_disease: 'Rockhead', remedies: 'Slate' },
          { id: 9, plant_disease: 'Pearl', remedies: 'Slaghoople' }
        ]
      }
    },
    computed: {
      rows() {
        return this.items.length
      }
    }
    
}
</script>