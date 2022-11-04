import { computed, ref } from 'vue'

export function useSortedAndSearchedPosts(sortedPosts) {
  const searchQuery = ref('')

  const sortedAndSearchedPosts = computed(() => {
    return sortedPosts.value.filter((post) => post.title.toUpperCase().includes(searchQuery.value.toUpperCase())
    )
  })

  return {
    searchQuery,
    sortedAndSearchedPosts,
  }
}
