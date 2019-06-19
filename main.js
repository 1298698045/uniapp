import Vue from 'vue'
import App from './App'
import cuCustom from './colorui/components/cu-custom.vue'
import uniTag from './components/uni-tag/uni-tag.vue'
import uniCountdown from "@/components/uni-countdown/uni-countdown.vue"
import uniCard from "@/components/uni-card/uni-card.vue"
import calendar from "@/components/uni-calendar/uni-calendar"
import avatar from "@/components/yq-avatar/yq-avatar.vue";
Vue.component('cu-custom',cuCustom)
Vue.component('uni-tag',uniTag)
Vue.component('uni-countdown',uniCountdown)
Vue.component('uni-card',uniCard)
Vue.component('calendar',calendar)
Vue.component('avatar',avatar)

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
