const {createApp} = Vue;
const app = createApp({
    data(){
        return{
            mails: []
        }
    }, methods: {

    },
    computed: {

    },
    mounted(){
        console.log();
    },
    created(){
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((element)=>{
            console.log(element.data.response);
            this.mails.push(element.data.response);
        })
       
    }


});
app.mount('#app'); 