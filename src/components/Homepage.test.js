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
