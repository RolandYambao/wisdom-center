import { render, screen } from '@testing-library/react';
import Homepage from './Homepage';

test('Search for Text', () => {
    render(<Homepage />);
    const textElement = screen.getByText(/The Place to Find Higher Knowledge/i);
    expect(textElement).toBeInTheDocument();
});

test('Search for Text', () => {
    render(<Homepage />);
    const textElement = screen.getByText(/Knowledge from all Ages/i);
    expect(textElement).toBeInTheDocument();
});

test('Search for Text', () => {
    render(<Homepage />);
    const textElement = screen.getByText(/Here in the Wisdom Center/i);
    expect(textElement).toBeInTheDocument();
});

test('Search for Text', () => {
    render(<Homepage />);
    const textElement = screen.getByText(/necessary knowledge/i);
    expect(textElement).toBeInTheDocument();
});

test('Search for Text', () => {
    render(<Homepage />);
    const textElement = screen.getByText(/in the center you will find/i);
    expect(textElement).toBeInTheDocument();
});

test('Search for Text', () => {
    render(<Homepage />);
    const textElement = screen.getByText(/Famous Quotes/i);
    expect(textElement).toBeInTheDocument();
});

test('Search for Text', () => {
    render(<Homepage />);
    const textElement = screen.getByText(/Inspirational Quotes/i);
    expect(textElement).toBeInTheDocument();
});

test('Search for Text', () => {
    render(<Homepage />);
    const textElement = screen.getByText(/Amusing Quotes/i);
    expect(textElement).toBeInTheDocument();
});

test('Search for Text', () => {
    render(<Homepage />);
    const textElement = screen.getByText(/Disturbing Quotes/i);
    expect(textElement).toBeInTheDocument();
});

test('Search for Text', () => {
    render(<Homepage />);
    const textElement = screen.getByText(/Click on the "About" tab to learn more about the Wisdom Center and its mission for the world./i);
    expect(textElement).toBeInTheDocument();
});
