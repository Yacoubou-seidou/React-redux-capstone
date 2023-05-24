import React from 'react';
import { useSelector } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { render, fireEvent, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Home from '../components/Home';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
}));

describe('<Home />', () => {
  const mockData = [
    { name: 'Test Country 1', flag: 'https://test-country-1-flag.png' },
    { name: 'Test Country 2', flag: 'https://test-country-2-flag.png' },
    { name: 'Test Country 3', flag: 'https://test-country-3-flag.png' },
  ];

  beforeEach(() => {
    useSelector.mockReturnValue({ countryData: mockData });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Should renders correctly', () => {
    const tree = renderer.create(
      <MemoryRouter>
        <Home />
      </MemoryRouter>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Should displays all countries on load', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>,
    );
    const countryImages = screen.getAllByRole('link', { name: /^test country/i });
    expect(countryImages).toHaveLength(mockData.length);
  });

  it('Should filters countries based on search', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>,
    );

    const searchInput = screen.getByPlaceholderText('🔍 Search Country Here');
    fireEvent.change(searchInput, { target: { value: 'test country 2' } });

    const countryImages = screen.getAllByRole('link', { name: /^test country 2/i });
    expect(countryImages).toHaveLength(1);
  });
});
