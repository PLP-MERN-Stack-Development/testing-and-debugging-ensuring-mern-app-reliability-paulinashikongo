import { useEffect, useState } from 'react'
import { listBugs } from '../api'
import StatusBadge from './StatusBadge'

export default function BugList() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    (async () => {
      try {
        setLoading(true)
        const data = await listBugs()
        setItems(data)
      } catch (e) {
        setError(e.message)
      } finally {
        setLoading(false)
      }
    })()
  }, [])

  if (loading) return <p>Loading…</p>
  if (error) return <p role="alert">{error}</p>
  if (items.length === 0) return <p>No bugs yet.</p>

  return (
    <ul>
      {items.map(b => (
        <li key={b._id}>
          <strong>{b.title}</strong> — <StatusBadge status={b.status} />
        </li>
      ))}
    </ul>
  )
}
