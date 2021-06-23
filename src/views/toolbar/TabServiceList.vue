<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Vozy v servisu</ion-title>
        <ion-spinner v-if="loading" slot="end"></ion-spinner>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-list>
        <tab-service-item
            :color="'success'"
            :icon="logOut"
            :title="'Hotové - možno předat majiteli'"
            :services="servicesDone"
        ></tab-service-item>
        <tab-service-item
            :color="'warning'"
            :icon="cog"
            :title="'Probíhají servisní práce'"
            :services="servicesInService"
        ></tab-service-item>
        <tab-service-item
            :color="'primary'"
            :icon="logIn"
            :title="'Ve frontě'"
            :services="servicesWaiting"
        ></tab-service-item>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonList, toastController, IonSpinner  } from '@ionic/vue';
import {cog, logIn, logOut} from "ionicons/icons";
import {mapGetters} from "vuex";
import TabServiceItem from "@/components/items/TabServiceItem";

export default  {
  name: 'TabCarList',
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonList, IonSpinner, TabServiceItem },
  data() {
    return {
     cog,
     logIn,
     logOut,
     loading: false
    }
  },
   async ionViewWillEnter() {
    await this.setLoading()
    this.$store.dispatch('GET_SERVICE_LIST', this.userToken)
    .then(response => {
      if (response === 200) {
        this.loading = false
      }
    }, error => {
      if (error) {
        this.loading = false
        this.openToast()
      }
    })
  },
  methods: {
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
    }
  },
  computed: {
    ...mapGetters(['services']),
    ...mapGetters(['userToken']),
    servicesDone() {
      return this.services.filter(service => service.service_status.id===3)
    },
    servicesInService() {
      return this.services.filter(service => service.service_status.id===2)
    },
    servicesWaiting() {
      return this.services.filter(service => service.service_status.id===1)
    }
  },
}
</script>

<style>
  ion-spinner {
    padding-right: 50px;
  }
</style>
