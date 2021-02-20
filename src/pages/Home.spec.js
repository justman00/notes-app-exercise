import React from 'react';
import { render } from '@testing-library/react';
import { useSelector as mockUseSelector } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import Home from './Home';

jest.mock('react-redux');

describe('<Home />', () => {
  // cleanup
  afterAll(() => {
    jest.resetAllMocks();
  });

  it('should render the loading state', () => {
    mockUseSelector.mockReturnValue({ loading: true });
    const { getByText } = render(<Home />);

    const loadingElement = getByText(/loading.../i);

    expect(loadingElement).toBeVisible();
  });

  it('should render the a list of 2 elements', () => {
    mockUseSelector.mockReturnValue({
      notes: [
        {
          ref: {
            value: {
              id: 1,
            },
          },
          data: {
            title: 'note 1',
            content: 'note 1 content',
          },
        },
        {
          ref: {
            value: {
              id: 2,
            },
          },
          data: {
            title: 'note 2',
            content: 'note 2 content',
          },
        },
      ],
    });
    const { getAllByTestId, container } = render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    const cardElements = getAllByTestId('note-card');

    expect(cardElements).toHaveLength(2);
  });

  it('should render with corrupted data', () => {
    mockUseSelector.mockReturnValue({
      notes: [
        {
          ref: {
            value: {
              id: 1,
            },
          },
          data: {
            title: 'note 1',
            content: 'note 1 content',
          },
        },
        {
          ref: {
            value: {
              id: 2,
            },
          },
          data: {},
        },
      ],
    });
    const { getAllByTestId } = render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    const cardElements = getAllByTestId('note-card');

    expect(cardElements).toHaveLength(1);
  });
});
