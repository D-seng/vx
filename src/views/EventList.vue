<template>
  <div>
    <h1>Events Listing</h1>
    <EventCard v-for="event in events" :key="event.id" :event="event"/>
    <router-link
      :to="{ name: 'event-list', query: { page: currentPage - 1 }}"
      rel="prev"
    >Previous Page</router-link>
    <router-link :to="{ name: 'event-list', query: { page: currentPage + 1 }}" rel="next">Next Page</router-link>
  </div>
</template>

<script>
import EventCard from '@/components/EventCard.vue'
import { mapState } from 'vuex'

export default {
  components: {
    EventCard
  },
  created() {
    this.$store.dispatch('fetchEvents', {
      perPage: 3,
      currentPage: this.currentPage
    })
  },
  computed: {
    currentPage() {
      return parseInt(this.$route.query.page) || 1
    },
    ...mapState(['events'])
  }
}
</script>
