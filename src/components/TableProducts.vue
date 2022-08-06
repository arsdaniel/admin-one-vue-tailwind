<script setup>
import { computed, ref } from 'vue'
import { mdiEye, mdiTrashCan } from '@mdi/js'
import { useStyleStore } from '@/stores/style'
import CardBoxModal from '@/components/CardBoxModal.vue'
import BaseLevel from '@/components/BaseLevel.vue'
import BaseButtons from '@/components/BaseButtons.vue'
import BaseButton from '@/components/BaseButton.vue'
import UserAvatar from '@/components/UserAvatar.vue'
import { useRouter } from "vue-router"
import { useProductsStore } from "../stores/products"
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue';
import FormControl from '@/components/FormControl.vue'



const search = ref('')

const styleStore = useStyleStore()

const { products, loading, error } = storeToRefs(useProductsStore())
const { fetchProdutcs } = useProductsStore()

const perPage = ref(5)

const currentPage = ref(0)
const isModalActive = ref(false)  

const isModalDangerActive = ref(false)

const itemsPaginated = computed(
  () => filterList.value.slice(perPage.value * currentPage.value, perPage.value * (currentPage.value + 1))
)

const numPages = computed(() => Math.ceil(products.value.length / perPage.value))

const currentPageHuman = computed(() => currentPage.value + 1)

const pagesList = computed(() => {  
  const pagesList = []

  for (let i = 0; i < numPages.value; i++) {
    pagesList.push(i)
  }

  return pagesList
})

const filterList = computed(() => {
      return products.value.filter(product => {
         return product.name.toLowerCase().indexOf(search.value.toLowerCase()) > -1
      })
})

onMounted(() => {
  fetchProdutcs()
})


</script>

<template>
<FormControl
    v-model="search"
    placeholder="Search (ctrl+k)"
    name = "search"
    ctrl-k-focus
    transparent
    borderless
  />
<CardBoxModal
    v-model="isModalActive"
    title="Sample modal"
  >
    <p>Lorem ipsum dolor sit amet <b>adipiscing elit</b></p>
    <p>This is sample modal</p>
  </CardBoxModal>

  <CardBoxModal
    v-model="isModalDangerActive"
    large-title="Please confirm"
    button="danger"
    has-cancel
  >
    <p>Lorem ipsum dolor sit amet <b>adipiscing elit</b></p>
    <p>This is sample modal</p>
  </CardBoxModal>
  <table>
    <thead>
      <tr>
        <th>Gambar</th>
        <th>Nama</th>
        <th>Stok</th>
        <th>Harga</th>
        <th>Diskon</th>
        <th />
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="product in itemsPaginated"
        :key="product.id"
      >
       
        <td class="border-b-10 lg:w-20 before:hidden">
          <img
            :src="product.imageSrc"
            class="w-24 h-24 mx-auto lg:w-14 lg:h-14 rounded-lg"
          />
        </td>
        <td data-label="Nama">
          {{ product.name }}
        </td>
        <td data-label="Jumlah">
          {{ product.jumlah }}
        </td>
        <td data-label="Price">
          {{ product.price }}
        </td>
        <td data-label="Diskon">
          {{ product.diskon }}
        </td>
        
        <td class="before:hidden lg:w-1 whitespace-nowrap">
          <BaseButtons
            type="justify-start lg:justify-end"
            no-wrap
          >
            <BaseButton
              color="info"
              :icon="mdiEye"
              small
              @click="isModalActive = true"
            />
            <BaseButton
              color="danger"
              :icon="mdiTrashCan"
              small
              @click="isModalDangerActive = true"
            />
          </BaseButtons>
        </td>
      </tr>
    </tbody>
  </table>
   <div
    class="p-3 lg:px-6 border-t border-gray-100 dark:border-slate-800"
  >
    <BaseLevel>
      <BaseButtons>
        <BaseButton
          v-for="page in pagesList"
          :key="page"
          :active="page === currentPage"
          :label="page + 1"
          small
          :outline="styleStore.darkMode"
          @click="currentPage = page"
        />
      </BaseButtons>
      <small>Page {{ currentPageHuman }} of {{ numPages }}</small>
    </BaseLevel>
  </div>
</template>