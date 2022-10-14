<template>
  <div class="main">
    <div class="row">
      <a @click="$router.push('/create-ride/' + zone)">
      <i class="fal fa-plus-square fa-2x" style="color: #BF9765"></i>
      </a>
      <input type="text" placeholder="Busca">
      <div v-for="ride in rides" :key="ride"></div>

      <div class="rides">
        <div v-for="ride in zoneRides" :key="ride.id" class="ride" @click="$router.push('/ride/' + ride.id)">
          <div class="field-group">
            <div class="label">Origem</div>
            <div class="value">{{ride.origin}}</div>
          </div>
          <div class="field-group">
            <div class="label">Destino</div>
            <div class="value">{{ride.destination}}</div>
          </div>
          <div class="field-group">
            <div class="label">Vagas</div>
            <div class="value">{{ride.spots}}</div>
          </div>
          <div class="field-group">
            <div class="label">Hora da partida</div>
            <div class="value">{{ride.departure}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'LesteView',

  computed: {
    ...mapGetters({
      rides: 'getRides'
    }),

    zone () {
      return this.$route.params.id
    },

    zoneRides () {
      return this.rides.filter(i => i.zone === this.zone)
    }
  }
}
</script>

<style lang="less" scoped>
.main {
  height: 100vh;
}

.row{
  display: flex;
  justify-content: center;

}

input {
  height: 25px;
  margin-top: 30px;
  &:focus-visible{
    outline: none;
  }
}

.fa-plus-square{
   margin: 30px 8px 0 8px;
}
</style>
