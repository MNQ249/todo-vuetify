<template>
  <div class="dashboard" >
    <h1 class="subtitle grey--text">Dashboard</h1>

    <v-container  class="my-5" >
      
      <v-layout row class="mb-3">
       <v-tooltip top>
         <template v-slot:activator="{ on, attrs }">
          <v-btn small text color="indigo" @click="sortBy('title')" v-bind="attrs"
            v-on="on">
          <v-icon left small>mdi-folder</v-icon>
          <span class="caption text-lowercase">By Project Name </span>
        </v-btn>
        </template>
        <span>Sort project by project name</span>
       </v-tooltip>

       <v-tooltip top>
         <template v-slot:activator="{ on, attrs }">
          <v-btn small text color="indigo" @click="sortBy('person')" v-bind="attrs"
            v-on="on">
          <v-icon left small>mdi-account </v-icon>
          <span class="caption text-lowercase">By Person</span>
           </v-btn>
          </template>
          <span>Sort project by Person</span>
       </v-tooltip>

      </v-layout>

      

    <v-card flat class="pa-3 lighten-3" v-for="project in projects" :key="project.title">
      <v-layout row wrap :class="`pa-3 project ${project.status}`">
      <v-flex xs12 md6>
        <div class="captiion grey--text">Project Title</div>
        <div>{{ project.title }}</div>
      </v-flex>

      <v-flex xs6 sm4 md2>
        <div class="captiion grey--text">Person</div>
        <div>{{ project.person }}</div>
      </v-flex>

      <v-flex xs6 sm4 md2>
        <div class="captiion grey--text">Due by</div>
        <div>{{ project.due }}</div>
      </v-flex>

      <v-flex xs6 sm4 md2>
        <div>
          <v-chip small :class="project.status+ ' white--text caption ma-2'">{{ project.status }}</v-chip>
        </div>
      </v-flex>

      </v-layout>
    </v-card>
   </v-container>
  </div>
</template>

<script>
import db from '@/fb'
export default {
    data(){
          return {
  projects: [
        { title: 'Design a new website', person: 'The Net Ninja', due: '1st Jan 2019', status: 'ongoing', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        // { title: 'Code up the homepage', person: 'Chun Li', due: '10th Jan 2019', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        // { title: 'Design video thumbnails', person: 'Ryu', due: '20th Dec 2018', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        // { title: 'Create a community forum', person: 'Gouken', due: '20th Oct 2018', status: 'overdue', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
      ]
  }
},
created: function(){
    console.log('on dashboard created')
    db.collection('projects').onSnapshot(res =>{
      const changes = res.docChanges();

     // console.log(changes)

      changes.forEach(change =>{
        if(change.type === 'added') {// type (add,remove,modify,create)
          // console.log(change)
          this.projects.push({
            ...change.doc.data(),
            id: change.doc.id
          })  
        }       
      })
    })
  },
methods:{
  
  
  sortBy(prop){
    // console.log('sort')
    this.projects.sort((a,b) => a[prop] < b[prop] ? -1 : 1)
  },
  

}
}
</script>

<style>
 .project.complete {
   border-left: 4px solid #21C73D
 }

 .project.ongoing{
   border-left: 4px solid orange;
 }

 .project.overdue{
   border-left: 4px solid #ff6347;
 }

.v-chip.complete{
  background: #21C73D !important;
}
.v-chip.ongoing{
  background: #ffaa2c !important;
}
.v-chip.overdue{
  background: #f83e70 !important;
}

</style>