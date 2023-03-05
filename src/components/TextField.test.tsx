import { fireEvent, render, screen } from '@testing-library/react';
import TextField from './TextField';

const context = describe;
describe('TextField', () => {
  const label = '검색';
  const text = '차돌짬뽕';

  const setText = jest.fn();

  beforeEach(() => {
    setText.mockClear();
  });

  function renderTextField() {
    render(
      <TextField
        label={label}
        placeholder="input your name"
        text={text}
        setText={setText}
      />,
    );
  }

  beforeEach(() => {
    renderTextField();
  });

  function inputTextField(value: string) {
    fireEvent.change(screen.getByLabelText(label), {
      target: { value },
    });
  }

  it('렌더링이 잘 되는지 테스트', () => {
    screen.getByLabelText('검색');
  });

  context('검색어를 입력했을 때', () => {
    it('이벤트 함수가 실행되고, setText함수가 실행된다.', () => {
      inputTextField('차돌 짬뽕');

      expect(setText)
        .toBeCalledWith('차돌 짬뽕');
    });
  });
});
