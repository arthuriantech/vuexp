<template>
  <div>
    <navbar></navbar>
    <myheader></myheader>
    <navsec></navsec>
    <div class="container">
      <div class="table-responsive">
        <table class="table cart-table text-center font-beauty">
          <tr>
            <th scope="col">Product(s)</th>
            <th scope="col"></th>
            <th scope="col"></th>
            <th scope="col">Price</th>
            <th scope="col">Quantity</th>
            <th scope="col">Total</th>
          </tr>
          <tr v-for="product in items" :key="product.id">
            <td><img :src="product.image" alt=""
             style="width:50px; height: 30px"></td>
             <td>{{product.name}}</td>
             <td>
              <button @click="removeItem(product.id)" class="btn btn-sm btn-block btn-dark">REMOVE</button>
            </td>
            <td>{{product.price}}€</td>
            <td>
              <input
                v-on:input="setItem(product.id, $event.target.value)"
                :value="product.count"
                class="quantity text-center"
                type="number"
                min="0">
            </td>
            <td>{{product.price * product.count}}€</td>
          </tr>
          <tr>
            <td></td>
            <th>Shipping</th>
            <td>Free</td>
            <td colspan="3"></td>
          </tr>
          <tr>
            <td></td>
            <th>Total</th>
            <td>{{totalPrice()}}€</td>
            <td colspan="3"></td>
          </tr>
          <tr>
            <td colspan="2">
              <router-link to="/checkout">
                <button class="btn btn-sm btn-block btn-dark" style="margin-left: 100%;">PROCEED TO CHECKOUT</button>
              </router-link>
            </td>
            <td colspan="2"></td>
          </tr>
        </table>
      </div>
    </div>
    <myfooter></myfooter>
  </div>
</template>

<script>
import axios from 'axios'
import LocalBasket from '@/basket'

export default {
  name: 'Basket',
  created () {
    this.loadItems()
  },
  data () {
    return {
      items: []
    }
  },
  methods: {
    loadItems () {
      axios.get('db.json').then(response => {
        let basket = LocalBasket.get()
        this.items = []

        response.data.products.forEach((product) => {
          if (product.id in basket) {
            this.items.push({count: basket[product.id], ...product})
          }
        })
      })
    },
    removeItem (productId) {
      LocalBasket.remove(productId)
      this.loadItems()
      console.log(LocalBasket.get())
    },
    setItem (productId, count) {
      LocalBasket.set(productId, count)
      this.loadItems()
      console.log(LocalBasket.get())
    },
    totalPrice () {
      let sum = 0
      this.items.forEach((i) => (sum += i.price * i.count))
      return sum
    }
  },
  watch: {
    '$route': {
      handler () {
        this.loadItems()
      },
      immediate: true
    }
  }
}
</script>
