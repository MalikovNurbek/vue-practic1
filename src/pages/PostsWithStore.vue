<template>
  <div>
    <h1>Страница с хранилищем</h1>
    <my-input
      :model-value="searchQuery"
      @update:model-value="setSearchQuery"
      v-focus
      placeholder="Поиск..."
    />
    <div class="appBtns">
      <my-button @click="showDialog"> Создать пост </my-button>
      <my-select :options="sortOptions" :model-value="selectedSort" @update:model-value="setSelectedSort" />
    </div>

    <my-modal v-model:show="modalVisible">
      <post-form @create="createPost" />
    </my-modal>

    <post-list
      :posts="sortedAndSearchedPosts"
      @remove="removePost"
      v-if="!isPostsLoading"
    />
    <div v-else>Идёт загрузка</div>
    <div v-intersection="loadinMorePosts" class="observer"></div>
  </div>
</template>

<script>
import PostList from '@/components/PostList.vue'
import PostForm from '@/components/PostForm.vue'
import { mapState, mapActions, mapGetters, mapMutations } from 'vuex'

export default {
  components: {
    PostList,
    PostForm,
  },
  data() {
    return {
      modalVisible: false,
    }
  },
  methods: {
    ...mapMutations({
      setPage: 'post/setPage',
      setSearchQuery: 'post/setSearchQuery',
      setSelectedSort: 'post/setSelectedSort'
    }),
    ...mapActions({
      loadinMorePosts: 'post/loadinMorePosts',
      fetchPosts: 'post/fetchPosts',
    }),

    createPost(post) {
      this.posts.push(post)
      this.modalVisible = false
    },
    removePost(id) {
      this.posts = this.posts.filter((post) => post.id !== id)
    },
    showDialog() {
      this.modalVisible = true
    },
    // async fetchPosts() {
    //   this.isPostsLoading = true
    //   try {
    //     const response = await axios.get(
    //       'https://jsonplaceholder.typicode.com/posts',
    //       {
    //         params: {
    //           _page: this.page,
    //           _limit: this.limit,
    //         },
    //       }
    //     )
    //     this.totalPages = Math.ceil(
    //       response.headers['x-total-count'] / this.limit
    //     )
    //     this.posts = response.data
    //   } catch (e) {
    //     console.log(e)
    //   } finally {
    //     this.isPostsLoading = false
    //   }
    // },
    // async loadinMorePosts() {
    //   try {
    //     this.page += 1
    //     const response = await axios.get(
    //       'https://jsonplaceholder.typicode.com/posts',
    //       {
    //         params: {
    //           _page: this.page,
    //           _limit: this.limit,
    //         },
    //       }
    //     )
    //     this.totalPages = Math.ceil(
    //       response.headers['x-total-count'] / this.limit
    //     )
    //     this.posts = [...this.posts, ...response.data]
    //   } catch (e) {
    //     console.log(e)
    //   }
    // },
  },

  mounted() {
    // this.fetchPosts()
  },
  watch: {
    // page() {
    //   this.fetchPosts()
    // }
  },
  computed: {
    ...mapState({
      posts: (state) => state.post.posts,
      limit: (state) => state.post.limit,
      page: (state) => state.post.page,
      isPostsLoading: (state) => state.post.isPostsLoading,
      selectedSort: (state) => state.post.selectedSort,
      searchQuery: (state) => state.post.searchQuery,
      totalPages: (state) => state.post.totalPages,
      sortOptions: (state) => state.post.sortOptions,
    }),
    ...mapGetters({
      sortedPosts: 'post/sortedPosts',
      sortedAndSearchedPosts: 'post/sortedAndSearchedPosts',
    }),
  },
}
</script>

<style scoped>
.appBtns {
  margin: 15px 0;
  display: flex;
  justify-content: space-between;
}

.page_wrapper {
  display: flex;
  margin-top: 15px;
}
.page {
  border: 1px solid #000;
  padding: 10px;
}
.current_page {
  border: 2px solid teal;
}
.observer {
  height: 30px;
  background: teal;
}
</style>
