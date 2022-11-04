<template>
  <form @submit="createPost">
    <h4>Создание поста</h4>
    <my-input
      v-model="post.title"
      v-focus
      type="text"
      placeholder="Название поста"
    />
    <my-input
      v-model="post.body"
      type="text"
      placeholder="Описание поста"
    />
    <my-button 
      type="submit" 
      class="submitBtn"
      style="margin-top: 15px"
    >Создать</my-button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      post: {
        title: '',
        body: '',
      }
    }
  },
  methods: {
    createPost(e) {
      e.preventDefault()
      if (this.post.title && this.post.body) {
        this.post.id = Date.now(),

        this.$emit('create', this.post)
        this.post = {
          title: '',
          body: '',
        }
      }
    },
  }
}
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
}
</style>
