<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button defaultHref="/"></ion-back-button>
        </ion-buttons>
        <ion-title>Nový servis</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-card>
        <ion-fab vertical="top" horizontal="end">
          <ion-fab-button @click="openNewCustomerModal">
            <ion-icon :icon="add"></ion-icon>
          </ion-fab-button>
        </ion-fab>
        <ion-card-header>
          <ion-card-subtitle>Zákazník</ion-card-subtitle>
          <ion-card-title>Vyber existujícího nebo<br> přidej nového zákazníka</ion-card-title>
        </ion-card-header>
        <ion-searchbar></ion-searchbar>

        <ion-card-content>
          This is content, without any paragraph or header tags,
          within an ion-card-content element.
        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonBackButton, IonButtons, IonCard, IonCardContent, IonCardTitle, IonCardHeader, IonCardSubtitle, IonSearchbar, IonFab, IonFabButton, IonIcon, modalController } from '@ionic/vue';
import {add} from "ionicons/icons";
import NewCustomer from "@/components/NewCustomer.vue";
import { defineComponent } from "vue";

export default defineComponent ({
  name: "NewService.vue",
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonBackButton, IonButtons, IonCard, IonCardContent, IonCardTitle, IonCardHeader, IonCardSubtitle, IonSearchbar, IonFab, IonFabButton, IonIcon },
  setup() {
    const openNewCustomerModal = async () => {
      const modal = await modalController.create({
        component: NewCustomer, //Modal is name of the component to render inside ionic modal
      });
      return modal.present();
    };

    return {
      add,
      openNewCustomerModal
    }
  }
});
</script>

<style scoped>

</style>
