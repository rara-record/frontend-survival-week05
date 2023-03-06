import { render, screen } from '@testing-library/react';
import RestaurantRow from './RestaurantRow';
import fixtures from '../fixtures';

describe('RestaurantRow 테스트', () => {
  const restaurant = fixtures.restaurants[2];

  const renderRestaurantRow = () => {
    render(
      <RestaurantRow
        restaurant={restaurant}
      />,
    );
  };

  it('render RestaurantRow', () => {
    renderRestaurantRow();
    const name = screen.getByText(/혹등고래카레/);
    const category = screen.getByText(/일식/);
    expect(name).toBeInTheDocument();
    expect(category).toBeInTheDocument();
  });
});
