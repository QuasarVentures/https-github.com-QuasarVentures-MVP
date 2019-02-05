<script>
export default {
  name: 'EmptyLayout'
}
</script>

<template lang="pug">
  q-layout(view="lHh Lpr lFf")
    q-header(elevated, class="glossy")
      q-toolbar
        q-toolbar-title MVP
    q-page-container
      router-view
</template>
