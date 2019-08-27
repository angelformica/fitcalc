<template>
    <b-container>
        <b-col>
            <h2>Body mass index</h2>
        </b-col>
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
            <b-form-group label="Calculate:">
                <b-form-radio-group id="radio-group-2" v-model="form.adultKid" name="radio-sub-component">
                    <b-form-radio value="adult">Adult BMI</b-form-radio>
                    <b-form-radio value="kid">Kid BMI</b-form-radio>
                </b-form-radio-group>
            </b-form-group>

            <b-form-group label="Your height">
                <b-row>
                    <b-col>
                        <b-form-select v-model="form.height.feet.selected" :options="form.height.feet.options" class="mb-3">
                            <template slot="first">
                                <option :value="null" disabled>-- feet --</option>
                            </template>
                        </b-form-select>
                    </b-col>
                    <b-col>
                        <b-form-select v-model="form.height.inches.selected" :options="form.height.inches.options" class="mb-3">
                            <template slot="first">
                                <option :value="null" disabled>-- inches --</option>
                            </template>
                        </b-form-select>
                    </b-col>
                </b-row>
            </b-form-group>

            <b-form-group
                    id="input-group-1"
                    label="Your weight:"
                    label-for="input-1">
                <b-form-input
                        id="input-1"
                        v-model="form.weight"
                        type="number"
                        required
                        placeholder="Pounds"
                ></b-form-input>
            </b-form-group>
            <b-button type="submit" variant="primary">Calculate</b-button>
        </b-form>

        <table class="table table-dark">
            <thead>
            <tr>
                <th scope="col"><h3>Results</h3></th>
                <th scope="col">Kg / m2</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <th scope="row">BMI</th>
                <td>{{ results.bmi }}</td>
            </tr>
            </tbody>
        </table>

    </b-container>
</template>

<script>
export default {
  name: 'body-mass-index',
  data () {
    return {
      form: {
        adultKid: 'adult',
        height: {
          feet: {
            selected: null,
            options: [
              { value: '4', text: '4' },
              { value: '5', text: '5' },
              { value: '6', text: '6' },
              { value: '7', text: '7' },
              { value: '8', text: '8' }
            ]
          },
          inches: {
            selected: null,
            options: [
              { value: '1', text: '1' },
              { value: '2', text: '2' },
              { value: '3', text: '3' },
              { value: '4', text: '4' },
              { value: '5', text: '5' },
              { value: '6', text: '6' },
              { value: '7', text: '7' },
              { value: '8', text: '8' },
              { value: '9', text: '9' },
              { value: '10', text: '10' },
              { value: '11', text: '11' }
            ]
          }
        },
        weight: ''
      },
      results: {
        bmi: ''
      },
      show: true
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      if(this.form.height.feet.selected == null) return null
      let inches = this.form.height.inches.selected != null ? parseInt(this.form.height.inches.selected) : 0
      let heightInInches = (parseInt(this.form.height.feet.selected) * 12) + inches
      this.results.bmi = (parseFloat(this.form.weight) / Math.pow(heightInInches,2) * 703).toFixed(2)
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
