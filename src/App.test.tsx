import { render, screen, waitFor } from '@testing-library/react';

import App from './App';
import fixtures from './fixtures';

jest.mock('./hooks/useFetchRestaurants', () => () => fixtures.restaurants);

describe('App ', () => {
  it('renders without crash', async () => {
    render(<App />);

    await waitFor(() => {
      screen.getByText(/차돌짬뽕/);
    });
  });
});
