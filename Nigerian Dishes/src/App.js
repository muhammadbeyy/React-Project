import React, {useState}from 'react';
import './style.css';
import Menu from './Menu'
import Categories from './Categories'
import items from './Data'

const allCategories = ['all', ...new Set(items.map((item) => item.category))]
console.log(allCategories)

export default function App() {
  const [menu,setMenu] = useState(items)
  const [categories,setCategories] = useState([allCategories])

  

  const filterItems = (category) => {
    if (category === 'all') {
      setMenu(items)
      return
    }
  
  const newItems = items.filter((item) => item.category === category)
  }

  return (
    <main>
      <section className='menu section'>
      <div className='title'>
        <h2>Nigerian Dishes</h2>
        <div className='underline'></div>
      </div>
      
      <Categories categories={allCategories} filteredItems = {filterItems} />
      <Menu items= {menu} />
      </section>
    </main>
     
  );
}
