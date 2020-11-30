<template>
    <div class="team">
<h1 class="subtitle grey--text">Team</h1>

<v-container  class="my-5">
    <v-layout row wrap>
        <v-flex xs12 sm6 md4 lg3 v-for="person in team" :key="person.name">
            <v-card flat class="text-center ma-3" color="grey lighten-4">
                <v-responsive class="pt-4">
                        <v-avatar size="100" class="grey lighten-2">
                            <img :src="person.avatar">
                        </v-avatar>
                </v-responsive>
                


                <v-card-text>
                    <div class="subheading blue--text">{{ person.name }}</div>
                    <div class="pink--text">{{ person.role }}</div>
                </v-card-text>
                <v-card-action>
                    <v-btn text small left color="blue-grey lighten-3">
                        <v-icon small left>mdi-message</v-icon>
                        <span>message</span>
                    </v-btn>
                </v-card-action>
            </v-card>
        </v-flex>
    </v-layout>
</v-container>
    </div>
</template>

<script>
export default {
    data(){
        return{
            team:[
                {name:'The Net Ninja', role: 'Web developer', avatar:'circle-cropped (1).png'},
                {name:'Ryu', role: 'Graphic designer', avatar:'circle-cropped (2).png'},
                {name:'Gouken', role: 'Social media maverick', avatar:'circle-cropped (3).png'},
                {name:'Youshi', role: 'Soles guru', avatar:'circle-cropped (4).png'},
                {name:'Chun li', role: 'Web developer', avatar:'circle-cropped(5).png'},
                {name:'Mesfer', role: 'Full Stack Developer', avatar: 'circle-cropped.png'}
            ]
        }
    }
}
</script>