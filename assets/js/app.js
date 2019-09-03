import SimpleCard from './components/SimpleCard.js'
// import Card  from './components/Card.js'
// import Alert from './components/Alert.js'
new Vue({
    el: "#app",
    components: {
        // Card,
        // Alert,
        SimpleCard
    },
    data: {
        lists:[],
        card:[]
    },
    methods:{
            addList(){
                const newList = {
                  name: '',
                  status: 'creating',
                  items:[]
                }
                this.lists.push(newList)
            }
        }
})