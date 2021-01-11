<template>
  <div class="projects">
    <h1 class="subtitle grey--text">Projects</h1>

    <v-container class="my-5">
      <v-expansion-panels>
        <v-expansion-panel
          v-for="project in myProjects"
          :key="project.title"
          class="cyan darken-4"
        >
          <v-expansion-panel-header class="font-weight-bold white--text">
            {{ project.title }}
            <v-expansion-panel-content>
              <v-card>
                <v-card-text class="px-4 teal darken-1">
                  <div class="font-weight-bold">due by {{ project.due }}</div>
                  <div>{{ project.content }}</div>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn text color="secondary">
                      Cancel
                    </v-btn>
                    <v-btn text color="error" @click="del(project.id)">
                      Delete
                    </v-btn>
                  </v-card-actions>
                </v-card-text>
              </v-card>
            </v-expansion-panel-content>
          </v-expansion-panel-header>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-container>
  </div>
</template>

<script>
import db from "@/fb";

export default {
  data() {
    return {
      projects: [],
    };
  },
  created: function() {
    console.log("on dashboard created");
    db.collection("projects").onSnapshot((res) => {
      const changes = res.docChanges();

      // console.log(changes)

      changes.forEach((change) => {
        if (change.type === "added") {
          // type (add,remove,modify,create)
          // console.log(change)
          this.projects.push({
            ...change.doc.data(),
            id: change.doc.id,
          });
        }
      });
    });
  },
  computed: {
    myProjects() {
      return this.projects.filter((project) => {
        return project.person === "The Net Ninja";
      });
    },
  },

  methods: {
    del(id) {
      // this.arr.splice(index, 1)
      db.collection("projects")
        .doc(id)
        .delete()
        .then(function() {
          console.log("Document successfully deleted!");
        })
        .catch(function(error) {
          console.error("Error removing document: ", error);
        });

    this.myProjects;
    },
  },
};
</script>
