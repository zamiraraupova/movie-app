import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

function DropForSort({ sortByState, showOrHideSortBy, handleSortBy }) {
    return (
        <Dropdown isOpen={sortByState} toggle={showOrHideSortBy} >
            <DropdownToggle caret>
                Sort By
            </DropdownToggle >
            <DropdownMenu onClick={handleSortBy}>
                <DropdownItem value="popularity">Popularity</DropdownItem>
                <DropdownItem value="name">Name</DropdownItem>
            </DropdownMenu>
        </Dropdown>
    )
}
export default DropForSort;