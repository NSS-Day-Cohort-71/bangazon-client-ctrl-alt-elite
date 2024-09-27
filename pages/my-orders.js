import { useEffect, useState } from 'react'
import CardLayout from '../components/card-layout'
import Layout from '../components/layout'
import Navbar from '../components/navbar'
import Table from '../components/table'
import { getOrders } from '../data/orders'

export default function Orders() {
  const [orders, setOrders] = useState([])
  const headers = ['Order Date', 'Total', 'Payment Method']

  useEffect(() => {
    getOrders().then(ordersData => {
      if (ordersData) {
        setOrders(ordersData)
      }
    })
  }, [])

  return (
    <>
      <CardLayout title="Your Orders">
        <Table headers={headers}>
          {
            orders.map((order) => (
              <tr key={order.id}>
                <td>{order.created_date}</td> {/* Display order date */}
                <td>{order.total > 0 ? `$${order.total}` : '$0.00'}</td> {/* Display 0 if total is missing or 0 */}
                <td>{order.payment_type || 'No payment method'}</td> {/* Display obscured account or fallback */}
              </tr>
            ))
          }
        </Table>
      </CardLayout>
    </>
  )
}

Orders.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Navbar />
      <section className="container">{page}</section>
    </Layout>
  )
}
