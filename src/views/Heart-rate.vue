<template>
    <b-container>
        <b-col>
            <h2>Heart rate</h2>
        </b-col>
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">

            <b-form-group
                    id="input-group-1"
                    label="Your age:"
                    label-for="input-1">
                <b-form-input
                        id="input-1"
                        v-model="form.age"
                        type="number"
                        required
                        placeholder="Age"
                ></b-form-input>
            </b-form-group>

            <b-form-group label="Level of exercise">
                <b-row>
                    <b-col>
                        <b-form-select v-model="form.levelOfExercise.selected" :options="form.levelOfExercise.options" class="mb-3">
                            <template slot="first">
                                <option :value="null" disabled>-- % of maximum heart rate --</option>
                            </template>
                        </b-form-select>
                    </b-col>
                </b-row>
            </b-form-group>
            <b-button type="submit" variant="primary">Calculate</b-button>
        </b-form>
        <table class="table table-dark">
            <thead>
            <tr>
                <th scope="col"><h3>Results</h3></th>
                <th scope="col">Bpm</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <th scope="row">Recommended target heart rate</th>
                <td>{{ results.recommendedTargetHeartRate }}</td>
            </tr>
            </tbody>
        </table>
    </b-container>
</template>

<script>
export default {
  name: 'heart-rate',
  data () {
    return {
      form: {
        age: '',
        levelOfExercise: {
          selected: null,
          options: [
            { value: '10', text: '10' },
            { value: '20', text: '20' },
            { value: '30', text: '30' },
            { value: '40', text: '40' },
            { value: '50', text: '50' },
            { value: '60', text: '60' },
            { value: '70', text: '70' },
            { value: '80', text: '80' },
            { value: '90', text: '90' },
            { value: '100', text: '100' }
          ]
        }
      },
      results: {
        recommendedTargetHeartRate: ''
      },
      show: true
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      this.results.recommendedTargetHeartRate = Math.floor((Math.random() * 1500) + 1)
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
