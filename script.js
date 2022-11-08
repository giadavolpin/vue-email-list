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
       
        for(let i = 0; i<10; i++ ){
            this.mails;
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((result)=>{
                console.log(result.data.response);
                this.mails.push(result.data.response);
            })
        }
       
    }


});
app.mount('#app'); 