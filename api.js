export async function listBugs() {
  const res = await fetch('/api/bugs')
  if (!res.ok) throw new Error('Failed to load bugs')
  return res.json()
}
export async function createBug(data) {
  const res = await fetch('/api/bugs', {
    method: 'POST',
    headers: {'Content-Type':'application/json'},
    body: JSON.stringify(data)
  })
  if (!res.ok) throw new Error('Failed to create bug')
  return res.json()
}
