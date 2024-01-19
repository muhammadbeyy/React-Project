import React, {useState} from 'react';
import './style.css';
import Data from './Data'
import Questions from './Question'

export default function App() {

  const [question,setQuestion] = useState(Data)
  console.log(question)
  return (
        <main>
          <div className='container'>
            <h3> Frequently asked Questions - Islam</h3>
          <Questions  quest={question}/>
          </div>
        </main>
  );
}
