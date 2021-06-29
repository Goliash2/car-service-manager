<template>
  <new-service-header page-default-back-link="/" :loading="loading" :homeButton="false">
    <ion-card>
      <ion-card-header>
        <ion-card-title>Vyberte existující VIN/SPZ<br> nebo přidejte nové auto</ion-card-title>
      </ion-card-header>
      <ion-searchbar v-model="newCarSPZ" @keyup="searchForInsertedValue('SPZ', $event.target.value)" @ionFocus="searchForInsertedValue('SPZ', $event.target.value)" @ionClear="addNewValue=false" placeholder="SPZ"></ion-searchbar>
      <ion-searchbar v-model="newCarVIN" @keyup="searchForInsertedValue('VIN', $event.target.value)" @ionFocus="searchForInsertedValue('VIN', $event.target.value)" @ionClear="addNewValue=false" placeholder="VIN"></ion-searchbar>
      <ion-list v-for="car in foundCarsByValue" :key="car.id">
        <ion-item @click="getCarByIdDetails(car.id)" v-show="showCarsList">
          <ion-label>
            <h2>VIN: {{ car.VIN }}</h2>
            <h2>SPZ: {{ car.SPZ }}</h2>
          </ion-label>
        </ion-item>
      </ion-list>
    </ion-card>
    <ion-button v-show="addNewValue" @click="createNewCar" expand="block" color="primary">Přidat nové auto</ion-button>
    <ion-card v-show="numberOfKmIsOpen">
      <ion-card-header>
        <ion-card-subtitle>Detail vozidla</ion-card-subtitle>
        <ion-card-subtitle>SPZ: {{ car.SPZ }}</ion-card-subtitle>
        <ion-card-subtitle>VIN: {{ car.VIN }}</ion-card-subtitle>
        <ion-card-title>Zadejte počet najetých KM</ion-card-title>
      </ion-card-header>
      <ion-searchbar placeholder="Počet KM" type="number" :search-icon="speedometerOutline" @keyup="storeKilometersInput($event.target.value)" @ionClear="clearKilometers" :value="lastKilometersValue"></ion-searchbar>
    </ion-card>
    <ion-button v-show="car.length !== 0" expand="block" color="primary" @click="setKilometers()">Dále</ion-button>
  </new-service-header>
</template>

<script>
import { speedometerOutline } from 'ionicons/icons';
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
      showCarsList: true,
      speedometerOutline,
      selectedKilometers: null,
      newCarSPZ: null,
      newCarVIN: null
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
      await this.clearKilometers()
      await this.$store.commit('CLEAR_CAR_BY_ID_STATE')
      await this.setLoading()
      this.numberOfKmIsOpen = false
      this.$store.dispatch('FIND_CAR_BY_VALUES', {
        vinOrSpz: record,
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
    },
    checkIfKilometersAreNull() {
      return this.selectedKilometers === null;
    },
    setKilometers() {
      if (this.checkIfKilometersAreNull()) {
        this.$store.dispatch('SET_KILOMETERS', this.kilometers)
      } else {
        this.$store.dispatch('SET_KILOMETERS', this.selectedKilometers)
      }
      this.$router.push('/service/new/driver/')
    },
    clearKilometers() {
      this.$store.commit('CLEAR_KILOMETERS')
      this.selectedKilometers = null
    },
    storeKilometersInput(km) {
      this.selectedKilometers = km
    },
    createNewCar() {
      const newCar = {
        SPZ: this.newCarSPZ,
        VIN: this.newCarVIN
      }
      this.$store.dispatch('CREATE_NEW_CAR', {
        car: newCar,
        token: this.userToken
      })
      console.log(newCar)
    }
  },
  created() {
    this.showCarsList = false
    if (this.car.length !== 0) {
      this.numberOfKmIsOpen = true
    }
  },
  computed: {
    ...mapGetters(['userToken', 'foundCarsByValue', 'car', 'kilometers']),
    lastKilometersValue() {
      return this.kilometers
    }
  }
}
</script>

<style scoped>

</style>