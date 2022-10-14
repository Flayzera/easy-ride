<template>
   <div class="main">
    <div class="row">
      <a @click="$router.push('/location')">
        <i class="far fa-chevron-left fa-2x arrow"></i>
      </a>
      <div class="logo">
        <img src="@/assets/images/logo-branca.png">
        <p>Completar cadastro:</p>
      </div>
      <div class="input-group">
        <input type="text" placeholder="Veículo">
        <input type="number" placeholder="CNH">
        <input type="number" placeholder="Placa">
        <input type="number" placeholder="Pix">
        <div class="payment">
          <p>Realize pagamento</p>
          <img class="qrcode" src="@/assets/images/qrcode.png">
        </div>
        <button>Virar Motorista</button>
      </div>
    </div>
   </div>
</template>

<script>
export default {
  name: 'FinishRegistrationView'
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
  font-size: 14pt;
  color: #FFFF;
}

.payment {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.qrcode {
  position: relative;
  bottom: 20px;
}

</style>
