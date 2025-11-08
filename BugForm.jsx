import { useState } from 'react'
import { createBug } from '../api'

export default function BugForm({ onCreated }) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [error, setError] = useState(null)
  const submit = async (e) => {
    e.preventDefault()
    setError(null)
    if (!title.trim()) { setError('Title is required'); return }
    try {
      const bug = await createBug({ title, description })
      setTitle(''); setDescription('')
      onCreated?.(bug)
    } catch (err) {
      setError(err.message)
    }
  }
  return (
    <form onSubmit={submit}>
      <h3>Report Bug</h3>
      {error && <div role="alert">{error}</div>}
      <input placeholder="Title" value={title} onChange={e=>setTitle(e.target.value)} />
      <textarea placeholder="Description" value={description} onChange={e=>setDescription(e.target.value)} />
      <button type="submit">Create</button>
    </form>
  )
}
