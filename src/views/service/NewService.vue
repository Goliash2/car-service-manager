<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button defaultHref="/"></ion-back-button>
        </ion-buttons>
        <ion-title>Nový servis</ion-title>
        <ion-spinner v-if="loading" slot="end"></ion-spinner>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-card>
        <ion-fab vertical="top" horizontal="end">
          <ion-fab-button @click="openModal">
            <ion-icon :icon="add"></ion-icon>
          </ion-fab-button>
        </ion-fab>
        <ion-card-header>
          <ion-card-subtitle>Zákazník</ion-card-subtitle>
          <ion-card-title>Vyber existujícího nebo<br> přidej nového zákazníka</ion-card-title>
        </ion-card-header>
        <ion-searchbar @keyup="searchForInsertedRecord"></ion-searchbar>
        <ion-list v-for="customer in foundCustomers" :key="customer.id">
          <ion-item>{{ customer.name }} {{ customer.surname }}</ion-item>
        </ion-list>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonBackButton, IonButtons, IonCard, IonCardTitle, IonCardHeader, IonCardSubtitle, IonSearchbar, IonFab, IonFabButton, IonIcon, modalController, IonList, IonItem, IonSpinner } from '@ionic/vue';
import {add} from "ionicons/icons";
import { defineComponent } from "vue";
import NewCustomer from "@/components/NewCustomer";
import {mapGetters} from "vuex";

export default defineComponent ({
  name: "NewService.vue",
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonBackButton, IonButtons, IonCard, IonCardTitle, IonCardHeader, IonCardSubtitle, IonSearchbar, IonFab, IonFabButton, IonIcon, IonList, IonItem, IonSpinner },
  data() {
    return {
      add,
      loading: false
    }
  },
  methods: {
    async openModal() {
      const modal = await modalController
        .create({
          component: NewCustomer
        });
      return modal.present();
    },
    setLoading() {
      this.loading = true
    },
    async searchForInsertedRecord(event) {
      await this.setLoading()
      const selectedValue = event.target.value
      this.$store.dispatch('FIND_CUSTOMER', {
        record: selectedValue,
        token: this.userToken
      })
      .then(response => {
        if (response) {
          this.loading = false
        }
      }, error => {
        if (error) {
          this.loading = false
          console.log('error')
        }
      })
    }
  },
  ionViewWillEnter() {
    this.$store.dispatch('FIND_CUSTOMER', {
      record: '',
      token: this.userToken
    })
  },
  computed: {
  ...mapGetters(['userToken', 'foundCustomers']),
  }
  // setup() {
  //   const openNewCustomerModal = async () => {
  //     const modal = await modalController.create({
  //       component: NewCustomer, //Modal is name of the component to render inside ionic modal
  //     });
  //     return modal.present();
  //   };
  //
  //   return {
  //     add,
  //     openNewCustomerModal
  //   }
  // }
});
</script>

<style scoped>

</style>
