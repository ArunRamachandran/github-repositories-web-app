import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import App from './App';

test('Full app rendering / navigating', async () => {
  render(<App />, {wrapper: BrowserRouter})
  const user = userEvent.setup()
  // verify page content and title for the default route
  expect(screen.getByText(/GitHub repositories/i)).toBeInTheDocument()
  expect(screen.getByText(/Loading.../)).toBeInTheDocument()

  // eslint-disable-next-line testing-library/prefer-find-by
  await waitFor(() => expect(screen.getByTestId('repository-card-0')).toBeInTheDocument())

  // verify page routing on clicking repository rom dashboard
  await user.click(screen.getByTestId('repository-card-0'))
  expect(screen.getByTestId('additional-details')).toBeInTheDocument()
})

test('landing on a bad page', () => {
  const badRoute = '/error'

  render(
    <MemoryRouter initialEntries={[badRoute]}>
      <App />
    </MemoryRouter>
  )

  expect(screen.getByText(/Something went wrong/)).toBeInTheDocument()
})
