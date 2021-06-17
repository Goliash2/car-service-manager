<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Přihlášení do aplikace</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <form @submit.prevent="login">
        <ion-list>
          <ion-item>
            <ion-label position="floating">Username</ion-label>
            <ion-input type="text" required v-model="username"></ion-input>
          </ion-item>
          <ion-item>
            <ion-label position="floating">Heslo</ion-label>
            <ion-input type="password" required v-model="password"></ion-input>
          </ion-item>
        </ion-list>
        <ion-button type="submit" expand="block">Přihlásit</ion-button>
      </form>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, IonInput, IonButton, toastController } from '@ionic/vue';

export default  {
  name: 'Login',
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonList, IonItem, IonLabel, IonInput, IonButton },
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login() {
      const userCredentials = {
        username: this.username,
        password: this.password
      }
      this.$store.dispatch('userLogin', userCredentials)
        .then(response => {
          if (response === 200) {
            this.$router.replace('/')
          }
        }, error => {
          if (error) {
            this.openToast()
          }
        })
    },
    async openToast() {
      const toast = await toastController
          .create({
            message: 'Zadali jste špatný Username, nebo Heslo.',
            duration: 3000,
            color: 'warning'
          })
      return toast.present();
    },
  }
}
</script>
<style>

</style>
