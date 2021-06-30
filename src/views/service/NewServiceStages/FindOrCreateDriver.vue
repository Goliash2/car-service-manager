<template>
  <new-service-header page-default-back-link="/service/new/car" :loading="loading" :homeButton="true">
    <ion-card>
      <ion-card-header>
        <ion-card-title>Zadejte existující záznamy<br> nebo přidejte nové</ion-card-title>
        <ion-card-subtitle>Vozidlo: {{ car.SPZ }}</ion-card-subtitle>
        <ion-card-subtitle>{{ car.VIN }}</ion-card-subtitle>
      </ion-card-header>
      <ion-searchbar :search-icon="businessOutline" @ionFocus="getDriversByCarId" placeholder="Název firmy" type="text"></ion-searchbar>
      <ion-searchbar :search-icon="personOutline" placeholder="Řidič" type="text"></ion-searchbar>
      <ion-searchbar :search-icon="callOutline" placeholder="Telefon" type="number"></ion-searchbar>
      <ion-list v-for="customer in foundCustomersByCarId" :key="customer.id">
        <ion-item v-for="company in customer.companies" :key="company.id">
          <ion-label>
            <h2>Firma: {{ company.name }}</h2>
          </ion-label>
        </ion-item>
      </ion-list>
    </ion-card>
  </new-service-header>
</template>

<script>

import NewServiceHeader from "@/views/service/NewServiceHeader";
import {mapGetters} from "vuex";
import { businessOutline, personOutline, callOutline} from 'ionicons/icons';
import {
  IonCard,
  IonCardTitle,
  IonCardHeader,
  IonSearchbar,
  IonList,
  IonItem,
  IonLabel,
  IonCardSubtitle,
  toastController
} from '@ionic/vue';
export default {
  name: "FindOrCreateCar",
  data() {
    return {
      loading: false,
      businessOutline,
      personOutline,
      callOutline,
    }
  },
  components: {NewServiceHeader, IonCard, IonCardTitle, IonCardHeader, IonSearchbar, IonList, IonItem, IonLabel, IonCardSubtitle },
  methods: {
    async getDriversByCarId() {
      await this.setLoading()
      this.$store.dispatch('FIND_CUSTOMER_BY_CAR_ID', {
        carId: this.car.id,
        token: this.userToken
      })
      .then(response => {
        if (response) {
          this.loading = false
        }
      }, error => {
        if (error) {
          this.loading = false
          this.openToast()
        }
      })
    },
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
    },
  },
  computed: {
    ...mapGetters(['userToken', 'car', 'foundCustomersByCarId']),
  }
}
</script>

<style scoped>

</style>