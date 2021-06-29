<template>
  <new-service-header page-default-back-link="/service/new/car" :loading="loading" :homeButton="true">
    <ion-card>
      <ion-card-header>
        <ion-card-title>Zadejte existující záznamy<br> nebo přidejte nové</ion-card-title>
        <ion-card-subtitle>Vozidlo: {{ car.SPZ }}</ion-card-subtitle>
        <ion-card-subtitle>{{ car.VIN }}</ion-card-subtitle>
      </ion-card-header>
      <ion-searchbar :search-icon="businessOutline" placeholder="Název firmy" type="text"></ion-searchbar>
      <ion-searchbar :search-icon="personOutline" placeholder="Řidič" type="text"></ion-searchbar>
      <ion-searchbar :search-icon="callOutline" placeholder="Telefon" type="number"></ion-searchbar>
      <ion-list>
        <ion-item>
          <ion-label>
            <h2></h2>
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
import { IonCard, IonCardTitle, IonCardHeader, IonSearchbar, IonList, IonItem, IonLabel, IonCardSubtitle } from '@ionic/vue';
export default {
  name: "FindOrCreateCar",
  data() {
    return {
      loading: false,
      businessOutline,
      personOutline,
      callOutline
    }
  },
  components: {NewServiceHeader, IonCard, IonCardTitle, IonCardHeader, IonSearchbar, IonList, IonItem, IonLabel, IonCardSubtitle },
  methods: {

  },
  computed: {
    ...mapGetters(['userToken', 'car']),
  }
}
</script>

<style scoped>

</style>