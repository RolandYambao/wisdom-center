import { render, screen } from '@testing-library/react';
import Store from "./Store";

test('Search for Text', () => {
    render(<Store />);
    const textElement = screen.getByText(/Containing many books of quotes and posters of wise words./i);
    expect(textElement).toBeInTheDocument();
});

test('Search for Text', () => {
    render(<Store />);
    const textElement = screen.getByText(/Videos, Books, and Clothing of Wisdom is available for all who purchase this mighty bundle./i);
    expect(textElement).toBeInTheDocument();
});

test('Search for Text', () => {
    render(<Store />);
    const textElement = screen.getByText(/See the light itself and unlock the secrets of the universe with this heavenly gift./i);
    expect(textElement).toBeInTheDocument();
});

test('Search for Text', () => {
    render(<Store />);
    const textElement = screen.getByText(/Where knowledge can be bought/i);
    expect(textElement).toBeInTheDocument();
});

test('Search for Text', () => {
    render(<Store />);
    const textElement = screen.getByText(/See our latest words of wisdom./i);
    expect(textElement).toBeInTheDocument();
});

test('Search for Text', () => {
    render(<Store />);
    const textElement = screen.getByText(/Wise Bargain/i);
    expect(textElement).toBeInTheDocument();
});

test('Search for Text', () => {
    render(<Store />);
    const textElement = screen.getByText(/Knowledge Bundle/i);
    expect(textElement).toBeInTheDocument();
});

test('Search for Text', () => {
    render(<Store />);
    const textElement = screen.getByText(/Majestic Bundle/i);
    expect(textElement).toBeInTheDocument();
});

test('Search for Text', () => {
    render(<Store />);
    const textElement = screen.getByText(/Divine Bundle/i);
    expect(textElement).toBeInTheDocument();
});
