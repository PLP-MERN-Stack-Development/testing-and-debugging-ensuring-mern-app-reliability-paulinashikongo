import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import BugForm from '../components/BugForm'
import * as api from '../api'

test('shows validation error when title is empty', async () => {
  render(<BugForm />)
  fireEvent.click(screen.getByText(/create/i))
  expect(await screen.findByRole('alert')).toHaveTextContent(/title is required/i)
})

test('calls API and clears inputs on success', async () => {
  const spy = jest.spyOn(api, 'createBug').mockResolvedValue({ _id:'1', title:'T' })
  const onCreated = jest.fn()
  render(<BugForm onCreated={onCreated} />)
  fireEvent.change(screen.getByPlaceholderText(/title/i), { target:{ value:'T' } })
  fireEvent.click(screen.getByText(/create/i))
  await waitFor(() => expect(spy).toHaveBeenCalled())
  expect(onCreated).toHaveBeenCalled()
  spy.mockRestore()
})
