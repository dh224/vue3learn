const app = Vue.createApp({
    data() {
        return {
            name:"根组件-父亲",
            hd:"idd",
            event:'click',
            num:0,
            error:'',
            tip:''
        }
    },
    watch:{
        num(nv,ov){
            // console.log('新:' + nv + '旧:' + ov)
            this.error = nv ==0?'不能小于0': nv==10?'不能超过10':''
        }
    },
    methods: {
        asc(event){
            if(this.num <10){
                this.num++
            }
        },
        desc(){
            if(this.num >0){
                this.num--
            }
        }
    },
    computed:{
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
