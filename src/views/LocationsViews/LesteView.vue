<template>
  <div class="main">
    <div class="row">
      <a @click="$router.push('/offer-ride')">
      <i class="fal fa-plus-square fa-2x" style="color: #BF9765"></i>
      </a>
      <input type="text" placeholder="Busca">
      <div v-for="ride in rides" :key="ride"></div>
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
    })
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
