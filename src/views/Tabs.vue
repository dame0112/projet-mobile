<template>
  <ion-page>
    <ion-tabs>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="home" href="/tabs/home">
          <ion-icon :icon="triangle" />
          <ion-label>home</ion-label>
        </ion-tab-button>
          
        <ion-tab-button tab="street_courts" href="/tabs/street_courts">
          <ion-icon :icon="ellipse" />
          <ion-label>street_courts</ion-label>
        </ion-tab-button>
        
        <ion-tab-button tab="map" href="/tabs/map">
          <ion-icon :icon="square" />
          <ion-label>map</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script>
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage } from '@ionic/vue';
import { ellipse, square, triangle } from 'ionicons/icons';

export default {
  name: 'Tabs',
  components: { IonLabel, IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage },
  setup() {
    return {
      ellipse, 
      square, 
      triangle,
    }
  }
}
</script>
