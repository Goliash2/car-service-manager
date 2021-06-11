<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Vyhledávání aut</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-searchbar placeholder="Zadej SPZ, VIM nebo typ auta"></ion-searchbar>
      <ion-fab vertical="top" horizontal="end" slot="fixed">
        <ion-fab-button>
          <ion-icon :icon="camera"></ion-icon>
        </ion-fab-button>
      </ion-fab>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonSearchbar, IonIcon } from '@ionic/vue';
import {camera} from 'ionicons/icons';

export default  {
  name: 'TabSearch',
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonSearchbar, IonIcon },
  setup() {
    return {
      camera
    }
  }
}
</script>
