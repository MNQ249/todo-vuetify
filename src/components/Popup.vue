<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="red lighten-1" dark v-bind="attrs" v-on="on">
          Add New Project</v-btn
        >
      </template>
      <v-card>
        <v-card-title class="headline light-blue accent-4">
          Create a New Project</v-card-title
        >
      </v-card>
      <v-card-text>
        <v-form class="px-3">
          <v-text-field
            label="Title"
            v-model="title"
            prepend-icon="mdi-folder"
          ></v-text-field>
          <v-textarea
            label="Information"
            v-model="content"
            prepend-icon="mdi-pencil "
          ></v-textarea>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="primary"
              @click="submit"
            >
              Upload
            </v-btn>
          </v-card-actions>
        </v-form>
      </v-card-text>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialog: true,
      title: "",
      content: "",
    };
  },
  methods:{
      submit(){
          console.log(this.title, this.content)
      }
  }
};
</script>
