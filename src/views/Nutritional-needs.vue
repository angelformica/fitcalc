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
      this.results.carbohydrates.gramsPerDay = this.nutritionPerDayCalculator('carbohydrate').grams
      this.results.carbohydrates.caloriesPerDay = this.nutritionPerDayCalculator('carbohydrate').cal
      this.results.proteins.gramsPerDay = this.nutritionPerDayCalculator('protein').grams
      this.results.proteins.caloriesPerDay = this.nutritionPerDayCalculator('protein').cal
      this.results.fats.gramsPerDay = this.nutritionPerDayCalculator('fat').grams
      this.results.fats.caloriesPerDay = this.nutritionPerDayCalculator('fat').cal
    },
    nutritionPerDayCalculator (type) {
      let crbToPerGramFactor = 4
      let prnToPerGramFactor = 4
      let fatToPerGramFactor = 9
      let avgCarbohydratesPercent = 52.5
      let avgProteinPercent = 27.5
      let avgFatPercent = 22.5

      let nutritionalNeeds = {
        grams: 0,
        cal: 0
      }

      switch (type) {
        case 'carbohydrate':
          nutritionalNeeds.grams = Math.floor(((this.form.dailyCaloricNeeds * avgCarbohydratesPercent) / 100) / crbToPerGramFactor)
          nutritionalNeeds.cal = Math.floor(((this.form.dailyCaloricNeeds * avgCarbohydratesPercent) / 100))
          break
        case 'protein':
          nutritionalNeeds.grams = Math.floor(((this.form.dailyCaloricNeeds * avgProteinPercent) / 100) / prnToPerGramFactor)
          nutritionalNeeds.cal = Math.floor(((this.form.dailyCaloricNeeds * avgProteinPercent) / 100))
          break
        case 'fat':
          nutritionalNeeds.grams = Math.floor(((this.form.dailyCaloricNeeds * avgFatPercent) / 100) / fatToPerGramFactor)
          nutritionalNeeds.cal = Math.floor(((this.form.dailyCaloricNeeds * avgFatPercent) / 100))
          break
      }
      return nutritionalNeeds
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
