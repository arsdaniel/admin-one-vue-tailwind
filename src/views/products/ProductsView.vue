<script setup>
import { ref } from 'vue'
import SectionMain from '@/components/SectionMain.vue'
import NotificationBar from '@/components/NotificationBar.vue'
import LayoutAuthenticated from '@/layouts/LayoutAuthenticated.vue'

</script>

<template>
  <LayoutAuthenticated>
    <SectionMain>
       
      <router-view />
    </SectionMain>
  </LayoutAuthenticated>
</template>
