import { renderHook, act } from '@testing-library/react';
import useSearch from '../hooks/useSearch';
import { vi } from 'vitest';

describe('useSearch Hook', () => {
  test('initializes with the provided initial query', () => {
    const { result } = renderHook(() => useSearch('initial query'));
    expect(result.current.query).toBe('initial query');
    expect(result.current.debouncedQuery).toBe('initial query');
  });

  test('updates query and debouncedQuery correctly', () => {
    vi.useFakeTimers();
    const { result } = renderHook(() => useSearch(''));

    act(() => {
      result.current.setQuery('new query');
    });

    expect(result.current.query).toBe('new query');
    expect(result.current.debouncedQuery).toBe('');

    act(() => {
      vi.advanceTimersByTime(500);
    });

    expect(result.current.debouncedQuery).toBe('new query');
  });
});
