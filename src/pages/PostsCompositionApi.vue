<template>
  <div>
    <h1>Страница с постами</h1>
    <my-input v-model="searchQuery" v-focus placeholder="Поиск..." />
    <div class="appBtns">
      <my-select :options="sortOptions" v-model="selectedSort" />
    </div>

    <my-modal v-model:show="modalVisible">
      <post-form/>
    </my-modal>

    <post-list
      :posts="sortedAndSearchedPosts"
      v-if="!isPostsLoading"
    />
    <div v-else>Идёт загрузка</div>

   </div>
</template>

<script>
import PostList from '@/components/PostList.vue'
import PostForm from '@/components/PostForm.vue'
import { usePosts } from '@/hooks/usePosts'
import { useSortedPosts } from '@/hooks/useSortedPosts'
import { useSortedAndSearchedPosts } from '@/hooks/useSortedAndSearchedPosts'
export default {
  components: {
    PostList,
    PostForm,
  },
  data() {
    return {
      modalVisible: false,
      sortOptions: [
        { value: 'title', name: 'По названию' },
        { value: 'body', name: 'По содержимому' },
      ],
    }
  },

  setup(props) {
    const { posts, isPostsLoading, totalPages } = usePosts(10)
    const { selectedSort, sortedPosts } = useSortedPosts(posts)
    const { searchQuery, sortedAndSearchedPosts } = useSortedAndSearchedPosts(sortedPosts)
    return {
      posts,
      totalPages,
      isPostsLoading,
      selectedSort,
      sortedPosts,
      searchQuery,
      sortedAndSearchedPosts,
    }
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
