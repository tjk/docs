<template>
  <v-card flat>
    <v-form>
      <v-container grid-list-xl fluid>
        <v-layout wrap>
          <v-flex xs12 sm6>
            <v-text-field
              label="First name"
              color="purple darken-2"
              v-model="form.first"
            ></v-text-field>
          </v-flex>
          <v-flex xs12 sm6>
            <v-text-field
              label="Last name"
              color="blue darken-2"
              v-model="form.last"
            ></v-text-field>
          </v-flex>
          <v-flex xs12>
            <v-text-field
              label="Bio"
              multi-line
              color="teal"
              v-model="form.bio"
            ></v-text-field>
          </v-flex>
          <v-flex xs12 sm6>
            <v-select
              label="Favorite animal"
              :items="animals"
              color="pink"
              v-model="form.favoriteAnimal"
            ></v-select>
          </v-flex>
          <v-flex xs12 sm6>
            <v-slider
              color="orange"
              thumb-label
              label="Age"
              min="1"
              max="100"
              v-model="form.age"
            ></v-slider>
          </v-flex>
          <v-flex xs12>
            <v-checkbox
              color="green"
              v-model="form.terms"
            >
              <div slot="label">
                Do you accept the
                <a href="javascript:;">terms</a>
                and
                <a href="javascript:;">conditions?</a>
              </div>
            </v-checkbox>
          </v-flex>
        </v-layout>
      </v-container>
    </v-form>
  </v-card>
</template>

<script>
  export default {
    data: () => ({
      form: {
        first: '',
        last: '',
        bio: '',
        favoriteAnimal: '',
        age: null,
        terms: false
      },
      animals: ['Dog', 'Cat', 'Rabbit', 'Turtle', 'Snake']
    })
  }
</script>