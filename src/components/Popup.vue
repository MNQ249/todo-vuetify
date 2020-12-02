<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="red lighten-1" dark v-bind="attrs" v-on="on">
          Add New Project</v-btn
        >
      </template>
      <v-card>
        <v-card-title class="headline white--text red lighten-1">
          Create a New Project</v-card-title
        >
      </v-card>
      <v-card-text class="indigo darken-1">
        <v-form class="px-3 " ref="form">
          <v-text-field
            label="Title"
            v-model="title"
            prepend-icon="mdi-folder"
            :rules="inputRulesTitle"
          ></v-text-field>
          <v-textarea
            label="Information"
            v-model="content"
            prepend-icon="mdi-pencil "
            :rules="inputRulesInformation"
          ></v-textarea>
          <!--datePicker-->
          <v-menu
            v-model="due"
            :close-on-content-click="false"
            transition="scale-transition"
            offset-y
            max-width="290px"
            min-width="290px"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="computedDateFormatted"
                label="Due Date"
                persistent-hint
                prepend-icon="mdi-calendar"
                v-bind="attrs"
                v-on="on"
                :rules="inputRulesDate"
              ></v-text-field>
            </template>
            <v-date-picker
              v-model="date"
              no-title
              @input="due = false"
            ></v-date-picker>
          </v-menu>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" @click="submit">
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
  data(vm) {
    return {
      dialog: true,
      title: "",
      content: "",
      inputRulesTitle:[
          v => !!v || 'Title is required', // this message if is not null (!!V) but if null return message
          v => v.length >= 3 || 'Minimum length is 3 characters'
      ],
      inputRulesInformation:[
          v => !!v || 'information is required', // this message if is not null (!!V) but if null return message
          v => v.length >= 10 || 'Minimum length is 10 characters'
      ],
      inputRulesDate:[
          v => !!v || 'Date is required', // this message if is not null (!!V) but if null return message
          
      ],
      date: new Date().toISOString().substr(0, 10),
      dateFormatted: vm.formatDate(new Date().toISOString().substr(0, 10)),
    };
  },
  computed: {
    computedDateFormatted() {
      return this.formatDate(this.date);
    },
  },
  watch: {
    date() {
      this.dateFormatted = this.formatDate(this.date);
    },
  },
  methods: {
    submit() {
        if(this.$refs.form.validate()){
            console.log(this.title, this.content);
        }
      
    },
    formatDate(date) {
      if (!date) return null;

      const [year, month, day] = date.split("-");
      return `${month}/${day}/${year}`;
    },
    parseDate(date) {
      if (!date) return null;

      const [month, day, year] = date.split("/");
      return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
    },
  },
};
</script>
