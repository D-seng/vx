<template>
  <div id="bucket" v-on:dragover="handleOnDragOver" v-on:drop="handleOnDrop">
    <h1>Events {{user.user.name}}</h1>
    <EventCard v-for="event in event.events" :key="event.id" :event="event"/>
    <template v-if="page !=1">
      <router-link :to="{ name: 'event-list', query: { page: page - 1 }}" rel="prev">Previous Page</router-link>
    </template>
    <template v-if="(page * 2) < eventsTotal">
      <router-link :to="{ name: 'event-list', query: { page: page + 1 }}" rel="next">Next Page</router-link>
    </template>
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
      page: this.page
    })
  },
  methods: {
    handleOnDragOver(ev) {
      ev.preventDefault()
      ev.dataTransfer.dropEffect = 'move'
    },
    handleOnDrop(ev) {
      ev.preventDefault()
      // let data = ev.dataTransfer.getData('text/plain')
      alert(ev)
      // ev.target.appendChild(document.getElementById(data))
    }
  },
  computed: {
    page() {
      return parseInt(this.$route.query.page) || 1
    },
    eventsTotal() {
      return this.event.eventsTotal
    },
    ...mapState(['event', 'user'])
  }
}
</script>
