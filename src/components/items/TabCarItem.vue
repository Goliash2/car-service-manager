<template>
  <ion-item-divider :color="color">
    <ion-icon :icon="icon" />
    <ion-label class="ion-margin-start">
      {{ title }}
    </ion-label>
  </ion-item-divider>
  <ion-item-sliding v-for="service in services" :key="service.car.SPZ">
    <ion-item>
      <ion-thumbnail slot="start">
        <img alt="foto" :src="service.car.photos[0].url">
      </ion-thumbnail>
      <ion-label>
        <h2>{{ service.car.SPZ }}</h2>
        <h3>{{ service.car.model }}</h3>
        <p>{{ service.description }}</p>
      </ion-label>
    </ion-item>
    <ion-item-options side="end">
      <ion-item-option color="success">Předat<br>majiteli</ion-item-option>
      <ion-item-option color="warning">Vrátit do<br>servisu</ion-item-option>
    </ion-item-options>
  </ion-item-sliding>
</template>

<script>
import { IonItem, IonThumbnail, IonLabel, IonItemDivider, IonItemSliding, IonItemOption, IonItemOptions, IonIcon } from '@ionic/vue';
export default {
name: "TabCarItem",
  components: {
    IonItem, IonThumbnail, IonLabel, IonItemDivider, IonItemSliding, IonItemOption, IonItemOptions, IonIcon
  },
  props: ['color', 'icon', 'title' ,'services']
}
</script>

<style scoped>

</style>