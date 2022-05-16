import { DebounceInput } from 'react-debounce-input';

function Search({ handleSearch }) {
    return (
        <DebounceInput
            className="mx-5"
            minLength={2}
            debounceTimeout={1000}
            onChange={handleSearch}
        />
    )
}

export default Search;