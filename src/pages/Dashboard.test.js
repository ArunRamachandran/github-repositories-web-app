import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import { Dashboard } from './Dashboard';
import { BrowserRouter } from 'react-router-dom';

describe('Dashboard page rendering', () => {
    it('should render Dashboard page', async () => {
        render(<Dashboard />, {wrapper: BrowserRouter})

        // verify loading screen
        expect(screen.getByText(/Loading.../)).toBeInTheDocument()
        await screen.findByTestId('repository-card-0')
    })
})