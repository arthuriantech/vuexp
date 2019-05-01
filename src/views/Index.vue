<template>
  <div>
    <navbar></navbar>
    <myheader></myheader>
    <navsec></navsec>
    <div class="container-fluid">
      <div class="album py-5 bg-light">
        <div class="container">
          <div class="row">
            <div v-for="i in products" :key="i.id" class="col-md-3">
              <div class="card mb-4 shadow-sm">
                <productcard
                :id="i.id"
                :name="i.name"
                :price="i.price"
                :image="i.image">
              </productcard>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    <paginate
      v-model="currentPage"
      :page-count="Math.ceil(total / productsPerPage)"
      :click-handler="fetchPage"
      :prev-text="'Prev'"
      :next-text="'Next'"
      :container-class="'pagination justify-content-center bg-light'"
      :page-class="'page-item'"
      :page-link-class="'page-link'"
      :prev-link-class="'page-link'"
      :next-link-class="'page-link'"
      >
    </paginate>
    <myfooter></myfooter>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Index',
  created () {
    this.fetchPage(1)
  },
  data () {
    return {
      products: [],
      total: 0,
      productsPerPage: 4,
      currentPage: 1
    }
  },
  methods: {
    fetchPage (page) {
      let offset = (page * this.productsPerPage) - this.productsPerPage
      console.log(offset, this.currentPage)

      axios.get('db.json').then(response => {
        this.products = response.data.products.slice(offset, offset + this.productsPerPage)
        this.total = response.data.products.length
      })
    }
  }
}
</script>
