const vm = Vue.createApp({
    data() {
        return {
            lessons:window.lessons
        }
    },
})
vm.mount("#root")