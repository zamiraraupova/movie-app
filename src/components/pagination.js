import React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

function PaginationOfMovies({ updatePage, page }) {
    return (
        <Pagination size="lg" aria-label="Page navigation example">
            <PaginationItem>
                <PaginationLink disabled={page === 1 ? true : false} previous onClick={() => updatePage(page - 1)} />
            </PaginationItem>
            <PaginationItem>
                <PaginationLink onClick={() => updatePage(1)}>
                    1
                </PaginationLink>
            </PaginationItem>
            <PaginationItem>
                <PaginationLink onClick={() => updatePage(2)}>
                    2
                </PaginationLink>
            </PaginationItem>
            <PaginationItem>
                <PaginationLink onClick={() => updatePage(3)}>
                    3
                </PaginationLink>
            </PaginationItem>
            <PaginationItem>
                <PaginationLink onClick={() => updatePage(4)}>
                    4
                </PaginationLink>
            </PaginationItem>
            <PaginationItem>
                <PaginationLink onClick={() => updatePage(5)}>
                    {page <= 5 ? 5 : page}
                </PaginationLink>
            </PaginationItem>
            <PaginationItem>
                <PaginationLink disabled={page >= 500 ? true : false} next onClick={() => updatePage(page + 1)} />
            </PaginationItem>
        </Pagination>
    );

}
export default PaginationOfMovies;