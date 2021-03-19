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
      <ion-header>
      </ion-header>

          <ion-list>

         <ion-item v-for="court in courts" :key="court.key">

           <ion-label>
             {{ court.name }} <br> {{ court.adresse }} . {{ court.etat }}
           </ion-label>
           <button @click="$router.push('/tabs/CourtEdit/' + court.key)" class="btn btn-danger">edit</button>
           <button @click.prevent="deleteCourt(court.key)" class="btn btn-danger">Delete</button>
         </ion-item>

      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script>


import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import { db } from '../firebaseDb';

export default {
  name: 'home',
  components: {
              IonHeader,
              IonToolbar,
              IonTitle,
              IonContent,
              IonPage},
    data() {
            return {
                courts: []
            }
        },


        created() {
            db.collection('courts').onSnapshot((snapshotChange) => {
                this.Courts = [];
                snapshotChange.forEach((doc) => {
                    this.courts.push({
                        key: doc.id,
                        name: doc.data().name,
                        adresse: doc.data().adresse,
                       etat: doc.data().etat
                    })
                });
            })
        },
          ionViewWillEnter() {
            this.court = [];
            this.getcourt();
  },
  methods: {
    getcourt() {
      console.log("hello") ;
      db.collection("courts").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
           this.court.push({
            key: doc.id,
            name: doc.data().name,
            adresse: doc.data().adresse,
            etat: doc.data().etat,
               })
        });
      });
    },
      deleteCourt(id){
              if (window.confirm("Do you really want to delete?")) {
                db.collection("courts").doc(id).delete().then(() => {
                    console.log("Document deleted!");
                    this.$router.push('/');
                })
                .catch((error) => {
                    console.error(error);
                })
              }
            }
  }
}

</script>
