<template>
<div>
  <h2>Cats</h2>
  <p v-if="!cats">Loading cats...</p>
  <ul v-else class="list">
    <Cat
      v-for="(cat, index) in cats"
      :key="index"
      :cat="cat"
    />
  </ul>
  <AddCat :on-add="handleAdd"/>
</div>
</template>

<script>
import Cat from './Cat';
import AddCat from './AddCat.vue';
import api from '../../services/api';

export default {
  data() {
    return { 
      cats: null
    };
  },
  created() {
    api.getCats()
      .then(cats => {
        this.cats = cats;
        console.log('cats', this.cats);
      });
  },
  components: { 
    Cat,
    AddCat
  },
  methods: {
    handleAdd(cat) {
      return api.addCat(cat)
        .then(saved => {
          this.cats.push(saved);
        });
    }
  }
};

</script>

<style>

ul.list {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

</style>