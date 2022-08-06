<script setup>
import { reactive } from 'vue'
import { mdiBallot, mdiBallotOutline, mdiAccount, mdiMail, mdiGithub } from '@mdi/js'
import SectionMain from '@/components/SectionMain.vue'
import CardBox from '@/components/CardBox.vue'
import FormCheckRadioPicker from '@/components/FormCheckRadioPicker.vue'
import FormFilePicker from '@/components/FormFilePicker.vue'
import FormField from '@/components/FormField.vue'
import FormControl from '@/components/FormControl.vue'
import BaseDivider from '@/components/BaseDivider.vue'
import BaseButton from '@/components/BaseButton.vue'
import BaseButtons from '@/components/BaseButtons.vue'
import SectionTitle from '@/components/SectionTitle.vue'
import LayoutAuthenticated from '@/layouts/LayoutAuthenticated.vue'
import SectionTitleLineWithButton from '@/components/SectionTitleLineWithButton.vue'

const selectOptions = [
  { id: 1, label: 'Masakan Jawa' },
  { id: 2, label: 'Masakan Barat' },
  { id: 3, label: 'Masakan Padang' }
]




const form = reactive({
  name: '',
  image: '',
  jumlah: '',
  harga: '',
  kategori: selectOptions[0],
  diskon: '',
  keterangan: '',
})


const submit = () => {
  //
}
</script>

<template>
    <SectionMain>
      <SectionTitleLineWithButton
        :icon="mdiBallotOutline"
        title="Tambah Produk"
        main
      >
      </SectionTitleLineWithButton>
      <CardBox
        title="Forms tambah produk"
        :icon="mdiBallot"
        form
        @submit.prevent="submit"
      >

        <FormField
          label="Nama Produk"
          help="Silahkan isi nama produk bukan nama anda"
        >
          <FormControl
            v-model="form.name"
            type="text"
            placeholder="Burger"
          />
        </FormField>

            <FormField
          label="gambar"
          help="Silahkan isi nama produk bukan nama anda"
        >
            <FormFilePicker />
        </FormField>


         <FormField
          label="Stok"
          help="Silahkan isi nama produk bukan nama anda"
        >
          <FormControl
            v-model="form.jumlah"
            type="number"
            placeholder="10"
          />
        </FormField>

         <FormField
          label="Harga"
          help="Silahkan isi nama produk bukan nama anda"
        >
          <FormControl
            v-model="form.Harga"
            type="number"
            placeholder="10000"
          />
        </FormField>
         <FormField
          label="Diskon"
          help="Silahkan isi nama produk bukan nama anda"
        >
          <FormControl
            v-model="form.diskon"
            type="number"
            placeholder="12"
          />
        </FormField>

        <FormField label="kategori">
          <FormControl
            v-model="form.kategori"
            :options="selectOptions"
          />
        </FormField>

        <BaseDivider />

        <FormField
          label="Keterangan"
          help="Silahkan isi keterang Maksimal 255 karakter ya"
        >
          <FormControl
            type="textarea"
            placeholder="isi keterangan disini ya"
          />
        </FormField>

        <template #footer>
          <BaseButtons>
            <BaseButton
              type="submit"
              color="info"
              label="Submit"
            />
            <BaseButton
              type="reset"
              color="info"
              outline
              label="Reset"
            />
          </BaseButtons>
        </template>
      </CardBox>
    </SectionMain>
</template>
