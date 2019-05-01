class LocalBasket {
  get () {
    return JSON.parse(localStorage.getItem('basket') || '{}')
  }

  add (productId, count) {
    let basket = this.get()
    basket[productId] = (basket[productId] || 0) + (count | 0)
    localStorage.setItem('basket', JSON.stringify(basket))
  }

  set (productId, count) {
    let basket = this.get()
    basket[productId] = count | 0
    localStorage.setItem('basket', JSON.stringify(basket))
  }

  remove (productId) {
    let basket = this.get()
    delete basket[productId]
    localStorage.setItem('basket', JSON.stringify(basket))
  }

  clear () {
    localStorage.setItem('basket', '{}')
  }
}

export default new LocalBasket()
