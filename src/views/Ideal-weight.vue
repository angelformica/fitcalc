<template>
    <b-container>
        <b-col>
            <h2>Ideal weight</h2>
        </b-col>
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">

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

            <b-button type="submit" variant="primary">Calculate</b-button>
        </b-form>
        <table class="table table-dark">
            <thead>
            <tr>
                <th scope="col"><h3>Results</h3></th>
                <th scope="col">Kg.</th>
                <th scope="col">Lbs.</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <th scope="row">Ideal weight</th>
                <td>{{ results.weight }}</td>
                <td>{{ results.weight * 10 }}</td>
            </tr>
            </tbody>
        </table>
    </b-container>
</template>

<script>
export default {
  name: 'ideal-weight',
  data () {
    return {
      form: {
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
        }
      },
      results: {
        weight: ''
      },
      show: true
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      this.results.weight = Math.floor((Math.random() * 1500) + 1)
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
