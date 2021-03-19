<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>update</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
         <ion-title size="large">update</ion-title>
        </ion-toolbar>
      </ion-header>

    <br>  <div class="col-md-5">
            <center><h3 class="text-center">Update ground</h3></center><br>
            <form @submit.prevent="onUpdateForm">
                <div class="form-group">
                  <center> <label>Name</label></center>
                   <center><input type="text" class="form-control" v-model="court.name" required></center>
                </div><br>

                <div class="form-group">
                   <center><label>adresse</label></center>
                    <center><input type="adresse" class="form-control" v-model="court.adresse" required></center>
                </div><br>

                <div class="form-group">
                    <center><label>etat</label></center>
                    <center><input type="text" class="form-control" v-model="court.etat" required></center>
                </div><br><br>

                <div class="form-group">
                    <center><button class="btn btn-primary btn-block">update</button></center>
                </div>
            </form>
        </div>

    </ion-content>
  </ion-page>
</template>

<script>
import { db } from '../firebaseDb';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';


export default  {
  name: 'map',
  components: {  IonHeader, IonToolbar, IonTitle, IonContent, IonPage },
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
                console
              console.log();
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
