import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import HW from './HW22Cart';

test('should HW22Cart', () => {
  const {container, getByText} = render(<HW />);
  
  // container.querySelector('input[name="蘋果"]') 沒東西
  // 你去 chrome 的 console 打 document.querySelector('input[name="蘋果"]')
  // 你看有沒有東西
  console.log('有抓到嗎？');
  console.log(container.querySelector('input[name="蘋果"]')); // ← 回傳 null
  // 你要先確保你有抓到東西再執行操作
  // 不要都還沒抓到就開始寫測試
  // 而且你知道 getByText 是用內容來抓東西而不是用 testid 來抓 嗎？

  // userEvent.type(container.querySelector('input[name="蘋果"]'), '1{enter}');
  // userEvent.type(container.querySelector('input[name="橘子"]'), '2{enter}');
  // userEvent.type(container.querySelector('input[name="蓮霧"]'), '3{enter}');
  // userEvent.type(container.querySelector('input[name="葡萄柚"]'), '4{enter}');
  // userEvent.type(container.querySelector('input[name="哈蜜瓜"]'), '5{enter}');

  // expect(getByText('蘋果').textContent).toBe('蘋果 * 1 =20');
  // expect(getByText('橘子').textContent).toBe('橘子 * 2 =50');
  // expect(getByText('蓮霧').textContent).toBe('蓮霧 * 3 =180');
  // expect(getByText('葡萄柚').textContent).toBe('葡萄柚 * 4 =300');
  // expect(getByText('哈蜜瓜').textContent).toBe('哈蜜瓜 * 5 =500');
  // expect(getByText('總金額').textContent).toBe('總金額$ 1050');
});

test.skip('should less & clear', () => {
  const {container, getByTestId,getByText} = render(<HW />);
  userEvent.type(container.querySelector('input[name=蘋果'), '5{enter}');
  expect(getByText('蘋果').textContent).toBe('蘋果 * 5 =100');
  expect(getByTestId('total').textContent).toBe('總金額$ 100');

  userEvent.click(getByTestId('less-蘋果'));
  expect(getByText('蘋果').textContent).toBe('蘋果 * 4 =80');
  expect(getByTestId('total').textContent).toBe('總金額$ 80');

  userEvent.click(getByTestId('clear-蘋果'));
  expect(container).toMatchSnapshot();
});

