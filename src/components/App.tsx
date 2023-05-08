import { useState } from 'react'
import '../index.css'
import TeamSection from './TeamSection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
      <p className="text-3xl text-gray-700 font-bold mb-5">
        Welcome!
      </p>
      <p className="text-gray-500 text-lg">
        React and Tailwind CSS in action
      </p>
    </div>
      <article>
        <TeamSection></TeamSection>
      </article>
    </>
    
  )
}

export default App
