export default function StatusBadge({ status }) {
  const color = { open:'#d9534f', 'in-progress':'#f0ad4e', resolved:'#5cb85c' }[status] || '#777'
  return <span style={{background:color, color:'#fff', padding:'2px 6px', borderRadius:4}}>{status}</span>
}
