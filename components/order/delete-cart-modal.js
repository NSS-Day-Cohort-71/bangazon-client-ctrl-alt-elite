import Modal from "../modal"

export default function DeleteFormModal({ showModal, setShowModal, deleteOrder }) {
  
  return (
    <Modal showModal={showModal} setShowModal={setShowModal} title="Confirm Cart Delete">
      <div className="container">
        <p>Are you sure you want to Delete your order?</p>
      </div>
      <>
        <button className="button is-success" onClick={() => deleteOrder()}>Delete Order</button>
        <button className="button" onClick={() => setShowModal(false)}>Cancel</button>
      </>
    </Modal>

  )
}