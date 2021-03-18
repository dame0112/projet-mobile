<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>street courts</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">street courts</ion-title>
        </ion-toolbar>
      </ion-header>
      
      <ExploreContainer name="differents street terrains :" />
    </ion-content>
    <!-- List of different courts -->
  <ion-list>
    <ion-item>
      <ion-label>terrain de meylan</ion-label>
    </ion-item>
    <ion-item>
      <ion-label>terrain de echirolle</ion-label>
    </ion-item>
    <ion-item>
      <ion-label>terrain du campus</ion-label>
    </ion-item>
    <ion-item>
      <ion-label>terrain de victor hugo</ion-label>
    </ion-item>
    <ion-item>
      <ion-label>terrain de epsi</ion-label>
    </ion-item>
  </ion-list>

  <!-- List of details Items -->
  <ion-list>
    <ion-item>
      <ion-label>recherche de terrain</ion-label>
      <ion-input></ion-input>
    </ion-item>
    <ion-item>
      <ion-label>activer la localisation</ion-label>
      <ion-toggle slot="end"></ion-toggle>
    </ion-item>
    <ion-item>
      <ion-label>alerter en cas de nouveau terrain</ion-label>
      <ion-radio slot="end"></ion-radio>
    </ion-item>
    <ion-item>
      <ion-label>Checkbox</ion-label>
      <ion-checkbox slot="start"></ion-checkbox>
    </ion-item>
  </ion-list>

  <!-- List of Sliding Items -->
  <ion-list>
    <ion-item-sliding>
      <ion-item>
        <ion-label>Item</ion-label>
      </ion-item>
      <ion-item-options side="end">
        <ion-item-option @click="unread(item)">Unread</ion-item-option>
      </ion-item-options>
    </ion-item-sliding>

    <ion-item-sliding>
      <ion-item>
        <ion-label>Item</ion-label>
      </ion-item>
      <ion-item-options side="end">
        <ion-item-option @click="unread(item)">Unread</ion-item-option>
      </ion-item-options>
    </ion-item-sliding>
  </ion-list>
  </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';

export default  {
  name: 'street_courts',
  components: { ExploreContainer, IonHeader, IonToolbar, IonTitle, IonContent, IonPage }
}
</script>