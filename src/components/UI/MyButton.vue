<template>
  <button 
    class="btn"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'my-button'
}
</script>

<style scoped>
.btn {
  align-self: flex-end;
  padding: 10px 15px;
  background: none;
  color: teal;
  border: 1px solid teal;
  cursor: pointer;
  margin: auto 0;
  transition: 0.2s ease-in-out;
}
.btn:active {
  background-color: rgba(0, 128, 128, 0.276);
}
</style>