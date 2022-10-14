<template>
    <input type="checkbox" id="check">
    <label for="check">
      <i class="fas fa-bars" id="btn"></i>
      <i class="fas fa-times" id="cancel"></i>
    </label>
    <div class="sidebar">
      <header>Meu menu</header>
      <a href="#">
        <span>Meus Dados</span>
      </a>
      <a href="#">
        <span>Virar Motorista</span>
      </a>
      <a href="#">
        <span>Mensagens</span>
      </a>
    </div>
</template>

<script>
export default {
  name: 'SideBarView'
}
</script>

<style lang="less" scoped>

* {
  margin: 0;
  padding: 0;
  text-decoration: none;
}

.sidebar {
  position: fixed;
  width: 240px;
  left: -240px;
  height: 100%;
  background: #03588C;
  transition: all .5s ease;
}

.sidebar header {
  font-size: 28px;
  color: white;
  line-height: 70px;
  text-align: center;
  user-select: none;
}

.sidebar a {
  display: block;
  height: 65px;
  width: 100%;
  color: white;
  line-height: 65px;
  padding-left: 30px;
  box-sizing: border-box;
  border-bottom: 1px solid transparent;
  border-top: 1px solid rgba(255, 255, 255, .1);
  border-left: 5px solid transparent;
  transition: all .5 ease;
}

a.active,a:hover {
  border-left: 5px solid white;
  color: white;
}

.sidebar a i {
  font-size: 23px;
  margin-right: 16px;
}

.sidebar a span {
  letter-spacing: 1px;

}

#check {
  display: none;
}

label #btn, label #cancel {
  position: absolute;
  cursor: pointer;
  color: white;
  border-radius: 5px;
  margin: 8px 15px;
  font-size: 28px;
  height: 45px;
  width: 45px;
  text-align: center;
  line-height: 45px;
  transition: all .5s ease;
}

label #cancel {
  opacity: 0;
  visibility: hidden;
}

#check:checked ~ .sidebar {
  left: 0;
}

#check:checked ~ label #btn {
  margin-left: 245px;
  opacity: 0;
  visibility: hidden;
}

span {
  position: absolute;
  margin-left: 23px;
}

.sidebar a {
  height: 60px;
}

.sidebar a i {
  margin-left: -10px;
}

a:hover {
  width: 200px;
  background: inherit;
}

.sidebar a:hover span {
  opacity: 1;
  visibility: visible;
}
</style>
