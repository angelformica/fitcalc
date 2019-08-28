<template>
  <b-container class="widget" id="app">
    <b-nav>
      <li class="nav-item">
        <router-link class="nav-link mr-auto" active-class="active" :to="{ name: 'nutritional-needs' }"><i class="fa fa-cutlery fa-2x"></i></router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link mr-auto" active-class="active" :to="{ name: 'body-mass-index' }"><i class="fa fa-male fa-2x"></i></router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link mr-auto" active-class="active" :to="{ name: 'heart-rate' }"><i class="fa fa-heartbeat fa-2x"></i></router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link mr-auto" active-class="active" :to="{ name: 'ideal-weight' }"><i class="fa fa-tachometer fa-2x"></i></router-link>
      </li>
    </b-nav>
    <br>
    <router-view />
    <b-container>
      <b-row>
        <footer>
          <p>
            <small>
              Note: These calculations are based on averages. Calculators are appropriate for healthy, non-pregnant adults 19 and older. Athletes may require a higher caloric intake to maintain their current weight.
            </small>
          </p>
          <p>
            <small>
              Developed by <a target="_blank" href="https://angelformica.com">Angel Formica</a>
            </small>
          </p>
        </footer>
      </b-row>
    </b-container>
  </b-container>
</template>

<script>
export default {
  props: ['title'],
  mounted () {
    this.$router.push({
      name: 'nutritional-needs'
    })
  }
}
</script>
