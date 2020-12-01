<template>
   <div class="text-center">
       <v-dialog v-model="dialog" width="500">
           <template v-slot:activator="{ on, attrs }">
               <v-btn color="red lighten-1" dark v-bind="attrs" v-on="on" > Add New Project</v-btn>
           </template>
           <v-card>
           <v-card-title class="headline grey lighten-2"> Create a New Project</v-card-title>
       </v-card>
       </v-dialog>
   </div>
</template>


<script>
export default {
    data(){
        return{
            dialog: true,
        }
    }
}
</script>