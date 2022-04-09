import { collection, onSnapshot, query } from 'firebase/firestore'
import { db } from 'lib/firebase-client'
import * as React from 'react'
import { IUser } from 'services/getUser'

export default function useSummaryHook() {
  const [products, setProducts] = React.useState(0)
  const [users, setUsers] = React.useState(0)
  const [images, setImages] = React.useState(0)
  const [orders, setOrders] = React.useState(0)
  const [categories, setCategories] = React.useState(0)
  const [brands, setBrands] = React.useState(0)
  const [vendors, setVendors] = React.useState(0)
  const [transactions, setTransactions] = React.useState(0)
  const [latestUsers, setLatestUsers] = React.useState<IUser[]>([])

  React.useEffect(() => {
    const ref = collection(db, 'products')
    const q = query(ref)
    const unsubscribe = onSnapshot(q, snap => setProducts(snap.size))
    return () => unsubscribe()
  }, [])

  React.useEffect(() => {
    const ref = collection(db, 'images')
    const q = query(ref)
    const unsubscribe = onSnapshot(q, snap => setImages(snap.size))
    return () => unsubscribe()
  }, [])

  React.useEffect(() => {
    const ref = collection(db, 'users')
    const q = query(ref)
    const unsubscribe = onSnapshot(q, snap => setUsers(snap.size))
    return () => unsubscribe()
  }, [])

  React.useEffect(() => {
    const ref = collection(db, 'orders')
    const q = query(ref)
    const unsubscribe = onSnapshot(q, snap => setOrders(snap.size))
    return () => unsubscribe()
  }, [])

  React.useEffect(() => {
    const ref = collection(db, 'categories')
    const q = query(ref)
    const unsubscribe = onSnapshot(q, snap => setCategories(snap.size))
    return () => unsubscribe()
  }, [])

  React.useEffect(() => {
    const ref = collection(db, 'brands')
    const q = query(ref)
    const unsubscribe = onSnapshot(q, snap => setBrands(snap.size))
    return () => unsubscribe()
  }, [])

  React.useEffect(() => {
    const ref = collection(db, 'vendors')
    const q = query(ref)
    const unsubscribe = onSnapshot(q, snap => setVendors(snap.size))
    return () => unsubscribe()
  }, [])

  React.useEffect(() => {
    const ref = collection(db, 'transactions')
    const q = query(ref)
    const unsubscribe = onSnapshot(q, snap => setTransactions(snap.size))
    return () => unsubscribe()
  }, [])

  React.useEffect(() => {
    const ref = collection(db, 'users')
    const q = query(ref)
    const unsubscribe = onSnapshot(q, snap => {
      const usersData = snap.docs.map(doc => ({
        id: doc.id,
        ...(doc.data() as IUser),
      }))
      setLatestUsers(usersData)
    })
    return () => unsubscribe()
  }, [])

  return {
    products,
    users,
    images,
    orders,
    categories,
    brands,
    vendors,
    transactions,
    latestUsers,
  }
}
