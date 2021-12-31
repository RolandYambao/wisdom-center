import { render, screen } from '@testing-library/react';
import Contact from "./Contact";

test('Search for Text', () => {
    render(<Contact />);
    const textElement = screen.getByText(/Contact Us/i);
    expect(textElement).toBeInTheDocument();
});

test('Search for Text', () => {
    render(<Contact />);
    const textElement = screen.getByText(/Send a message or words of wisdom to the Wisdom Center./i);
    expect(textElement).toBeInTheDocument();
});

test('Search for Text', () => {
    render(<Contact />);
    const textElement = screen.getByText(/Name/i);
    expect(textElement).toBeInTheDocument();
});

test('Search for Text', () => {
    render(<Contact />);
    const textElement = screen.getByText(/Email/i);
    expect(textElement).toBeInTheDocument();
});

test('Search for Text', () => {
    render(<Contact />);
    const textElement = screen.getByText(/Send Message/i);
    expect(textElement).toBeInTheDocument();
});