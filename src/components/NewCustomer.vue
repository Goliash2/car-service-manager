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
            <ion-input v-model="selectedCustomer.name"></ion-input>
          </ion-item>
        </ion-col>
        <ion-col size="6">
          <ion-item>
            <ion-label position="stacked">Příjmení</ion-label>
            <ion-input v-model="selectedCustomer.surname"></ion-input>
          </ion-item>
        </ion-col>
      </ion-row>
      <ion-item>
        <ion-label position="stacked">Telefon</ion-label>
        <ion-input v-model="selectedCustomer.phone"></ion-input>
      </ion-item>
      <ion-item>
        <ion-label position="stacked">Firma</ion-label>
        <ion-input v-model="selectedCustomer.company"></ion-input>
      </ion-item>

      <ion-button expand="block" class="ion-margin-top" @click="saveNewCustomer()">Přidat nového zákazníka</ion-button>

    </ion-content>
</template>

<script>
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
        name: '',
        surname: '',
        phone: '',
        company: ''
      }
    }
  },
  methods: {
    closeModal() {
      modalController.dismiss();
    },
    saveNewCustomer() {
      console.log(this.selectedCustomer);
    }
  }
});
</script>

<style scoped>

</style>
