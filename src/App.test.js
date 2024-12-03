import { render, screen } from '@testing-library/react';
import App from './App';

afterEach(() => {
  jest.clearAllMocks();
  jest.resetModules();
});


test('renders learn Jenkins link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn Jenkins/i);
  expect(linkElement).toBeInTheDocument();
});
