<template>
  <div class="main">
    <div class="logo">
      <img src="@/assets/images/logo-azul.png">
    </div>
    <div class="login">
      <h2 class="welcome">Seja Bem-Vindo</h2>
      <div class="input-group">
        <input type="text" placeholder="Email">
        <input v-bind:type="[showPassword ? 'text' : 'password']" placeholder="Senha">
        <span @click="showPassword = !showPassword">
          <i class="fa" :class="[showPassword ? 'fa-eye' : 'fa-eye-slash']" aria-hidden="true"></i>
        </span>
        <button class="log-in">Entrar</button>
        <a @click="$router.push('/register')">Realizar cadastro</a>
        <a href="javascript:void(0)">Esqueceu seu email?</a>
        <a href="javascript:void(0)">Esqueceu sua senha?</a>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'LoginView',

  data () {
    return {
      showPassword: false
    }
  }
}
</script>

<style lang="less" scoped>

.main {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.logo {
  display: flex;
  background-color: #FFFF;
  justify-content: center;
  align-items: center;
  height: 40vh;
}

.login {
  background-color: #0378A6;
  height: 100%;
  color: #FFFF;
  text-align: center;
  border-radius: 16px;
}

.welcome {
  font-family: 'Chau Philomene One', sans-serif;
  font-size: 24pt;
  position: relative;
  top: 15px;
}

.input-group {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5   0px;
  position: relative;
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
i {
  position: absolute;
  top: 80px;
  right: 80px;
  color:#BF9765;
}

.log-in {
  margin-top: 30px;
  width: 130px;
  height: 50px;
  border-radius: 16px;
  border: solid 1px #0378A6;
  background-color: #BF9765;
  color: #FFFF;
  font-family: 'Chathura', sans-serif;
  font-weight: 400;
  font-size: 15pt;
}
a {
  text-decoration: none;
  color: #BF9765;
  margin-top: 20px;
}

img {
  width: 80px;
}
</style>
