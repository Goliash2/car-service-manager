<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button defaultHref="/"></ion-back-button>
        </ion-buttons>
        <ion-title>Detail vozidla</ion-title>
        <ion-spinner v-if="loading" slot="end"></ion-spinner>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <car-details-item
          :car="car"
      ></car-details-item>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonBackButton,
  toastController,
  IonSpinner
} from '@ionic/vue';
import { mapGetters } from "vuex";
import CarDetailsItem from "@/components/items/CarDetailsItem";

export default {
name: "CarDetails",
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonButtons, IonBackButton, IonSpinner, CarDetailsItem},
  data() {
    return {
      carId: this.$route.params.id,
      loading: false
    }
  },
  async ionViewWillEnter() {
    await this.setLoading()
    this.$store.dispatch('GET_CAR_BY_ID', {
      id: this.carId,
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
  },
  methods: {
    setLoading() {
      this.loading = true
    },
    async openToast() {
      const toast = await toastController
          .create({
            message: 'Data nebyla úspěšně načtena.',
            duration: 3000,
            color: 'danger'
          })
      return toast.present();
    }
  },
  computed: {
    ...mapGetters(['car']),
    ...mapGetters(['userToken'])
  },
  watch: {
    $route() {
      this.$store.commit('CLEAR_CAR_BY_ID_STATE')
    }
  }
}
</script>

<style scoped>

</style>