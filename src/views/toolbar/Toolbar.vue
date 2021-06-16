<template>
  <ion-page>
    <ion-tabs>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="dashboard" href="/tabs/dashboard">
          <ion-icon :icon="apps" />
          <ion-label>Přehled</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="list" href="/tabs/list">
          <ion-icon :icon="list" />
          <ion-label>V servisu</ion-label>
        </ion-tab-button>

        <ion-tab-button href="/service/new">
          <ion-icon :icon="add" />
          <ion-label>Nový servis</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="search" href="/tabs/search">
          <ion-icon :icon="search" />
          <ion-label>Hledat auto</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="other" href="/tabs/other">
          <ion-icon :icon="ellipsisHorizontal" />
          <ion-label>Další</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
    <ion-fab vertical="bottom" horizontal="center" slot="fixed" edge="false">
      <ion-fab-button  @click="this.$router.push('/service/new')" class="ion-margin-bottom">
        <ion-icon :icon="add"></ion-icon>
      </ion-fab-button>
    </ion-fab>
  </ion-page>
</template>

<script>
import {IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonFab, IonFabButton} from '@ionic/vue';
import { add, list, search, ellipsisHorizontal, apps } from 'ionicons/icons';

export default {
  name: 'Tabs',
  components: { IonLabel, IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage, IonFab, IonFabButton },
  data() {
    return {
      add,
      list,
      search,
      ellipsisHorizontal,
      apps
    }
  }
}
</script>
