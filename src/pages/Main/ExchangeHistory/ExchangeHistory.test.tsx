import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import ExchangeHistory from "./index";
import * as GlobalService from "services/index";

const mockResult = {
  msg: '',
  url: '',
  base: 'EUR',
  end_date: '2023/01/04',
  start_date: '2022/12/27',
  rates: {
    '2023/01/04': {
      'EUR': 1,
      'USD': 0.98,
    },
    '2023/01/03': {
      'EUR': 1,
      'USD': 0.976,
    },
    '2023/01/02': {
      'EUR': 1,
      'USD': 0.978,
    },
  },
  success: true,
  timeseries: true
};

describe("Exchange History tests", () => {
  const spyService = jest.spyOn(GlobalService, "getExchangeHistory");

  it("should call get history api at first render", () => {
    render(<ExchangeHistory from="" to="" />);
    expect(spyService).toBeCalled();
  });

  it("should render table at first", () => {
    render(<ExchangeHistory from="" to="" />);
    const tableCell = screen.getByText("Exchange Rate");
    expect(tableCell).toBeInTheDocument();
  });

  it("should render correct results based on return value", async() => {
    render(<ExchangeHistory from="EUR" to="USD" />);
    // @ts-ignore
    spyService.mockResolvedValue({data: mockResult});
    await waitFor(() => {
      expect(screen.queryByText('0.98')).toHaveLength(2);
      expect(screen.getByText('0.978')).toBeInTheDocument();
      expect(screen.queryByText('0.976')).toHaveLength(2);
    })
  });
});
