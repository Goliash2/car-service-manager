<template>
  <div id="container">
    <ion-list>
      <ion-item-divider color="success">
        <ion-icon :icon="logOut" />
        <ion-label class="ion-margin-start">
          Hotové - možno předat majiteli
        </ion-label>
      </ion-item-divider>
      <ion-item-sliding>
        <ion-item>
          <ion-thumbnail slot="start">
            <img alt="foto" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Frontansicht_Renault_Talisman_Grandtour.jpg/1024px-Frontansicht_Renault_Talisman_Grandtour.jpg">
          </ion-thumbnail>
          <ion-label>
            <h2>4A3 58E8</h2>
            <h3>Renault Talisman</h3>
            <p>Vyměněna kola, provedeno plnění klimatizace</p>
          </ion-label>
        </ion-item>
        <ion-item-options side="end">
          <ion-item-option color="success">Předat<br>majiteli</ion-item-option>
          <ion-item-option color="warning">Vrátit do<br>servisu</ion-item-option>
        </ion-item-options>
      </ion-item-sliding>

      <ion-item-divider color="warning">
        <ion-icon :icon="cog" />
        <ion-label class="ion-margin-start">
          Probíhají servisní práce
        </ion-label>
      </ion-item-divider>
      <ion-item-sliding>
        <ion-item>
          <ion-thumbnail slot="start">
            <img alt="foto" src="https://upload.wikimedia.org/wikipedia/commons/3/37/Skoda_Octavia_Combi_rear_20071125.jpg">
          </ion-thumbnail>
          <ion-label>
            <h2>5S9 65C1</h2>
            <h3>Škoda Octavia Combi</h3>
            <p>Nefunkční zadní stěrač, výměna brzdových destiček</p>
          </ion-label>
        </ion-item>
        <ion-item-options side="end">
          <ion-item-option color="success">Servis<br>dokončen</ion-item-option>
          <ion-item-option>Vrátit do<br>fronty</ion-item-option>
        </ion-item-options>
      </ion-item-sliding>

      <ion-item-divider color="primary">
        <ion-icon :icon="logIn" />
        <ion-label class="ion-margin-start">
          Ve frontě
        </ion-label>
      </ion-item-divider>
      <ion-item-sliding>
        <ion-item>
          <ion-thumbnail slot="start">
            <img alt="foto" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Skoda_Roomster_rear_20080612.jpg/1280px-Skoda_Roomster_rear_20080612.jpg">
          </ion-thumbnail>
          <ion-label>
            <h2>9A3 2189</h2>
            <h3>Škoda Roomster</h3>
            <p>Čištění interiéru</p>
          </ion-label>
        </ion-item>
        <ion-item-options side="end">

        </ion-item-options>
      </ion-item-sliding>
      <ion-item-sliding>
        <ion-item>
          <ion-thumbnail slot="start">
            <img alt="foto" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/VW_Golf_7_Blue_%2811049760544%29.jpg/1920px-VW_Golf_7_Blue_%2811049760544%29.jpg">
          </ion-thumbnail>
          <ion-label>
            <h2>7E4 8567</h2>
            <h3>VW Golf 7</h3>
            <p>Nesvítí pravý blinkr vzadu, kontrola elektroniky</p>
          </ion-label>
        </ion-item>
        <ion-item-options side="end">
          <ion-item-option color="warning">Zahájit<br>servis</ion-item-option>
        </ion-item-options>
      </ion-item-sliding>
    </ion-list>
  </div>
</template>

<script>
import {IonList, IonItem, IonThumbnail, IonLabel, IonItemDivider, IonItemSliding, IonItemOption, IonItemOptions, IonIcon} from '@ionic/vue';
import {logIn, logOut, cog} from 'ionicons/icons';

export default {
  name: "ServiceListContainer",
  components: { IonList, IonItem, IonThumbnail, IonLabel, IonItemDivider, IonItemSliding, IonItemOption, IonItemOptions, IonIcon},
  setup() {
    return {
      logIn,
      logOut,
      cog
    }
  }
}
</script>

<style scoped>

</style>
