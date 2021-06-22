<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
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
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent} from '@ionic/vue';
import { mapGetters } from "vuex";
import CarDetailsItem from "@/components/items/CarDetailsItem";

export default {
name: "CarDetails",
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage ,CarDetailsItem},
  data() {
    return {
      carId: this.$route.params.id
    }
  },
  ionViewWillEnter() {
    this.$store.dispatch('GET_CAR_BY_ID', {
      id: this.carId,
      token: this.userToken
    })
  },
  computed: {
    ...mapGetters(['car']),
    ...mapGetters(['userToken'])
  }
}
</script>

<style scoped>

</style>