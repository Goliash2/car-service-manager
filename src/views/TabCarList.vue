<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Vozy v servisu</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-list>
        <tab-car-item
            :color="'success'"
            :icon="logOut"
            :title="'Hotové - možno předat majiteli'"
            :services="servicesDone"
        ></tab-car-item>
        <tab-car-item
            :color="'warning'"
            :icon="cog"
            :title="'Probíhají servisní práce'"
            :services="servicesInService"
        ></tab-car-item>
        <tab-car-item
            :color="'primary'"
            :icon="logIn"
            :title="'Ve frontě'"
            :services="servicesWaiting"
        ></tab-car-item>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonList } from '@ionic/vue';
import {cog, logIn, logOut} from "ionicons/icons";
import {mapGetters} from "vuex";
import TabCarItem from "@/components/items/TabCarItem";

export default  {
  name: 'TabCarList',
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonList, TabCarItem },
  data() {
    return {
     cog,
     logIn,
     logOut
    }
  },
  computed: {
    ...mapGetters(['service']),
    servicesDone() {
      return this.service.filter(service => service.serviceStatus==='done')
    },
    servicesInService() {
      return this.service.filter(service => service.serviceStatus==='service')
    },
    servicesWaiting() {
      return this.service.filter(service => service.serviceStatus==='waiting')
    }
  },
}
</script>
