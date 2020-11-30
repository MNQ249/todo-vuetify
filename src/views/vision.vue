<template>
  <div class="vision">
    <h1 class="subtitle grey--text">OurVision</h1>

    <v-container class="my-5">
     <h1 style="font-family: 'Lora', serif;" flat class="blue-grey darken-5 text-center"  >Our vision is to create a better everyday life for many people.</h1>
      <v-timeline :dense="$vuetify.breakpoint.smAndDown">
        <v-timeline-item color="purple lighten-2" fill-dot right>
          <v-card>
            <v-card-title class="purple lighten-2">
              <v-icon dark size="42" class="mr-4">
                mdi-magnify
              </v-icon>
              <h2 class="display-1 white--text font-weight-light">
                INTGRITY
              </h2>
            </v-card-title>
            <v-container>
              <v-row>
                <v-col cols="12" md="10">
                  We champion an environment of honesty, transparency, fairness
                  and high moral standards.
                </v-col>
                <v-col class="hidden-sm-and-down text-right" md="2">
                  <v-icon size="64">
                    mdi-calendar-text
                  </v-icon>
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-timeline-item>

        <v-timeline-item color="amber lighten-1" fill-dot left small>
          <v-card>
            <v-card-title class="amber lighten-1 justify-end">
              <h2 class="display-1 mr-4 white--text font-weight-light">
                INNVOTION
              </h2>
              <v-icon dark size="42">
                mdi-home-outline
              </v-icon>
            </v-card-title>
            <v-container>
              <v-row>
                <v-col cols="12" md="12">
                 We embrace change and creativity to deliver the best practical outcomes.
                </v-col>
                <v-col cols="12" md="4">
                  
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-timeline-item>

        <v-timeline-item color="cyan lighten-1" fill-dot right>
          <v-card>
            <v-card-title class="cyan lighten-1">
              <v-icon class="mr-4" dark size="42">
                mdi-email-outline
              </v-icon>
              <h2 class="display-1 white--text font-weight-light">
                EXCELLENCE
              </h2>
            </v-card-title>
            <v-container>
              <v-row>
                <v-col cols="12" md="12">
                  We strive to exceed expectations and be the best that we can be, maintaining the highest level of quality.
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-timeline-item>

        <v-timeline-item color="red lighten-1" fill-dot left small>
          <v-card>
            <v-card-title class="red lighten-1 justify-end">
              <h2 class="display-1 mr-4 white--text font-weight-light">
                PARTNERSHIP
              </h2>
              <v-icon dark size="42">
                mdi-account-multiple-outline
              </v-icon>
            </v-card-title>
            <v-container>
              <v-row>
                <v-col class="hidden-sm-and-down" md="2">
                  <v-icon size="64">
                    mdi-server-network
                  </v-icon>
                </v-col>
                <v-col cols="12" md="10">
                  We build strong relationships and alliances to achieve success for the long term.
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-timeline-item>

        <v-timeline-item color="green lighten-1" fill-dot right>
          <v-card>
            <v-card-title class="green lighten-1">
              <v-icon class="mr-4" dark size="42">
                mdi-phone-in-talk
              </v-icon>
              <h2 class="display-1 white--text font-weight-light">
                EMPOWERMENT
              </h2>
            </v-card-title>
            <v-container>
              <v-row>
                <v-col cols="12" md="8">
                  Lorem ipsum dolor sit amet, no nam oblique veritus. Commune
                  scaevola imperdiet nec ut, sed euismod convenire principes at.
                  Est et nobis iisque percipit, an vim zril disputando
                  voluptatibus, vix an salutandi sententiae.
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-timeline-item>
      </v-timeline>
    </v-container>
  </div>
</template>

<script>
export default {};
</script>
