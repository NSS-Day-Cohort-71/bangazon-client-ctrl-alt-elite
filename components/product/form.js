import { useEffect, useState } from 'react'
import { getCategories } from '../../data/products'
import CardLayout from '../card-layout'
import { Textarea, Select, Input } from '../form-elements'

export default function ProductForm({ formEl, saveEvent, title, router }) {
  const [categories, setCategories] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    getCategories()
      .then(catData => {
        setCategories(catData)
        setIsLoading(false)
      })
      .catch(err => {
        console.error("Failed to fetch categories:", err)
        setError("Failed to load categories. Please try again later.")
        setIsLoading(false)
      })
  }, [])

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>{error}</div>

  return (
    <CardLayout title={title}>
      <form ref={formEl}>
        <Input
          id="name"
          label="Name"
        />
        <Textarea
          id="description"
          label="Description"
        />
        <Select
          id="category"
          options={categories}
          label="Category"
          title="Select a Category"
        />
        <Input
          id="price"
          label="Price"
        />
        <Input
          id="location"
          label="Location"
        />
        <Input
          id="quantity"
          label="Quantity"
          type="number"
        />
      </form>
      <>
        <a className="card-footer-item" onClick={saveEvent}>Save</a>
        <a className="card-footer-item" onClick={() => router.back()}>Cancel</a>
      </>
    </CardLayout>
  )
}