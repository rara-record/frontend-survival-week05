import { fireEvent, render, screen } from '@testing-library/react';
import Menu from './Menu';
import fixtures from '../fixtures';

const context = describe;

describe('메뉴 컴포넌트 렌더링', () => {
  const { menu } = fixtures.restaurants[0];
  const food = fixtures.restaurants[0].menu[0];
  const renderMenu = () => {
    render(
      <Menu menu={menu} />,
    );
  };

  beforeEach(() => {
    renderMenu();
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  const onSelectMenu = () => {
    fireEvent.click(screen.getAllByText('선택')[0]);
  };

  it('메뉴 컴포넌트가 잘 나오는가.', async () => {
    await screen.getByText(/짜장면/);
    await screen.getByText(/차돌짬뽕/);
    await screen.getByText(/탕수육/);
  });

  context('메뉴를 선택하면, 메뉴가 로컬스토리지에 담긴다', () => {
    it('버튼이 잘 렌더링 되는지', () => {
      expect(screen.getAllByRole('button'));
    });

    it('버튼을 선택하고, 로컬스토리지에 담기', () => {
      jest.spyOn(Object.getPrototypeOf(window.localStorage), 'setItem');
      Object.setPrototypeOf(window.localStorage.setItem, jest.fn());

      onSelectMenu();

      expect(window.localStorage.setItem).toHaveBeenCalledWith('cart', JSON.stringify([food]));
    });
  });
});
