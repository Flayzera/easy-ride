<template>
  <div class="main">
    <div>
    <a @click="this.$router.back()">
      <i class="far fa-chevron-left fa-2x arrow"></i>
    </a>
    </div>
    <div class="row">
      <a @click="$router.push('/create-ride/' + zone)">
      <i class="fal fa-plus-square fa-2x" style="color: #BF9765"></i>
      </a>
      <input type="text" placeholder="Busca">
    </div>
    <div class="rides">
      <div v-for="ride in zoneRides" :key="ride.id" class="ride" @click="$router.push('/ride/' + ride.id)">
        <div class="field-group">
          <div class="value">{{ride.origin}}</div>
        </div>-
        <div class="field-group">
          <div class="value">{{ride.destination}}</div>
        </div>
        <div class="field-group">
          <div class="value">{{dateFormated(ride)}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import formatDateTime from '@/utils/formatters'

export default {
  name: 'LesteView',

  methods: {
    dateFormated (ride) {
      return formatDateTime(ride.departure)
    }
  },

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
.fa-chevron-left {
  color: #0378A6;
  padding: 20px 0 0 20px;
}

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

.ride {
  display: flex;
  background-color: #0378A6;
  color: white;
  width: 180px;
  height: 80px;
  margin-top: 20px;
  margin-left: 130px;
  border-radius: 8px;
  text-align: center;
  align-items: center;
}

.field-group {
  display: inline-block;
  margin: 4px;

}
</style>
