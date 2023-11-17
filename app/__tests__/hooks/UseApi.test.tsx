

import axios from 'axios';
import { render, act } from '@testing-library/react';
import useApi from '@/app/hooks/UseApi';

jest.mock('axios');

type ApiResponse = {
    data: any;
    loading: boolean;
    error: string | null;
  };

describe('useApi', () => {
  it('should fetch data successfully', async () => {
    const mockData = { key: 'value' };
    (axios.get as jest.Mock).mockResolvedValueOnce({ data: mockData });

    let result: ApiResponse | undefined;

    function TestComponent() {
      result = useApi('some-url');
      return null;
    }

    render(<TestComponent />);
    await new Promise((resolve) => setTimeout(resolve, 100));

    expect(result?.loading).toBe(false);
    expect(result?.error).toBe(null);
    expect(result?.data).toEqual(mockData);
  });

  it('should handle errors', async () => {
    const errorMessage = 'Network Error';
    (axios.get as jest.Mock).mockRejectedValueOnce(new Error(errorMessage));

    let result: ApiResponse | undefined;

    function TestComponent() {
      result = useApi('some-url');
      return null;
    }

    render(<TestComponent />);

    await new Promise((resolve) => setTimeout(resolve, 100));

    expect(result?.loading).toBe(false);
    expect(result?.error).toBe(errorMessage);
    expect(result?.data).toBe(null);
  });
});