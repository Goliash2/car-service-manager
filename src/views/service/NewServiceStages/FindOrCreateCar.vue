<template>
  <new-service-header page-default-back-link="/" :loading="loading">
    <ion-card>
      <ion-card-header>
        <ion-card-title>Vyber existující VIN/SPZ<br> nebo přidej nové auto</ion-card-title>
      </ion-card-header>
      <ion-searchbar @keyup="searchForInsertedValue('SPZ', $event.target.value)" @ionFocus="searchForInsertedValue('SPZ', $event.target.value)" @ionClear="addNewValue=false" placeholder="SPZ"></ion-searchbar>
      <ion-searchbar @keyup="searchForInsertedValue('VIN', $event.target.value)" @ionFocus="searchForInsertedValue('VIN', $event.target.value)" @ionClear="addNewValue=false" placeholder="VIN"></ion-searchbar>
      <ion-list v-for="car in foundCarsByValue" :key="car.id">
        <ion-item @click="getCarByIdDetails(car.id)" v-show="showCarsList">
          <ion-label>
            <h2>VIN: {{ car.VIN }}</h2>
            <h3>SPZ: {{ car.SPZ }}</h3>
            <h4>Model: {{ car.Model }}</h4>
          </ion-label>
        </ion-item>
      </ion-list>
    </ion-card>
    <ion-button v-show="addNewValue" expand="block" color="primary">Přidat nové auto</ion-button>
    <ion-card v-show="numberOfKmIsOpen">
      <ion-card-header>
        <ion-card-subtitle>Auto</ion-card-subtitle>
        <ion-card-subtitle>Model: {{ car.Model }}</ion-card-subtitle>
        <ion-card-subtitle>SPZ: {{ car.SPZ }}</ion-card-subtitle>
        <ion-card-subtitle>VIN: {{ car.VIN }}</ion-card-subtitle>
        <ion-card-title>Zadejte počet najetých KM</ion-card-title>
      </ion-card-header>
      <ion-searchbar placeholder="Počet KM" type="number" search-icon="undefined"></ion-searchbar>
    </ion-card>
  </new-service-header>
</template>

<script>
import NewServiceHeader from "@/views/service/NewServiceHeader";
import { IonCard, IonCardTitle, IonCardHeader, IonCardSubtitle, IonSearchbar, IonList, IonItem, IonLabel, toastController, IonButton } from '@ionic/vue';
import {mapGetters} from "vuex";
export default {
name: "FindOrCreateCar",
  data() {
    return {
      loading: false,
      numberOfKmIsOpen: false,
      addNewValue: false,
      showCarsList: true
    }
  },
  components: { IonCard, IonCardTitle, IonCardHeader, IonCardSubtitle, IonSearchbar, IonList, IonItem, IonLabel, NewServiceHeader, IonButton},
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
    },
    async searchForInsertedValue(record, value) {
      this.showCarsList = true
      await this.$store.commit('CLEAR_CAR_BY_ID_STATE')
      await this.setLoading()
      this.numberOfKmIsOpen = false
      this.$store.dispatch('FIND_CAR_BY_VALUES', {
        data: record,
        record: value,
        token: this.userToken
      })
          .then(response => {
            if (response) {
              this.addNewValue = response.data.length === 0;
              this.loading = false
            }
          }, error => {
            if (error) {
              this.loading = false
              this.openToast()
            }
          })
    },
    async getCarByIdDetails(carId) {
      await this.setLoading()
      this.$store.dispatch('GET_CAR_BY_ID', {
        id: carId,
        token: this.userToken
      })
      .then(response => {
        if (response.status === 200) {
          this.showCarsList = false
          this.numberOfKmIsOpen = true
          this.loading = false
        }
      }, error => {
        if (error) {
          this.showCarsList = false
          this.loading = false
          this.openToast()
        }
      })
    }
  },
  created() {
    this.showCarsList = false
  },
  computed: {
    ...mapGetters(['userToken', 'foundCarsByValue', 'car']),
  }
}
</script>

<style scoped>

</style>