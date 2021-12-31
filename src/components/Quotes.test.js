import { render, screen } from '@testing-library/react';
import { QuoteDisplay } from "./QuoteDisplay";

test('Search for Text', () => {
    render(<QuoteDisplay />);
    const textElement = screen.getByText(/Wise Words of Wisdom/i);
    expect(textElement).toBeInTheDocument();
});

test('Search for Text', () => {
    render(<QuoteDisplay />);
    const textElement = screen.getByText(/Enjoy our Main Content/i);
    expect(textElement).toBeInTheDocument();
});

test('Search for Text', () => {
    render(<QuoteDisplay />);
    const textElement = screen.getByText(/Top Quotes/i);
    expect(textElement).toBeInTheDocument();
});

test('Search for Text', () => {
    render(<QuoteDisplay />);
    const textElement = screen.getByText(/Click Here to See Quote Reviews/i);
    expect(textElement).toBeInTheDocument();
});