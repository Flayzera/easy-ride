<template>
  <div class="main">
    <div>
    <a @click="this.$router.back()">
      <i class="far fa-chevron-left fa-2x arrow"></i>
    </a>
    </div>
    <div class="header">
      <i class="fal fa-user-circle fa-4x"></i>
      <p class="text">{{getFullName}}</p>
      <p class="text">{{getPlacaAndVehicle.vehicle}}</p>
    </div>
    <div class="details">
      <div class="flex-item">
        Saida: {{ride.origin}}
      </div>
      <div class="flex-item">
        Destino: {{ride.destination}}
      </div>
      <div class="flex-item">
        Horário: {{}}h
      </div>
      <div class="flex-item">
        Data: {{}}
      </div>
      <div class="flex-item">
        Placa: {{getPlacaAndVehicle.placa}}
      </div>
      <div class="flex-item">
        Vagas: {{ride.spots}}
      </div>
      <div class="payment">
        <p class="text">Pix:</p>
        <img class="qrcode" src="@/assets/images/qrcode.png">
      </div>
      <button class="btn" @click="finalizarCarona(ride)">Finalizar carona</button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'RideDetailsView',

  computed: {
    ...mapGetters([
      'getPlacaAndVehicle',
      'getFullName'
    ]
    ),
    ride () {
      return this.$store.state.rides.find(i => i.id === this.$route.params.id)
    }
  },
  methods: {
    ...mapMutations([
      'finishRide'
    ]),
    finalizarCarona (ride) {
      this.finishRide(ride)
      this.$router.back()
    }
  }
}
</script>

<style lang="less" scoped>

img {
  width: 80px;
}

button {
  width: 285px;
  height: 50px;
  border-radius: 12px;
  border: 1px solid #0378A6;
  background-color: #BF9765;
  color: #FFFF;
  font-size: 14pt;
  margin-bottom: 150px;
}

.payment {
  position: relative;
  bottom: 180px;
  left: 250px;
  color: #BF9765;
}

.btn {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  bottom: 60px;
  left: 60px;
  position: relative;
}

.main {
  height: 100vh;
  background-color: #0378A6;
}

.header {
  color: white;
  text-align: center;
  margin-top: 90px;
  margin-bottom: 20px;
  font-size: 18pt;
}

i {
  color: #FFFF;
  padding: 20px 0 0 20px;
}

.fa-user-circle {
  margin-right: 12px;
}

.details {
  display: inline-block;
  background-color: #D9D9D9;
  width: 100vh;
  height: 200px;
  font-size: 16pt;
}

.flex-item {
  margin-left: 12px;
  margin-top: 8px;
  color: #BF9765;
}

.text {
  margin: 0 !important;
}
</style>
