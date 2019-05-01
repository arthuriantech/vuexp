<template>
  <div class="container bg-light">
    <div class="col-md col-lg-12 fake-card">

      <div class="row fd-flex justify-content-center">
        <h3>Thank You for Your order</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
          et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur.
        </p>
      </div>
      <div class="row fd-flex justify-content-center">
        <router-link to="/" class="btn btn-sm btn-dark">Back to Home page</router-link>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Thanks',
  data () {
    return {
    }
  }
}
</script>
