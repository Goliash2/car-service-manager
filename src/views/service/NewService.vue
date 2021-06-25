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
          <ion-fab-button @click="openModalNewService">
            <ion-icon :icon="add"></ion-icon>
          </ion-fab-button>
        </ion-fab>
        <ion-card-header>
          <ion-card-subtitle>Zákazník</ion-card-subtitle>
          <ion-card-title>Vyber existujícího nebo<br> přidej nového zákazníka</ion-card-title>
        </ion-card-header>
        <ion-searchbar @keyup="searchForInsertedRecord"></ion-searchbar>
        <ion-list v-for="customer in foundCustomers" :key="customer.id">
          <ion-item>
            <ion-buttons slot="end">
              <ion-button @click="openModalCustomerDetails(customer.id)">detail</ion-button>
            </ion-buttons>
            <ion-label>
              <h2>{{ customer.name }} {{ customer.surname }}</h2>
              <h3>{{ customer.companies[0].name }}</h3>
            </ion-label>
          </ion-item>
        </ion-list>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonBackButton, IonButtons, IonCard, IonCardTitle, IonCardHeader, IonCardSubtitle, IonSearchbar, IonFab, IonFabButton, IonIcon, modalController, IonList, IonItem, IonLabel, IonSpinner, toastController, IonButton } from '@ionic/vue';
import {add} from "ionicons/icons";
import { defineComponent } from "vue";
import NewCustomer from "@/components/modals/NewCustomer";
import CustomerDetails from "@/components/modals/CustomerDetails";
import {mapGetters} from "vuex";

export default defineComponent ({
  name: "NewService.vue",
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonBackButton, IonButtons, IonCard, IonCardTitle, IonCardHeader, IonCardSubtitle, IonSearchbar, IonFab, IonFabButton, IonIcon, IonList, IonItem, IonLabel, IonSpinner, IonButton },
  data() {
    return {
      add,
      loading: false
    }
  },
  methods: {
    async openModalNewService() {
      const modal = await modalController
        .create({
          component: NewCustomer
        });
      return modal.present();
    },
    async openModalCustomerDetails(customerId) {
      const modal = await modalController
          .create({
            component: CustomerDetails,
            componentProps: {
              customerId: customerId
            }
          });
      return modal.present();
    },
    setLoading() {
      this.loading = true
    },
    async openToast() {
      const toast = await toastController
          .create({
            message: 'Data nebyla úspěšně načtena.',
            duration: 3000,
            color: 'danger'
          })
      return toast.present();
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
          this.openToast()
        }
      })
    }
  },
  async ionViewWillEnter() {
    await this.setLoading()
    this.$store.dispatch('FIND_CUSTOMER', {
      record: '',
      token: this.userToken
    })
    .then(response => {
      if (response) {
        this.loading = false
      }
    }, error => {
      if (error) {
        this.loading = false
        this.openToast()
      }
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
