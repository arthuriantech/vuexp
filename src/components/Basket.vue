<template>
    <div class="card-body">
        <a href="pc_view.html">
            <img src="https://5.imimg.com/data5/DA/DE/MY-4326708/lenovo-desktop-computer-500x500.jpg"
            class="img-fluid" alt="Responsive image" ahref="youtube.com">
        </a>
        <p>
            {{name}}
        </p>
        <h3>Price: {{price}}€</h3>
        <button @click="addToBasket" type="button" class="btn btn-lg btn-block btn-outline-primary">
          Add to basket
        </button>
    </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: ['id', 'name', 'price'],
  data () {
    return {
    }
  },
  methods: {
    addToBasket () {
      let ids = eval(localStorage.getItem('basket_ids')) || []
      ids.push(this.id)
      console.log(ids)
      localStorage.basket_ids = JSON.stringify(ids)
    }
  }
}
</script>
