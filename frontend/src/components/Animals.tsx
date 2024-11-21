import '../App.css'
import { useEffect, useState } from 'react'
import AddAnimal from './AddAnimal'

interface Animal {
  name: string
  image: string
  type_name: string
  weight: string
}

export interface Type {
  name: string
  id: number
}

export default function Animals() {
  const [animals, setAnimals] = useState<Animal[]>([]),
    [types, setTypes] = useState<Type[]>([])

  const fetchAnimals = async () => {
    try {
      const response = await fetch('http://localhost:3000/api')
      const result = await response.json()
      setAnimals(result)
    } catch (error) {
      console.error('Error fetching animals:', error)
    }
  }

  const fetchTypes = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/types')
      const result = await response.json()
      setTypes(result)
    } catch (error) {
      console.error('Error fetching types:', error)
    }
  }

  useEffect(() => {
    fetchAnimals()
    fetchTypes()
  }, [])

  return (
    <div className="py-16 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-xl">
          <h2 className="text-pretty text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
            Möt våra djur
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600"></p>
          På MiniZoo kan du träffa flera fanatstiska individer. Kolla in några
          av dem här.
          <p>
            De djurtyper vi har i parken för närvarande är{' '}
            {types
              .map((item) => item.name)
              .reduce((acc, name, index, array) => {
                if (index === 0) return name
                if (index === array.length - 1) return `${acc} och ${name}`
                return `${acc}, ${name}`
              }, '')}
            .
          </p>
        </div>
        <ul
          role="list"
          className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
        >
          {animals.map((animal) => (
            <li key={animal.name}>
              <div className="card flex gap-x-6 p-4 rounded shadow-lg">
                <img
                  alt=""
                  src={animal.image}
                  className="h-40 rounded shadow-md w-40"
                />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900 ">
                    {animal.name}
                  </h3>
                  <p className="text-sm font-semibold leading-6 text-gray-800 ">
                    {animal.type_name}
                  </p>
                  <p className="pt-4 text-sm font-semibold text-gray-800">
                    Vikt: {animal.weight}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <AddAnimal types={types}></AddAnimal>
    </div>
  )
}
