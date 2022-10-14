<template>
  <div>
    <h1>Detalhes da Carona</h1>

    <div>
      Origem: {{ride.origin}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'RideDetailsView',

  computed: {
    ride () {
      return this.$store.state.rides.find(i => i.id === this.$route.params.id)
    }
  }
}
</script>
