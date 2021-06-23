<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button defaultHref="/"></ion-back-button>
        </ion-buttons>
        <ion-title>{{ car.SPZ }}</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-card>
        <ion-card-header>
          <ion-card-subtitle>{{ car.SPZ }}</ion-card-subtitle>
          <ion-card-title>{{ car.Model }}</ion-card-title>
        </ion-card-header>
        <ion-card-content>
          VIN: {{ car.VIN }}
        </ion-card-content>
      </ion-card>

      <template v-if="car.services && car.services.some(service => service['service_status']!==4)">
        <template v-for="service in car.services" :key="service.id">
          <ion-card v-if="service['service_status']!==4" color="success">
            <ion-card-header>
              <ion-card-subtitle>Aktuální servis</ion-card-subtitle>
            </ion-card-header>
            <ion-card-content>
              {{ service['demanded_service'] }}<br>
              zadáno: {{ service['created_at'] }}
            </ion-card-content>
          </ion-card>
        </template>
      </template>
      <template v-if="car.services && car.services.some(service => service['service_status']===4)">
        <ion-item-divider color="primary">
          <ion-icon :icon="timeOutline" />
          <ion-label class="ion-margin-start">
            Historie servisních prací
          </ion-label>
        </ion-item-divider>
        <template v-for="service in car.services" :key="service.id">
          <ion-item v-if="service['service_status']===4">
            <ion-label>
              <h2>Požadavek: {{ service['demanded_service'] }}</h2>
              <h3>Provedeno: {{ service['service_report'] }}</h3>
              <p>{{ service['service_finished'] }}</p>
            </ion-label>
          </ion-item>
        </template>
      </template>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonBackButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCardSubtitle, IonItem, IonLabel, IonItemDivider, IonIcon } from '@ionic/vue';
import {timeOutline} from "ionicons/icons";
export default {
  name: "CarDetailsItem",
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonBackButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCardSubtitle, IonItem, IonLabel, IonItemDivider, IonIcon },
  props: ['car'],
  created() {
    console.log(this.car)
  },
  data() {
    return {
      timeOutline
    }
  }
}
</script>

<style scoped>

</style>
