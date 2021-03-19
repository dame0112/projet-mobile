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
     <table class="table table-striped">
                <thead>
                    <tr>
                        <th>Name</th><br>
                        <th>Adresse</th><br>
                        <th>Etat</th><br>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="court in courts" :key="court.key">
                        <td>{{ court.name }}</td>
                        <td>{{ court.adresse }}</td>
                        <td>{{ court.etat }}</td>
                        <td>
                            <router-link :to="{name: 'edit', params: { id: court.key }}" class="btn btn-primary">Edit
                            </router-link>
                            <button @click.prevent="deleteCourt(court.key)" class="btn btn-danger">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
    </ion-content>
  </ion-page>

  <ion-list>
    <ion-item v-for="char in info" :key="char.id">
      <ion-label>
        {{ char.name }} - {{ char.adresse }}
      </ion-label>
    </ion-item>
  </ion-list>
</template>

<script>
import { db } from '../firebaseDb';

import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';

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
                    this.Courts.push({
                        key: doc.id,
                        name: doc.data().name,
                        adresse: doc.data().adresse,
                       etat: doc.data().etat
                    })
                });
            })
        },
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
      deleteCourt(id){
              if (window.confirm("Do you really want to delete?")) {
                db.collection("courts").doc(id).delete().then(() => {
                    console.log("Document deleted!");
                })
                .catch((error) => {
                    console.error(error);
                })
              }
            }
  }
}

</script>
