import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import { AdditionalDetails } from './AdditionalDetails';
import { MemoryRouter } from 'react-router-dom';

describe('AdditionalDetails page test', () => {
    it('should display data in additional details page', async () => {

        render(
            <MemoryRouter initialEntries={[{ 
                pathname: '/details', 
                search: '?id=12345',
                state: {
                    repository: {
                        full_name: 'Test-Repo',
                        description: 'Test',
                        svn_url: 'http://link',
                        language: 'JavaScript',
                        forks: 10,
                        open_issues: 2,
                        watchers: 3
                    }
                } }]}>
                <AdditionalDetails />
            </MemoryRouter>
        )

        expect(screen.getByTestId('additional-details')).toBeInTheDocument()
        expect(screen.getByTestId('repository-title')).toHaveTextContent('Test-Repo')
    })
})