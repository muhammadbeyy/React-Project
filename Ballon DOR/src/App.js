import React , {useState}from 'react';
import Data from  './Data'
import List from  './List'
import './style.css';


export default function App() {

  const [award,setAward] = useState(Data)
  console.log(Data)

  return (
    <main>
      <section className='container'>
        <h3 className='top-text'>Ballon D'OR 2024 Winners</h3>
        <List award={award} />
      </section>
    </main>
  );
}
