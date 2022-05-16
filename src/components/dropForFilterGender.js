import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const DropForFilterByGender = ({ dropDownState, showOrHideDropDown, handleGenderSelect }) => {
    return (
        <Dropdown isOpen={dropDownState} toggle={showOrHideDropDown} style={{ marginRight: "10px" }}>
            <DropdownToggle caret>
                Select Gender
            </DropdownToggle >
            <DropdownMenu onClick={handleGenderSelect}>
                <DropdownItem value="All">All</DropdownItem>
                <DropdownItem value="male">Male</DropdownItem>
                <DropdownItem value="female">Female </DropdownItem>
            </DropdownMenu>
        </Dropdown>
    )
}

export default DropForFilterByGender;