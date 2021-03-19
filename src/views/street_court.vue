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

         <form @submit.prevent="onFormSubmit">
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
      
      <ExploreContainer name="differents street courts :" />
    </ion-content>
  </ion-page>
</template>

<script>
    import { db } from '../firebaseDb';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';

export default  {
   name: 'street_courts',
  components: { ExploreContainer, IonHeader, IonToolbar, IonTitle, IonContent, IonPage },
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
