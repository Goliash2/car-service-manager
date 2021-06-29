<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button :default-href="pageDefaultBackLink"></ion-back-button>
        </ion-buttons>
        <ion-buttons slot="end" v-show="homeButton">
          <ion-back-button default-href="/" :icon="homeOutline" text=""></ion-back-button>
        </ion-buttons>
        <ion-title>Nový servis</ion-title>
        <ion-spinner v-if="loading" slot="end"></ion-spinner>
        <ion-buttons slot="end">
          <slot name="actions-end"></slot>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <slot></slot>
    </ion-content>
  </ion-page>
</template>

<script>
import { homeOutline } from 'ionicons/icons';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonBackButton, IonButtons, IonSpinner } from '@ionic/vue'
export default {
name: "NewServiceHeader",
  components: { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonBackButton, IonButtons, IonSpinner},
  props: ['pageDefaultBackLink', 'loading', 'homeButton'],
  data() {
    return {
      homeOutline
    }
  },
  methods: {

  }
}
</script>

<style scoped>

</style>