
import { useState } from 'react'
import './App.css'
import Banner from './assets/components/Banner/Banner'
import Header from './assets/components/Header/Header'
import RecipeHeading from './assets/components/RecipeHeading/RecipeHeading'
import Recipes from './assets/components/Recipes/Recipes'
import WantToCooks from './assets/components/WantToCooks/WantToCooks'
import CurrentlyCookings from './assets/components/CurrentlyCookings/CurrentlyCookings'

function App() {

  const [wantToCooks, setWantToCooks] = useState([]);

  const handleWantToCook = recipe => {
    const newWantToCook = [...wantToCooks, recipe]
    setWantToCooks(newWantToCook)
  }
  

  return (
    <div className='container mx-auto'>
      
      <Header></Header>
      <Banner></Banner>
      <RecipeHeading></RecipeHeading>
      <div className="flex gap-6 mt-6">
        <Recipes handleWantToCook={handleWantToCook}></Recipes>
        <div className='mt-12 rounded-2xl  border'>
          <WantToCooks wantToCooks={wantToCooks}></WantToCooks>
          <CurrentlyCookings></CurrentlyCookings>
        </div>
      </div>
      
    </div>
  )
}

export default App
