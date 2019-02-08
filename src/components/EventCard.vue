<template>
  <div draggable="true" class="event-card -shadow">
    <span contenteditable="true" class="eyebrow">@{{ event.time }} on {{ event.date }}</span>
    <h4 class="title">{{ event.title }}</h4>
    <draggabl v-model="exampleList" @start="drag=true" @end="drag=false">
      <div v-for="text in exampleList" :key="text">{{text}}</div>
    </draggabl>

    <router-link class="event-link" :to="{ name: 'event-show', params: { id: event.id } }">
      <BaseIcon name="users">{{ event.attendees.length }} attending</BaseIcon>
    </router-link>
  </div>
</template>

<script>
import draggabl from 'vuedraggable'
export default {
  props: {
    event: Object
  },
  components: {
    draggabl
  },
  data() {
    return {
      exampleList: ['item 1', 'item 2', 'item 3', 'item 4']
    }
  },
  methods: {
    handleDragStart() {
      // alert('start drag')
    },
    handleDragEnd() {
      // let el = document.findElementById(this.event.id)
      // alert(this.event.id)
      // alert(ev)
    }
  }
}
</script>

<style scoped>
.event-card {
  padding: 20px;
  margin-bottom: 24px;
  transition: all 0.2s linear;
  cursor: pointer;
}
.event-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
}
.event-card > .title {
  margin: 0;
}
.event-link {
  color: black;
  text-decoration: none;
  font-weight: 100;
}
</style>
