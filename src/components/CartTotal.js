function CartTotal({ books }) {
  const total = books.reduce((sum, pr) => sum + pr.price * pr.quantity, 0)

  return <p>{total}</p>
}

export default CartTotal
