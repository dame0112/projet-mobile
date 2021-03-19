<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>street_courts</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">street_courts</ion-title>
        </ion-toolbar>
      </ion-header>
    <div class="col-md-5">
           <center> <h3 class="text-center">Add ground</h3></center><br><br>
         <form @submit.prevent="onFormSubmit">
                <div class="form-group">
                    <center><label>Name</label></center>
                    <center><input type="text" class="form-control" v-model="court.name" required></center>
                </div><br>

                <div class="form-group">
                   <center> <label>adresse</label></center>
                  <center><input type="adresse" class="form-control" v-model="court.adresse" required></center>
                </div><br>

                <div class="form-group">
                    <center><label>etat</label></center>
                    <center><input type="text" class="form-control" v-model="court.etat" required></center>
                </div><br><br>

                <div class="form-group">
                   <center> <button class="btn btn-primary btn-block">Add ground</button></center>
                </div><br>
            </form>
    </div>

    </ion-content>
  </ion-page>
</template>

<script>
    import { db } from '../firebaseDb';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';


export default  {
   name: 'street_courts',
  components: {  IonHeader, IonToolbar, IonTitle, IonContent, IonPage },
    data() {
            return {
                court: {
                }
            }
        },
        methods: {
            onFormSubmit(event) {
                event.preventDefault()
                db.collection('courts').add(this.court).then(() => {
                    alert("Court successfully created!");
                    this.court.name = ''
                    this.court.adresse = ''
                    this.court.etat = ''
                }).catch((error) => {
                    console.log(error);
                });
            }
        }
    }


</script>
