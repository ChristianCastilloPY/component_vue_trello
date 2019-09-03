export default {
    template: `<div class="card" style="width: 18rem;" v-if="activo">

            <div class="card-header">
                <div class="d-flex justify-content-between">
                    {{name}}
                    <button v-if="status == 'saved'" class="btn btn-sm btn-warning"
                    @click="removeList(index)">
                        Eliminar
                    </button>
                    <button v-if="status == 'creating'" class="btn btn-sm btn-danger"
                    @click="removeList(index)">
                        Cancelar
                    </button>
                </div>
            </div>

            <div class="card-body">

            <!-- FORMULARIO,PLACEHOLDER & GUARDAR LISTA-->
                <form @submit.prevent="saveList()" action="/">
                    <div class="form-group" v-if="status == 'creating'">
                        <input class="form-control" 
                        placeholder="Nombre de la lista" v-model="name">
                    </div>
                    <button v-if="status == 'creating'"
                     class="btn btn-primary btn-block">
                        Guardar Lista
                    </button>
            <!-- FORMULARIO,PLACEHOLDER & AGREGAR ITEM -->

            <div class="form-group d-flex justify-content-between" 
            v-for="(item,indice) in items" :key="indice">
                <input 
                    class="form-control"
                    placeholder="descripcion del item"
            >
            <button v-if="status == 'saved'"
             class="ml-3 col-4 form-control btn btn-sm btn-danger"
              @click="removeitem(indice)" >
                Eliminar
            </button>
            </div>

            <button v-if="status == 'saved'" 
                class="btn btn-sucess btn-block btn-success" @click="additems()">
                    Agregar item
            </button>

                </form>
            </div>

        </div>`,
    props: ['index'],
    data: function(){
        return{
            name:null,
            status:'creating' ,
            items:[],
            activo:true
        }
    },
    methods:{
        saveList:function(){
            this.status='saved'
        },
        additems:function(){
            const newItem = {
                title: '' 
            }
            this.items.push(newItem)
        },
        removeitem:function(indice){
            this.items.splice(indice,1)
        },
        removeList:function(){
            this.activo=false
        },
    }

}
