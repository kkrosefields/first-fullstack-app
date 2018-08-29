<template id="cat-template">
  <section class="add-cat">
    <h1>New cat</h1>
    <form @submit.prevent="handleSubmit">
      <label>
        Name:
        <input type="text" name="name" placeholder="Name" required
          v-model="cat.name">
      </label>

      <label>
        Breed
        <input type="text" name="breed" placeholder="Breed" required
          v-model="cat.breed">
      </label>

      <label>
        Hobby
        <input type="text" name="hobby" placeholder="Hobby" required
          v-model="cat.hobby"> 
          </label>

      <label>
        <button type="submit">Add</button>
      </label>
    </form>
  </section>
</template>

<script>
const initCat = () => {
  return {
    name: '',
    breed: '',
    hobby: '',
  };
};

export default {
  props: {
    onAdd: {
      type: Function,
      required: true
    }
  },

  data() {
    return {
      cat: initCat()
    };
  },

  methods: {
    handleSubmit() {
        this.onAdd(this.cat)
            .then(() => {
            this.cat = initCat();
            });
        },
    }

}

</script>

<style>

</style>
