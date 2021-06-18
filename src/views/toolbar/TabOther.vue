<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Další</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Další</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-button @click="logout">Odhlásit</ion-button>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/vue';

export default  {
  name: 'TabOther',
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonButton },
  methods: {
    logout() {
      this.$store.dispatch('userLogout')
    }
  }
}
</script>
