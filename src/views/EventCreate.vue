<template>
  <div>
    <h1>Create an event, {{ user.name }}</h1>
    <p>This event was created by {{ user.name }}</p>
    <ul>
      <li v-for="category in categories" :key="category">{{ category }}</li>
    </ul>
    <p>Number of categories: {{ catLength }}</p>
    <p>Selected event: {{ getEventById(2).title }}</p>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['getEventById', 'catLength']),
    ...mapState(['user', 'categories'])
  }
}
</script>

<style scoped>
</style>
