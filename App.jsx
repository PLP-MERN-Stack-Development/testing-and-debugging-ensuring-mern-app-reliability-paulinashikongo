import ErrorBoundary from './components/ErrorBoundary'
import BugForm from './components/BugForm'
import BugList from './components/BugList'
import { useState } from 'react'

export default function App() {
  const [stamp, setStamp] = useState(0)
  return (
    <ErrorBoundary>
      <h2>Bug Tracker</h2>
      <BugForm onCreated={() => setStamp(s => s+1)} />
      {/* quick way to refetch after create: remount BugList */}
      <div key={stamp}><BugList /></div>
    </ErrorBoundary>
  )
}

