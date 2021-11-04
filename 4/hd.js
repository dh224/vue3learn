const app = Vue.createApp({
    data() {
        return {
            name:"根组件-父亲",
            hd:"idd",
            event:'click',
            num:0,
            tip:''
        }
    },
    methods: {
        asc(event){
            this.error = '提示：'
            if(this.num <10){
                this.num++
            }
        },
        desc(){
            this.error = '提示:'
            if(this.num >0){
                this.num--
            }
        }
    },
    computed:{
        error:{
            get(){
                var message;
                if(this.num == 0){
                    message ='不能小于0'
                }else if( this.num == 10){
                    message ='不能大于10'
                }    
                if(message){
                    return this.tip+=message
                }
            },
            set(tip){
                this.tip =tip
            }
        }
    }
})

setTimeout(()=>{
    vm.$data.name = "new name"
}, 3000 )

// app.component('sss',{
//     data() {
//         return {
//             name:'sad'
//         }
//     },
//     template:'<h2 style="background-color:red">{{name}}</h2>'
// })

const vm =app.mount("#root")
