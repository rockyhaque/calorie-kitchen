

import './App.css'
import Banner from './assets/components/Banner/Banner'
import Header from './assets/components/Header/Header'
import RecipeHeading from './assets/components/RecipeHeading/RecipeHeading'
import Recipes from './assets/components/Recipes/Recipes'
import WantToCooks from './assets/components/WantToCooks/WantToCooks'

function App() {

  
  

  return (
    <div className='container mx-auto'>
      
      <Header></Header>
      <Banner></Banner>
      <RecipeHeading></RecipeHeading>
      <div className="flex gap-6 mt-6">
        <Recipes></Recipes>
        <WantToCooks></WantToCooks>
      </div>
      
    </div>
  )
}

export default App
