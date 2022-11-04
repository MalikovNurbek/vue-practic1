<template>
  <div class="navbar">
    <div @click="$router.push('/')">Vue 3</div>
    <div class="navbarBtns">
      <my-button @click="$router.push('/posts')">Посты</my-button>
      <my-button @click="$router.push('/about')" style="margin-left: 20px">О нас</my-button>
      <my-button @click="$router.push('/store')" style="margin-left: 20px">Пост 2</my-button>
      <my-button @click="$router.push('/composition')" style="margin-left: 20px">composition</my-button>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.navbar {
  height: 50px;
  background-color: rgb(224, 219, 219);
  box-shadow: 2px 2px 4px gray;
  display: flex;
  align-items: center;
  padding: 0 15px;
}

.navbarBtns {
  margin-left: auto;
}
</style>