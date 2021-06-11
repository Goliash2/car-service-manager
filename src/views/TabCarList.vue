<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Vozy v servisu</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-list>
        <ion-item-divider color="success">
          <ion-icon :icon="logOut" />
          <ion-label class="ion-margin-start">
            Hotové - možno předat majiteli
          </ion-label>
        </ion-item-divider>
        <ion-item-sliding v-for="service in servicesDone" :key="service.car.SPZ">
          <ion-item>
            <ion-thumbnail slot="start">
              <img alt="foto" :src="service.car.photos[0].url">
            </ion-thumbnail>
            <ion-label>
              <h2>{{ service.car.SPZ }}</h2>
              <h3>{{ service.car.model }}</h3>
              <p>{{ service.description }}</p>
            </ion-label>
          </ion-item>
          <ion-item-options side="end">
            <ion-item-option color="success">Předat<br>majiteli</ion-item-option>
            <ion-item-option color="warning">Vrátit do<br>servisu</ion-item-option>
          </ion-item-options>
        </ion-item-sliding>

        <ion-item-divider color="warning">
          <ion-icon :icon="cog" />
          <ion-label class="ion-margin-start">
            Probíhají servisní práce
          </ion-label>
        </ion-item-divider>
        <ion-item-sliding v-for="service in servicesInService" :key="service.car.SPZ">
          <ion-item>
            <ion-thumbnail slot="start">
              <img alt="foto" :src="service.car.photos[0].url">
            </ion-thumbnail>
            <ion-label>
              <h2>{{ service.car.SPZ }}</h2>
              <h3>{{ service.car.model }}</h3>
              <p>{{ service.description }}</p>
            </ion-label>
          </ion-item>
          <ion-item-options side="end">
            <ion-item-option color="success">Předat<br>majiteli</ion-item-option>
            <ion-item-option color="warning">Vrátit do<br>servisu</ion-item-option>
          </ion-item-options>
        </ion-item-sliding>

        <ion-item-divider color="primary">
          <ion-icon :icon="logIn" />
          <ion-label class="ion-margin-start">
            Ve frontě
          </ion-label>
        </ion-item-divider>
        <ion-item-sliding v-for="service in servicesWaiting" :key="service.car.SPZ">
          <ion-item>
            <ion-thumbnail slot="start">
              <img alt="foto" :src="service.car.photos[0].url">
            </ion-thumbnail>
            <ion-label>
              <h2>{{ service.car.SPZ }}</h2>
              <h3>{{ service.car.model }}</h3>
              <p>{{ service.description }}</p>
            </ion-label>
          </ion-item>
          <ion-item-options side="end">
            <ion-item-option color="success">Předat<br>majiteli</ion-item-option>
            <ion-item-option color="warning">Vrátit do<br>servisu</ion-item-option>
          </ion-item-options>
        </ion-item-sliding>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonThumbnail, IonLabel, IonItemDivider, IonItemSliding, IonItemOption, IonItemOptions, IonIcon } from '@ionic/vue';
import {cog, logIn, logOut} from "ionicons/icons";
import { useStore, Service} from "@/store/store";

export default  {
  name: 'TabCarList',
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonList, IonItem, IonThumbnail, IonLabel, IonItemDivider, IonItemSliding, IonItemOption, IonItemOptions, IonIcon },
  setup() {
    const store = useStore();

    const services: Service[] = store.state.service;

    const servicesDone = services.filter(service => service.serviceStatus==='done')
    const servicesInService = services.filter(service => service.serviceStatus==='service')
    const servicesWaiting = services.filter(service => service.serviceStatus==='waiting')

    return {
      logIn,
      logOut,
      cog,
      services,
      servicesDone,
      servicesInService,
      servicesWaiting
    }
  }
}
</script>
