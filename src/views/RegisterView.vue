<template>
  <div class="main">
    <div class="row">
      <a @click="$router.push('/')">
        <i class="far fa-chevron-left fa-2x arrow"></i>
      </a>
      <div class="logo">
        <img src="@/assets/images/logo-branca.png">
        <p>Cadastro:</p>
      </div>
      <div class="input-group">
        <input type="text" placeholder="Nome Completo" v-model="fullName">
        <input type="text" placeholder="Email">
        <input type="password" placeholder="Senha">
        <select class="input_sexo" name="Sexo">
          <option value="Genero">Genero</option>
          <option value="Masculino">Masculino</option>
          <option value="Feminino">Feminino</option>
          <option value="Uknown">Prefiro não responder</option>
        </select>
        <input type="number" placeholder="CPF">
        <input type="text" placeholder="IES">
        <input type="number" placeholder="Matrícula">
        <input type="file">
        <button @click="showMessage" class="register">Realizar Cadastro</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'RegisterView',

  data () {
    return {
      fullName: ''
    }
  },

  methods: {
    ...mapMutations([
      'setFullName'
    ]),

    showMessage () {
      alert('Cadastro realizado com sucesso!')
      this.setFullName(this.fullName)
      this.$router.push('/')
    }
  }
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

p {
  font-family: 'Chau Philomene One', sans-serif;
  font-size: 24pt;
  color: #FFFF;
}

.input-group {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 0;
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
.input_sexo {
  width: 285px;
  border-radius: 12px;
  border: 1px solid #0378A6;
  margin-top: 10px;
  padding: 15px 16px 14px;
  &:focus-visible {
    outline: none;
  }
}

.register {
  margin-top: 20px;
  width: 285px;
  height: 50px;
  border-radius: 12px;
  border: solid 1px #0378A6;
  background-color: #BF9765;
  color: #FFFF;
  font-family: 'Chathura', sans-serif;
  font-weight: 400;
  font-size: 15pt;
  cursor: pointer
}
</style>
