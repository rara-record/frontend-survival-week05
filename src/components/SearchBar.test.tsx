import { fireEvent, render, screen } from '@testing-library/react';
import SearchBar from './SearchBar';

const context = describe;

describe('렌더링이 잘 되는지 테스트한다', () => {
  const categories = ['한식', '중식', '일식'];
  const filterText = '메가반점';

  const setFilterText = jest.fn();
  const setFilterCategory = jest.fn();

  function renderSearchBar() {
    render(
      <SearchBar
        categories={categories}
        setFilterCategory={setFilterCategory}
        filterText={filterText}
        setFilterText={setFilterText}

      />,
    );
  }

  beforeEach(() => {
    renderSearchBar();
  });

  function onClickButton() {
    fireEvent.click(screen.getByText('한식'));
  }

  it('카테고리 리스트가 잘 나온다. (4개)', async () => {
    const buttonList = await screen.findAllByRole('button');
    expect(buttonList)
      .toHaveLength(4);
  });

  context('카테고리 필터링이 잘 되는지 확인', () => {
    it('한식 버튼을 누르면 setFilterCategory가 호출 된다', () => {
      onClickButton();

      expect(setFilterCategory)
        .toBeCalledWith('한식');
    });
  });
});
