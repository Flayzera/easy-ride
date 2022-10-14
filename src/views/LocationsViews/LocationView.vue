<template>
  <div class="main">
    <div class="row">
      <side-bar-view />
      <div class="logo">
        <img src="@/assets/images/logo-branca.png">
        <p>Escolha sua zona:</p>
      </div>
      <div class="btn-group">
        <button v-for="zone in zones" :key="zone.id" @click="$router.push('/zone/' + zone.id)">{{zone.name}}</button>
      </div>
    </div>
  </div>

</template>

<script>
import SideBarView from '@/components/SideBarView.vue'
import { mapGetters } from 'vuex'

export default {
  components: { SideBarView },
  name: 'LocationView',

  computed: {
    ...mapGetters({
      zones: 'getZones'
    })
  }
}
</script>

<style lang="less" scoped>

.main {
  background-color: #0378A6;
  height: 100vh;
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

.btn-group {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5px;
}

button {
  width: 285px;
  height: 50px;
  margin-top: 10px;
  border-radius: 12px;
  border: 1px solid #0378A6;
  background-color: #BF9765;
  color: #FFFF;
  font-size: 14pt;
}

p {
  font-family: 'Chau Philomene One', sans-serif;
  font-size: 24pt;
  color: #FFFF;
}
</style>
