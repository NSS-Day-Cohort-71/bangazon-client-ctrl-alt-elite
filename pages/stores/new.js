import { useRouter } from 'next/router'
import { useRef } from 'react'
import Layout from '../../components/layout'
import Navbar from '../../components/navbar'
import { addStore } from '../../data/stores'
import { useAppContext } from '../../context/state'
import StoreForm from '../../components/store/form'

export default function NewStore() {
  const { setProfile, profile } = useAppContext()

  const nameEl = useRef()
  const descriptionEl = useRef()
  const router = useRouter()

  const saveStore = () => {
    addStore({
      name: nameEl.current.value,
      description: descriptionEl.current.value
    }).then((res) => {
      console.log("Full response:", res); 
      if (res &&  res.id) {
      setProfile({
        ...profile,
        store: res
      })
      router.push(`/stores/${res.id}`)
    } else {
      console.error('Store creation failed, missing store ID.')
    }
    }).catch((error) => {
      console.error('Error creating store:', error);
    })
  }

  return (
    <StoreForm nameEl={nameEl} descriptionEl={descriptionEl} saveEvent={saveStore} router={router} title="Create your store">
      <p>Give your new store a name and description. Then add products on the next page</p>
    </StoreForm>
  )
}

NewStore.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Navbar />
      {page}
    </Layout>
  )
}
