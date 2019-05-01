<template>
    <div class="card-body">
        <router-link :to="'/pc/' + id">
          <img :src="image" class="img-fluid" alt="Responsive image" ahref="youtube.com">
        </router-link>
        <p>
            {{name}}
        </p>
        <h4>Price: {{price}}€</h4>
        <button @click="addToBasket" type="button" class="btn btn-lg btn-block btn-outline-primary">
          Add to basket
        </button>
    </div>
</template>

<script>
import LocalBasket from '@/basket'

export default {
  name: 'ProductCard',
  props: ['id', 'name', 'price', 'image'],
  data () {
    return {
    }
  },
  methods: {
    addToBasket () {
      LocalBasket.add(this.id, 1)
      console.log(LocalBasket.get())
    }
  }
}
</script>
