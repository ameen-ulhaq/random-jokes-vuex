<template>
  <div class="home">
    <h2>Can I haz Jokes</h2>
    <h4> {{ joke }} </h4>

    <button @click="addJoke">Get a new joke</button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: 'HomeView',
  methods: {
    ...mapActions( { addJoke: 'setCurrentJoke' } ),
    // addJoke() {
    //   // this.$store.dispatch( "setCurrentJoke" )
    //   this.setCurrentJoke()
    // }
  }, 
  computed: {
    ...mapGetters({ joke: "getCurrentJoke" }),
    // joke() {
    //   // return this.$store.getters.getCurrentJoke
    //   return this.getCurrentJoke
    // }
  }
  // mounted() {
  //   this.joke = this.$store.getters.getCurrentJoke
  // }
}
</script>
