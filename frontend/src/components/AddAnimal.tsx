import { useState } from 'react'
import { Type } from '../../../shared/interfaces'

interface AddAnimalProps {
  types: Array<Type>
}

function AddAnimal(props: AddAnimalProps) {
  const [name, setName] = useState('')
  const [image, setImage] = useState('')
  const [weight, setWeight] = useState('')
  const [type, setSelectedType] = useState('')

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, image, weight, type }),
    }

    try {
      const response = await fetch(
        'http://localhost:3000/api/post',
        requestOptions
      )
      const data = await response.json()
      console.log(data)
    } catch (error) {
      console.error('Error in POST request:', error)
    } finally {
      window.location.reload()
    }
  }

  return (
    <>
      <div className="rounded shadow-md max-w-xl card py-16 px-16 mt-20">
        <form onSubmit={handleSubmit}>
          <div className="space-y-12">
            <div className=" ">
              <h2 className="text-base font-semibold leading-7 text-gray-900">
                Lägg till ett djur
              </h2>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-4">
                  <label
                    htmlFor="animal-name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Djurets namn
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset sm:max-w-md">
                      <input
                        id="animal-name"
                        name="animal-name"
                        onChange={(event) => setName(event.target.value)}
                        value={name}
                        type="text"
                        placeholder="Doris"
                        autoComplete="off"
                        className="block flex-1 border text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 rounded ps-2"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-4">
                  <label
                    htmlFor="animal-type"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Djurtyp
                    <div className="mt-2">
                      <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset sm:max-w-md">
                        <select
                          id="animal-type"
                          name="animal-type"
                          onChange={(event) =>
                            setSelectedType(event.target.value)
                          }
                          value={type}
                          className="block flex-1 border text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 rounded ps-2"
                        >
                          <option value="">Välj en typ</option>

                          {props.types.map((item) => (
                            <option key={item.name} value={item.id}>
                              {item.name}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </label>
                </div>
              </div>

              <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-4">
                  <label
                    htmlFor="animal-weight"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Vikt
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset sm:max-w-md">
                      <input
                        id="animal-weight"
                        name="animal-weight"
                        onChange={(event) => setWeight(event.target.value)}
                        value={weight}
                        type="text"
                        placeholder="500 kg"
                        autoComplete="off"
                        className="block flex-1 border text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 rounded ps-2"
                      />
                    </div>
                  </div>
                </div>

                <div className="sm:col-span-4">
                  <label
                    htmlFor="animal-image"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Bildlänk
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset sm:max-w-md">
                      <input
                        id="animal-image"
                        name="animal-image"
                        onChange={(event) => setImage(event.target.value)}
                        value={image}
                        type="text"
                        placeholder="https://cdn.pixabay.com/photo/2016/03/27/18/10/bear-1283347_1280.jpg"
                        autoComplete="off"
                        className="block flex-1 border text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 rounded ps-2"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-end gap-x-6">
              <input
                type="submit"
                value={'Lägg till'}
                className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              />
            </div>
          </div>
        </form>
      </div>
    </>
  )
}
export default AddAnimal
