<template>
   <div class="main">
    <div class="row">
      <a @click="$router.push('/location')">
        <i class="far fa-chevron-left fa-2x arrow"></i>
      </a>
      <div class="logo">
        <img src="@/assets/images/logo-branca.png">
        <p>Oferecer carona:</p>
      </div>
      <div class="input-group-text">
        <input type="text" placeholder="Saída (Bairro)" v-model="ride.origin">
        <input type="text" placeholder="Destino (Bairro)" v-model="ride.destination">
        <input type="number" placeholder="Vagas" v-model="ride.spots">
      </div>
      <div class="input-group-time">
        <input type="datetime-local" v-model="ride.departure">
      </div>
      <div class="btn">
      <button @click="registerRideAndNavigate()">Realizar Cadastro</button>
      </div>
    </div>
   </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'OfferRideView',
  data () {
    return {
      ride: {
        id: Math.random().toString(16).substr(-5),
        origin: '',
        destination: '',
        spots: 0,
        departure: null,
        zone: this.$route.params.zoneId,
        picked: false
      }
    }
  },
  methods: {
    ...mapMutations([
      'registerRide'
    ]),

    registerRideAndNavigate () {
      this.registerRide(this.ride)
      this.$router.back()
    }
  }
}
</script>

<style lang="less" scoped>

.main {
  height: 100vh;
  background-color: #0378A6;
}

i {
 color: #FFFF;
 padding: 20px 0 0 20px;
}

img {
  width: 80px;
  margin-top: 20px;
}

.logo {
  text-align: center;
}

p {
  font-family: 'Chau Philomene One', sans-serif;
  font-size: 24pt;
  color: #FFFF;
}

.input-group-text {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.input-group-time {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 25px;
}

input {
  width: 250px;
  border-radius: 12px;
  border: 1px solid #0378A6;
  margin-top: 10px;
  padding: 15px 16px 14px;
  &:focus-visible {
    outline: none;
  }
}

.input-number {
   width: 13px;
   height: 20px;
    border-radius: 12px;
    border: 1px solid #0378A6;
    margin: 10px 8px 0 8px;
    &:focus-visible {
      outline: none;
  }
}

.btn {
   display: flex;
  justify-content: center;
}

button {
  width: 250px;
  height: 50px;
  border-radius: 16px;
  border: solid 1px #0378A6;
  background-color: #BF9765;
  color: #FFFF;
  font-family: 'Chathura', sans-serif;
  font-weight: 400;
  font-size: 15pt;
}

</style>
