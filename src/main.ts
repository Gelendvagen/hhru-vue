import './assets/main.css'
import 'primevue/resources/themes/saga-blue/theme.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'

import { initializeApp } from "firebase/app";

import Button from 'primevue/button'
import Menubar from 'primevue/menubar'
import InputText from 'primevue/inputtext'
import Toast from 'primevue/toast'
import Tooltip from 'primevue/tooltip'

import ProgressSpinner from 'primevue/ProgressSpinner'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import ConfirmDialog from 'primevue/confirmdialog'
import InlineMessage from 'primevue/inlinemessage'
import InputNumber from 'primevue/inputnumber'
import Textarea from 'primevue/textarea'
import Calendar from 'primevue/calendar'
import Radio from 'primevue/radiobutton'
import Badge from 'primevue/badge'
import Chart from 'primevue/chart'
import Card from 'primevue/card'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'
import ToastService from 'primevue/toastservice'
import ConfirmationService from 'primevue/confirmationservice'

import App from './App.vue'
import router from './router'

const firebaseConfig = {
  apiKey: "AIzaSyDvU1Dxi9yvYB41dbWWnWjJG1lr8Wu-H54",
  authDomain: "hh-interview-d9beb.firebaseapp.com",
  projectId: "hh-interview-d9beb",
  storageBucket: "hh-interview-d9beb.firebasestorage.app",
  messagingSenderId: "22984298857",
  appId: "1:22984298857:web:99535489a675126df22df8"
};

initializeApp(firebaseConfig);

const app = createApp(App)

app.use(ToastService)
app.use(ConfirmationService)
app.use(createPinia())
app.use(router)
app.use(PrimeVue)
app.directive('tooltip', Tooltip)
app.component('app-menubar', Menubar)
app.component('app-button', Button)
app.component('app-input-text', InputText)
app.component('app-toast', Toast)
app.component('app-progress', ProgressSpinner)
app.component('app-datatable', DataTable)
app.component('app-column', Column)
app.component('app-dialog', ConfirmDialog)
app.component('app-message', InlineMessage)
app.component('app-input-number', InputNumber)
app.component('app-textarea', Textarea)
app.component('app-calendar', Calendar)
app.component('app-radio', Radio)
app.component('app-badge', Badge)
app.component('app-chart', Chart)
app.component('app-card', Card)

app.mount('#app')