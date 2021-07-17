<template>
  <div>
    <button @click="logout"></button>
  </div>
</template>

<script>
export default {
  name: "Appindex",
  data(){
    return {username: null}
  },
  methods: {
    logout() {
      this.username=this.$store.state.user.username
      this.$axios.delete('/login/logout/' + this.username)
    }
  }


}
</script>

<style scoped>

</style>
