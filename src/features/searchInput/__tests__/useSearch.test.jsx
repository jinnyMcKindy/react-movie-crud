import React from 'react';
import { renderHook, act } from '@testing-library/react';
import { Provider } from 'react-redux';
import { vi } from 'vitest';

import useSearch from '../hooks/useSearch';
import { configureStore } from '@reduxjs/toolkit';
import searchReducer from '../lib/searchSlice';

const renderHookWithProvider = (store) => {
  return renderHook(() => useSearch(), {
    wrapper: ({ children }) => <Provider store={store}>{children}</Provider>,
  });
};

describe('useSearch Hook', () => {
  let store;

  beforeEach(() => {
    vi.useFakeTimers();
    store = configureStore({
      reducer: {
        search: searchReducer,
      },
      preloadedState: {
        search: { query: 'test', debouncedQuery: 'test' },
      },
    });
  });

  afterEach(() => {
    vi.clearAllTimers();
    vi.useRealTimers();
  });
  
  test('updates query and debouncedQuery correctly', async () => {
    const { result } = renderHookWithProvider(store);

    act(() => {
      result.current.updateQuery('new query');
    });

    expect(store.getState().search.query).toBe('new query');
    expect(store.getState().search.debouncedQuery).toBe('test');

    act(() => {
      vi.advanceTimersByTime(500);
    });

    expect(store.getState().search.debouncedQuery).toBe('new query');

  });

});
