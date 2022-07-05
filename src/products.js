import burger from './images/menu-burger.png'
import fries from './images/menu-fries.jpg'
import milkshake from './images/menu-milkshake.jpg'

const productsData = [
   {
      id: 1,
      image: burger,
      alt: "burger",
      name: "Big Burger",
      description: "This is a burger",
      isSale: true,
      discount: 10
   },
   {
      id: 2,
      image: fries,
      alt: "fries",
      name: "Fantastic Fries",
      description: "These are fries",
      isSale: false,
      discount: 0
   },
   {
      id: 3,
      image: milkshake,
      alt: "milkshake",
      name: "Mega Milkshake",
      description: "This is a milkshake",
      isSale: true,
      discount: 25
   }
]

export default productsData