import { render, screen } from '@testing-library/react';
import SearchBar from './SearchBar';

const context = describe;

describe('렌더링이 잘 되는지 테스트한다', () => {
  const categories = ['한식', '중식', '일식'];
  const filterText = '메가반점';

  const setFilterText = jest.fn();
  const setFilterCategory = jest.fn();

  beforeEach(() => {
    setFilterText.mockClear();
  });

  it('카테고리 리스트가 잘 나온다. (4개)', async () => {
    render(<SearchBar
      categories={categories}
      filterText={filterText}
      setFilterText={setFilterText}
      setFilterCategory={setFilterCategory}
    />);
    const buttonList = await screen.findAllByRole('button');
    expect(buttonList)
      .toHaveLength(4);
  });
});
