<template>
  <div class="main">
    <div class="row">
      <a @click="$router.push('/login')">
        <i class="far fa-chevron-left fa-2x arrow"></i>
      </a>
      <div class="logo">
        <img src="@/assets/images/logo-branca.png">
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'RegisterView'
}
</script>

<style lang="less" scoped>
.main {
  background-color: #0378A6;
  height: 100vh;
}

.logo {
  text-align: center;
}

i {
 color: #FFFF;
 padding: 20px 0 0 20px;
}

img {
  width: 80px;
  margin-top: -40px;
}
</style>
