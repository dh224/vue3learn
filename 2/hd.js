const app = Vue.createApp({
    data() {
        return {
            name:"根组件-父亲"
        }
    },
    template:'<div>{{name}}  - <sss/> </div>'
})

app.component('sss',{
    data() {
        return {
            name:'sad'
        }
    },
    template:'<h2 style="background-color:red">{{name}}</h2>'
})

const vm =app.mount("#root")
