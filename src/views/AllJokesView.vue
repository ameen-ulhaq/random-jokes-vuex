<template>
  <div class="about">
    <h1>All Jokes</h1>
    <h4 v-for="(joke, idx) in jokes" :key="idx" > 
      <span> {{ idx + 1 }}</span>
      {{ joke }}
    </h4>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  
  computed: {
    ...mapGetters({ jokes: 'getAllJokes' })
    // jokes() {
    //   return this.$store.getters.getAllJokes
    // }
  }
}
</script>
