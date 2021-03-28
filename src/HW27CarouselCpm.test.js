import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import HW from'./HW27CarouselCpm';

jest.useFakeTimers();

test('should HW27CarouselCpm', () => {
  act(() => {
    const {container } = render(
      <HW
        time={1500}
        isMoving={true}
      >
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </HW>
    );
    jest.advanceTimersByTime(1500);
    expect(container).toMatchSnapshot();
    jest.advanceTimersByTime(1500);
    expect(container).toMatchSnapshot();
    jest.advanceTimersByTime(1500);
    expect(container).toMatchSnapshot();
  });
});
