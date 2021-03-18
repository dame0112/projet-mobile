<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>home</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">home</ion-title>
        </ion-toolbar>
      </ion-header>
    
      <ExploreContainer name="acceuil" />
    </ion-content>
  </ion-page>
</template>

<script>
import { db } from '../firebaseDb';

import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';

export default {
  name: 'home',
  ionViewWillEnter() {
    this.getinfo();
  },
  methods: {
    getinfo() {
      console.log("hello") ;
      db.collection("courts").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
        });
      });
    },

    components: {ExploreContainer, IonHeader, IonToolbar, IonTitle, IonContent, IonPage}

  }
}

</script>