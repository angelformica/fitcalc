<template>
    <b-container>
        <b-col>
            <h2>Nutritional needs calculator</h2>
        </b-col>
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
            <b-form-group
                    id="input-group-1"
                    label="Your daily caloric needs:"
                    label-for="input-1">
                <b-form-input
                        id="input-1"
                        v-model="form.dailyCaloricNeeds"
                        type="number"
                        required
                        placeholder="Calories"
                ></b-form-input>
            </b-form-group>

            <b-button type="submit" variant="primary">Calculate</b-button>
        </b-form>

        <table class="table table-dark">
            <thead>
            <tr>
                <th scope="col"><h3>Results</h3></th>
                <th scope="col">grams / day</th>
                <th scope="col">calories / day</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <th scope="row">carbohydrates</th>
                <td>{{ results.carbohydrates.gramsPerDay }}</td>
                <td>{{ results.carbohydrates.caloriesPerDay }}</td>
            </tr>
            <tr>
                <th scope="row">proteins</th>
                <td>{{ results.proteins.gramsPerDay }}</td>
                <td>{{ results.proteins.caloriesPerDay }}</td>
            </tr>
            <tr>
                <th scope="row">fats</th>
                <td>{{ results.fats.gramsPerDay }}</td>
                <td>{{ results.fats.caloriesPerDay }}</td>
            </tr>
            </tbody>
        </table>
    </b-container>
</template>

<script>
export default {
  name: 'Nutritional-needs',
  data () {
    return {
      form: {
        dailyCaloricNeeds: ''
      },
      results: {
        carbohydrates: {
          gramsPerDay: '',
          caloriesPerDay: ''
        },
        proteins: {
          gramsPerDay: '',
          caloriesPerDay: ''
        },
        fats: {
          gramsPerDay: '',
          caloriesPerDay: ''
        }
      },
      show: true
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      this.results.carbohydrates.gramsPerDay = Math.floor((Math.random() * 1500) + 1)
      this.results.carbohydrates.caloriesPerDay = Math.floor((Math.random() * 1500) + 1)
      this.results.proteins.gramsPerDay = Math.floor((Math.random() * 1500) + 1)
      this.results.proteins.caloriesPerDay = Math.floor((Math.random() * 1500) + 1)
      this.results.fats.gramsPerDay = Math.floor((Math.random() * 1500) + 1)
      this.results.fats.caloriesPerDay = Math.floor((Math.random() * 1500) + 1)
    },
    onReset (evt) {
      evt.preventDefault()
      // Reset our form values
      this.form.dailyCaloricNeeds = ''
      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    }
  }
}
</script>

<style scoped>

</style>
