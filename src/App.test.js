import { render, screen } from '@testing-library/react';
import App from './App';

afterEach(() => {
  jest.clearAllMocks();
  jest.resetModules();
});


test('renders Proyecto integracion continua con Jenkins', () => {
  render(<App />);
  const linkElement = screen.getByText(/Proyecto integracion continua con Jenkins/i);
  expect(linkElement).toBeInTheDocument();
});

afterAll(done => {
  done()
})

