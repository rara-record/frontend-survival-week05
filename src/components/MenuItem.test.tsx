import { render, screen } from '@testing-library/react';
import MenuItem from './MenuItem';
import fixtures from '../fixtures';

describe('메뉴들이 잘 나오는지', () => {
  function renderMenuItems() {
    render( // render 함수를 꼭 써줄것;!!!!!!!!!!!!
      <MenuItem
        food={fixtures.restaurants[0].menu[0]}
      />,
    );
  }

  it('메뉴 아이템들이 잘 보여진다', () => {
    renderMenuItems();
    const name = screen.getByText(/짜장면/);
    const price = screen.getByText(/8,000/);
    expect(name).toBeInTheDocument();
    expect(price).toBeInTheDocument();
  });
});
