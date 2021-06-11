<template>
    <ion-header>
      <ion-toolbar>
        <ion-title>Nový zákazník</ion-title>
        <ion-buttons slot="end">
          <ion-button @click="closeModal()">Zavřít</ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content fullscreen class="ion-padding">
      <ion-row>
        <ion-col size="6">
          <ion-item>
            <ion-label position="stacked">Jméno</ion-label>
            <ion-input v-model="selectedCustomer.jmeno"></ion-input>
          </ion-item>
        </ion-col>
        <ion-col size="6">
          <ion-item>
            <ion-label position="stacked">Příjmení</ion-label>
            <ion-input v-model="selectedCustomer.prijmeni"></ion-input>
          </ion-item>
        </ion-col>
      </ion-row>
      <ion-item>
        <ion-label position="stacked">Telefon</ion-label>
        <ion-input v-model="selectedCustomer.telefon"></ion-input>
      </ion-item>
      <ion-item>
        <ion-label position="stacked">Firma</ion-label>
        <ion-input v-model="selectedCustomer.firma"></ion-input>
      </ion-item>

      <ion-button expand="block" class="ion-margin-top" @click="saveNewCustomer()">Přidat nového zákazníka</ion-button>

    </ion-content>
</template>

<script lang="ts">
import {
  // IonPage,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  modalController,
  IonButton,
  IonButtons,
  IonRow,
  IonCol,
  IonLabel,
  IonInput,
  IonItem
} from "@ionic/vue";

interface Customer {
  jmeno?: string;
  prijmeni?: string;
  telefon?: string;
  firma?: string;
}

import { defineComponent } from "vue";

export default defineComponent ({
  name: "NewCustomer",
  components: {
    // IonPage,
    IonContent, IonHeader, IonTitle, IonToolbar,
    IonButton,
    IonButtons,
    IonRow,
    IonCol,
    IonLabel,
    IonInput,
    IonItem
  },
  data () {
    return {
      selectedCustomer: {
        type: Object as() => Customer
      }
    }
  },
  setup() {
    const closeModal = () => {
      modalController.dismiss();
    };

    const saveNewCustomer = () => {
      // console.log(this.selectedCustomer);
    }

    return {closeModal, saveNewCustomer};
  },
});
</script>

<style scoped>

</style>
