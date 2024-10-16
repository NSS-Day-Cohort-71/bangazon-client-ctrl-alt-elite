import { Input } from '../../components/form-elements'
import CardLayout from '../card-layout'

export default function StoreForm({ nameEl, descriptionEl, saveEvent, title, router, children }) {
  return (
    <CardLayout title={title}>
      <>
        {children}
        <Input
          id="name"
          refEl={nameEl}
          type="text"
          placeholder="Store Name"
        />
        <textarea placeholder="Add a Description..." className="textarea" ref={descriptionEl}></textarea>
      </>
      <>
        <div className="card-footer-item" onClick={saveEvent}>Save</div>
        <div className="card-footer-item" onClick={() => router.back()}>Cancel</div>
      </>
    </CardLayout>
  )
}


