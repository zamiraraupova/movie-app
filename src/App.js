import { useState, useEffect } from "react";
import ModalForCharacter from "./components/modal"
import PaginationOfMovies from "./components/pagination"
import Main from "./components/main"
import Search from "./components/search"
import DropForSort from "./components/dropDownSort"
import DropForFilterByGender from "./components/dropForFilterGender"
import filterByGender from "./common/filterByGender"
import './App.css';

function App() {
  const imageUrl = "https://image.tmdb.org/t/p/w185"
  const [moviesData, setMoviesData] = useState([])
  const [loading, setLoading] = useState(false)
  const [searchingActor, setSearchingActor] = useState("")
  const [genderSelect, setGenderSelect] = useState("")
  const [dropDownState, setDropDownState] = useState(false)
  const [sortBy, setSortBy] = useState("")
  const [page, setPage] = useState(1)
  const [sortByState, setSortByState] = useState(false)
  const [modal, setModal] = useState(false)
  const [modalData, setModalData] = useState("") //{}
  const [ascDesc, setAscDesc] = useState(false)

  useEffect(() => {
    const movieAPi = `https://api.themoviedb.org/3/person/popular?api_key=df8b08ecb436696fee41a00f8d87a540&language=en&page=${page}`
    setTimeout(() => {
      fetch(movieAPi)
        .then(res => res.json())
        .then(data => {
          setMoviesData(data.results)
          setLoading(true)
          setSortBy("")
          setGenderSelect("")
        })
    }, 500)
  }, [page])

  const handleSearch = (event) => {
    setSearchingActor(event.target.value)
  }

  const handleGenderSelect = (event) => {
    // console.log(event.target.value, "<<<")
    setGenderSelect(event.target.value)
  }
  const showOrHideDropDown = () => {
    setDropDownState(!dropDownState)
  }
  const updatePage = (pageNumber) => {
    setPage(pageNumber)
    setLoading(false)
  }
  const showDetails = (movieId) => {
    const dataForModal = moviesData.filter(item => item.id === movieId) //[{}]
    setModalData(dataForModal[0])
    setModal(!modal)
  }
  const showOrHideModal = () => {
    setModal(!modal)
  }
  const handleSortBy = (e) => {
    setAscDesc(!ascDesc)
    setSortBy(e.target.value)
  }
  const showOrHideSortBy = () => {

    setSortByState(!sortByState)
  }

  const filtered = filterByGender(moviesData, genderSelect).filter(movie => movie.name.toLowerCase().includes(searchingActor.toLowerCase())) //[{},{},{}]

  const sorted = filtered.sort((a, b) => {
    if (a.name > b.name) {
      return ascDesc ? 1 : -1
    } else if (a.name < b.name) {
      return ascDesc ? -1 : 1
    }
    return 1
  })
  return (
    <div className="App">
      <div className="inputComponent">
        <Search handleSearch={handleSearch} />

        <DropForFilterByGender dropDownState={dropDownState} showOrHideDropDown={showOrHideDropDown} handleGenderSelect={handleGenderSelect} />
        <DropForSort sortByState={sortByState} showOrHideSortBy={showOrHideSortBy} handleSortBy={handleSortBy} />
      </div>
      <div>
        <PaginationOfMovies updatePage={updatePage} page={page} />
      </div>
      <Main loading={loading} sorted={sorted} imageUrl={imageUrl} showDetails={showDetails} />
      {modalData && <ModalForCharacter modal={modal} showOrHideModal={showOrHideModal} modalData={modalData} />}
    </div>
  );
}

export default App;