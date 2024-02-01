<template>
  <Overlay v-if="needOverlay" :status="modalInfo.show" />
  <div
    class="modal fade show"
    v-if="modalInfo.show"
    :id="modalInfo.id"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <!-- <h5 v-if="modalInfo.title" class="modal-title">{{ modalInfo.title }}</h5> -->
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            :aria-label="modalInfo.close"
            @click="closeClick"
          ></button>
        </div>
        <div class="modal-body">{{ modalInfo.content }}</div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary" @click="confirmClick">
            {{ modalInfo.confirm }}
          </button>
          <button
            type="button"
            class="btn btn-secondary"
            @click="closeClick"
          >
            {{ modalInfo.close }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ModalInfo } from "@/interfaces/image";
import Overlay from "@/components/Share/Overlay.vue";
interface Props {
  modalInfo: ModalInfo;
  needOverlay?: boolean;
}
withDefaults(defineProps<Props>(), {
  needOverlay: true
});

const emit = defineEmits<{
  (e: "confirm"): void;
  (e: "close"): void;
}>();
function confirmClick() {
  emit("confirm");
}
function closeClick() {
  emit("close");
}
</script>
<style scoped>
.modal{
  display: block;
}
.modal-header {
  border-bottom: none !important;
}
</style>