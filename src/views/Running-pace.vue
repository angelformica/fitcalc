<template>
    <b-container>
        <b-col>
            <h2>Running pace</h2>
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

            <b-button type="submit" variant="primary">Submit</b-button>
            <b-button type="reset" variant="danger">Reset</b-button>
        </b-form>
        <b-card class="mt-3" header="Form Data Result">
            <pre class="m-0">{{ results }}</pre>
        </b-card>
    </b-container>
</template>

<script>
export default {
  name: 'running-pace',
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
