<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>map</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">map</ion-title>
        </ion-toolbar>
      </ion-header>

       <form @submit.prevent="onUpdateForm">
                <div class="form-group">
                    <label>Name</label>
                    <input type="text" class="form-control" v-model="court.name" required>
                </div>

                <div class="form-group">
                    <label>adresse</label>
                    <input type="adresse" class="form-control" v-model="court.adresse" required>
                </div>

                <div class="form-group">
                    <label>etat</label>
                    <input type="text" class="form-control" v-model="court.etat" required>
                </div>

                <div class="form-group">
                    <button class="btn btn-primary btn-block">Add Court</button>
                </div>
            </form>
      
      <ExploreContainer name="map for differents courts" />
    </ion-content>
  </ion-page>
</template>

<script>
import { db } from '../firebaseDb';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';

export default  {
  name: 'map',
  components: { ExploreContainer, IonHeader, IonToolbar, IonTitle, IonContent, IonPage },
  data() {
            return {
                court: {
                }
            }
        },
        created() {
            let dbRef = db.collection('courts').doc(this.$route.params.id);
            dbRef.get().then((doc) => {
                this.court = doc.data();
            }).catch((error) => {
                console.log(error)
            })
        },
        methods: {
            onUpdateForm(event) {
                event.preventDefault()
                db.collection('courts').doc(this.$route.params.id)
                .update(this.court).then(() => {
                    console.log("Court successfully updated!");
                    this.$router.push('/list')
                }).catch((error) => {
                    console.log(error);
                });
            }
        }
}
</script>
