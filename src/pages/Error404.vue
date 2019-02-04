<script>
export default {
  name: 'page-error-404',
};
</script>

<template lang="pug">
  .fixed-center text-center
    p
      img(src="~assets/sad.svg")
    p.text-faded
      | Sorry, nothing here...
      strong 404
    q-btn(color="secondary", @click="$router.push('/')", label="Go back")
</template>
