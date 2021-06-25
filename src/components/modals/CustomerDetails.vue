<template>
  <ion-header>
    <ion-toolbar>
      <ion-title>Detail zákazníka</ion-title>
      <ion-spinner v-if="loading" slot="end"></ion-spinner>
      <ion-buttons slot="end">
        <ion-button @click="closeModal()">Zavřít</ion-button>
      </ion-buttons>
    </ion-toolbar>
  </ion-header>
  <ion-content fullscreen class="ion-padding">
    <customer-details-content :customer="customer"></customer-details-content>
  </ion-content>
</template>

<script>
import {
  // IonPage,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  modalController,
  IonButton,
  IonButtons,
  IonSpinner,
} from "@ionic/vue";

import { defineComponent } from "vue";
import {mapGetters} from "vuex";
import CustomerDetailsContent from "@/components/modals/CustomerDetailsContent";

export default defineComponent ({
  name: "CustomerDetails",
  props: ['customerId'],
  components: {
    // IonPage,
    IonContent, IonHeader, IonTitle, IonToolbar,
    IonButton,
    IonButtons,
    IonSpinner,
    CustomerDetailsContent
  },
  data () {
    return {
      loading: false
    }
  },
  created() {
    this.getCustomerById()
  },
  methods: {
    closeModal() {
      modalController.dismiss();
      this.$store.commit('CLEAR_CUSTOMER_BY_ID_STATE')
    },
    setLoading() {
      this.loading = true
    },
    async getCustomerById() {
      await this.setLoading()
      this.$store.dispatch('GET_CUSTOMER_BY_ID', {
        id: this.customerId,
        token: this.userToken
      })
          .then(response => {
            if (response === 200) {
              this.loading = false
            }
          }, error => {
            if (error) {
              this.loading = false
              this.openToast()
            }
          })
    }
  },
  computed: {
    ...mapGetters(['customer', 'userToken'])
  }
});
</script>

<style scoped>

</style>
