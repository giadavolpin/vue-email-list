const {createApp} = Vue;
const app = createApp({
    data(){
        return{

        }
    }, methods: {

    },
    computed: {

    },
    mounted(){
        console.log();
    },
    created(){
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((response)=>{})
        console.log(response.data);
        this.mail = response.data;
    }


}) 