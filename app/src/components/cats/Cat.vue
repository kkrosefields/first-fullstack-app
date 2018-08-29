<template id="cat-template">
<div>
    <h3>{{ cat.name }}</h3>
    <p>{{ cat.hobby }}</p>
    <p>{{ cat.breed }}</p>
</div>

    
</template>

<script>
export default {
  props: ['cat'],
  
};
</script>

<style>
</style>