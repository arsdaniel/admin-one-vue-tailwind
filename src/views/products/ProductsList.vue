<script setup>
import CardBox from '@/components/CardBox.vue'
import TableProducts from '@/components/TableProducts.vue'
import { mdiAccountMultiple, mdiMonitorCellphone, mdiTableBorder, mdiTableOff, mdiPlusCircleOutline } from '@mdi/js'
import SectionTitleLineWithButton from '@/components/SectionTitleLineWithButton.vue'
import BaseButton from '@/components/BaseButton.vue'
import router from '@/router'

function addProducts(){
  router.push('/products/addProducts')
}
</script>

<template>
      <SectionTitleLineWithButton
        :icon="mdiTableBorder"
        title="Produk"
        main
      >
        <BaseButton
          @click="addProducts"
          target="_blank"
          :icon="mdiPlusCircleOutline"
          label="Tambah Produk"
          color="success"
          rounded-full
          small
        />
      </SectionTitleLineWithButton>
    <CardBox
        class="mb-40"
        :icon="mdiAccountMultiple"
        has-table
      >
        <TableProducts />
      </CardBox>
</template>
