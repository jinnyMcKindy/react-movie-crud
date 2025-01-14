import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Pagination from '../ui/Pagination';

describe('Pagination Component', () => {
    let setCurrentPage;

    beforeEach(() => {
        setCurrentPage = vi.fn();
    });

    test('renders pagination with current page and total pages', () => {
        render(<Pagination currentPage={1} totalPages={5} setCurrentPage={setCurrentPage} />);
        expect(screen.getByText('Page 1 of 5')).toBeInTheDocument();
    });

    test('disables "Previous" button on the first page', () => {
        render(<Pagination currentPage={1} totalPages={5} setCurrentPage={setCurrentPage} />);
        expect(screen.getByText('Previous')).toBeDisabled();
    });

    test('disables "Next" button on the last page', () => {
        render(<Pagination currentPage={5} totalPages={5} setCurrentPage={setCurrentPage} />);
        expect(screen.getByText('Next')).toBeDisabled();
    });

    test('calls setCurrentPage with correct value when "Previous" is clicked', () => {
        render(<Pagination currentPage={2} totalPages={5} setCurrentPage={setCurrentPage} />);
        fireEvent.click(screen.getByText('Previous'));
        expect(setCurrentPage).toHaveBeenCalledWith(expect.any(Function));
        const updateFunction = setCurrentPage.mock.calls[0][0];
        expect(updateFunction(2)).toBe(1);
    });

    test('calls setCurrentPage with correct value when "Next" is clicked', () => {
        render(<Pagination currentPage={2} totalPages={5} setCurrentPage={setCurrentPage} />);
        fireEvent.click(screen.getByText('Next'));
        expect(setCurrentPage).toHaveBeenCalledWith(expect.any(Function));
        const updateFunction = setCurrentPage.mock.calls[0][0];
        expect(updateFunction(2)).toBe(3);
    });
});
