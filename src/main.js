import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import firebase from 'firebase';

Vue.config.productionTip = false

 // Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "AIzaSyC8PDnFaY6SA_Yg7926JjL9OZqKqoz1u0g",
  authDomain: "myportfolio-f8227.firebaseapp.com",
  databaseURL: "https://myportfolio-f8227.firebaseio.com",
  projectId: "myportfolio-f8227",
  storageBucket: "myportfolio-f8227.appspot.com",
  messagingSenderId: "777717311069",
  appId: "1:777717311069:web:f1885e0379b9184990cfb4"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
