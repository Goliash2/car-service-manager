<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button defaultHref="/"></ion-back-button>
        </ion-buttons>
        <ion-title>Detail vozidla</ion-title>
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
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton, loadingController, toastController} from '@ionic/vue';
import { mapGetters } from "vuex";
import CarDetailsItem from "@/components/items/CarDetailsItem";

export default {
name: "CarDetails",
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonButtons, IonBackButton, CarDetailsItem},
  data() {
    return {
      carId: this.$route.params.id
    }
  },
  async ionViewWillEnter() {
    await this.presentLoading()
    this.$store.dispatch('GET_CAR_BY_ID', {
      id: this.carId,
      token: this.userToken
    })
    .then(response => {
      if (response === 200) {
        loadingController.dismiss()
      }
    }, error => {
      if (error) {
        this.openToast()
      }
    })
  },
  methods: {
    async presentLoading() {
      const loading = await loadingController
          .create({
            message: 'Načítání...',
          });

      await loading.present();
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
  }
}
</script>

<style scoped>

</style>