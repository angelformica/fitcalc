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
                <td>{{ results.weight !== '' ? (results.weight * 2.20462).toFixed(2) : '' }}</td>
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
      if (this.form.height.feet.selected == null) return null
      let inches = this.form.height.inches.selected != null ? parseInt(this.form.height.inches.selected) : 0
      let heightInCM = ((parseInt(this.form.height.feet.selected) * 12) + inches) * 2.54
      this.results.weight = (50 + (0.9 * (heightInCM - 152))).toFixed(2)
    },
    onReset (evt) {
      evt.preventDefault()
      this.form.dailyCaloricNeeds = ''
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
