import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { sortInputNumbers } from './sortInputNumbers';


test('render app', () => {
  render(<App />);
  const linkElement = screen.getByText(/push/i);
  expect(linkElement).toBeInTheDocument();


});


test("test-array", () => {
  const result = sortInputNumbers([1, 2, -1])
  const result2 = sortInputNumbers([])
  const result3 = sortInputNumbers([NaN, 1, 2, 9999, 9, -9])
  expect(result).toBe(0)
  expect(result2).toBe("no numbers were added")
  expect(result3).toBe(-8)
})