<template>
  <div>
    <navbar></navbar>
    <myheader></myheader>
    <navsec></navsec>
    <div class="container" style="background-color: rgba(0,0,0,0.1);">
      <div class="row">
        <div class="col-lg-3">
          <h1 class="my-4"></h1>
          <div class="list-group">
            <a href="#"><img class="card-img-top" :src="product.image" alt=""></a>
            <h1 class="my-1"></h1>
            <a href="#"><img class="card-img-top" src="http://placehold.it/700x400" alt=""></a>
            <h1 class="my-1"></h1>
            <a href="#"><img class="card-img-top" src="http://placehold.it/700x400" alt=""></a>
            <h1 class="my-3"></h1>
          </div>
        </div>
        <div class="col-lg-9">
          <div id="carousel" class="carousel slide my-4" data-ride="carousel">
            <ol class="carousel-indicators">
              <li data-target="#carousel" data-slide-to="0" class="active"></li>
              <li data-target="#carousel" data-slide-to="1"></li>
              <li data-target="#carousel" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner" role="listbox">
              <div class="carousel-item active">
                <img class="d-block img-fluid" src="http://placehold.it/900x350" alt="First slide">
              </div>
              <div class="carousel-item">
                <img class="d-block img-fluid" src="http://placehold.it/900x350" alt="Second slide">
              </div>
              <div class="carousel-item">
                <img class="d-block img-fluid" src="http://placehold.it/900x350" alt="Third slide">
              </div>
            </div>
            <a class="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carousel" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
          <div class="col-lg">
            <div class="row">
              <div class="card" style="width: 50%;">
                <div class="card-header">
                  {{product.name}}
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">tete</li>
                  <li class="list-group-item">MEGAPIXEL 3000</li>
                  <li class="list-group-item">Test</li>
                </ul>
              </div>
              <div class="card" style="width:50%">
                <div class="card-header">
                  SOME SPECS
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">VERY GOOD</li>
                  <li class="list-group-item">NICE</li>
                  <li class="list-group-item">DESIGN</li>
                </ul>
              </div>
            </div>
            <div class="float-md-right">
              <router-link to="/basket">
                <button @click="buy" type="button" class="btn btn-dark" style="margin: 5px;">BUY ({{product.price}}€)</button>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <myfooter></myfooter>
  </div>
</template>

<script>
import axios from 'axios'
import LocalBasket from '@/basket'

export default {
  name: 'PcView',
  props: ['productId'],
  data () {
    return {
      product: {}
    }
  },
  created () {
    axios.get('db.json').then(response => {
      response.data.products.forEach((p) => {
        if (p.id === this.productId) {
          this.product = p
        }
      })
    })
  },
  methods: {
    buy () {
      LocalBasket.add(this.productId, 1)
    }
  }
}
</script>
