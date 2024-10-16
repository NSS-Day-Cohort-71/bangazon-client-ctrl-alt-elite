import { fetchWithResponse, fetchWithoutResponse } from './fetcher'

export function getCart() {
  return fetchWithResponse('cart', {
    headers: {
      Authorization: `Token ${localStorage.getItem('token')}`
    }
  })
}

export function getOrders() {
  return fetchWithResponse('orders', {
    headers: {
      Authorization: `Token ${localStorage.getItem('token')}`
    }
  })
}

export function completeCurrentOrder(orderId, paymentTypeId) {
  return fetchWithResponse(`orders/${orderId}`, {
    method: 'PUT',
    headers: {
      Authorization: `Token ${localStorage.getItem('token')}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({paymentTypeId})
  })
}

export function deleteCurrentOrder() {
  return fetchWithoutResponse(`profile/cart`, {
    method: 'DELETE',
    headers: {
      Authorization: `Token ${localStorage.getItem('token')}` 
    }
  })
}