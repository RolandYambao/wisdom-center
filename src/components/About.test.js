import { render, screen } from '@testing-library/react';
import About from './About';

test('Search for Text', () => {
    render(<About />);
    const textElement = screen.getByText(/About the Wisdom Center/i);
    expect(textElement).toBeInTheDocument();
});

test('Search for Text', () => {
    render(<About />);
    const textElement = screen.getByText(/The Center Brings Truth and Understanding to All/i);
    expect(textElement).toBeInTheDocument();
});

test('Search for Text', () => {
    render(<About />);
    const textElement = screen.getByText(/Mission and Vision/i);
    expect(textElement).toBeInTheDocument();
});

test('Search for Text', () => {
    render(<About />);
    const textElement = screen.getByText(/To bring wisdom to the world through the sharing of wise quotes from great figures./i);
    expect(textElement).toBeInTheDocument();
});

test('Search for Text', () => {
    render(<About />);
    const textElement = screen.getByText(/See the Truth of the World/i);
    expect(textElement).toBeInTheDocument();
});

test('Search for Text', () => {
    render(<About />);
    const textElement = screen.getByText(/The words of the wise will always guide the ignorant./i);
    expect(textElement).toBeInTheDocument();
});

test('Search for Text', () => {
    render(<About />);
    const textElement = screen.getByText(/Building a Better Future/i);
    expect(textElement).toBeInTheDocument();
});

test('Search for Text', () => {
    render(<About />);
    const textElement = screen.getByText(/Our words shall inspire untold millions to see the brightness of life./i);
    expect(textElement).toBeInTheDocument();
});

test('Search for Text', () => {
    render(<About />);
    const textElement = screen.getByText(/Subscribe to the Wisdom Center/i);
    expect(textElement).toBeInTheDocument();
});

test('Search for Text', () => {
    render(<About />);
    const textElement = screen.getByText(/Our weekly updates shall bring more knowledge to all./i);
    expect(textElement).toBeInTheDocument();
});
