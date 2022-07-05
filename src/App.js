import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import productsData from "./products"

const App = () => {
  const productsCards = productsData.map(product => {
    return (
      <Card 
        key={product.id}
        product={product}
      />
    )
  })

  return (
    <>
      <Navbar/>
      <Hero/>
      <section className='cards-container'>
        {productsCards}
      </section>
    </>
  )
}

export default App