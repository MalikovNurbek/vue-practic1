<template>
  <transition name="fade">
    <div class="modal" v-if="show" @click.stop="hideModal">
      <div class="content" @click.stop>
        <slot></slot>
      </div>
    </div>
  </transition>
</template>

<script>
import toggleMixin from '@/mixins/toggleMixin'

export default {
  name: 'my-modal',
  mixins: [toggleMixin],
}
</script>


<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
}

.content {
  margin: auto;
  background-color: #fff;
  border-radius: 12px;
  padding: 20px;
  min-width: 400px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
