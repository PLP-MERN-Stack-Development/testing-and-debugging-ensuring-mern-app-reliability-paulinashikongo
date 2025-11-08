import { render, screen, waitFor } from '@testing-library/react'
import BugList from '../components/BugList'
import * as api from '../api'

test('renders empty state', async () => {
  jest.spyOn(api, 'listBugs').mockResolvedValue([])
  render(<BugList />)
  await waitFor(() => expect(screen.getByText(/no bugs yet/i)).toBeInTheDocument())
})

test('renders list of bugs', async () => {
  jest.spyOn(api, 'listBugs').mockResolvedValue([{ _id:'1', title:'A', status:'open' }])
  render(<BugList />)
  await waitFor(() => expect(screen.getByText('A')).toBeInTheDocument())
})
