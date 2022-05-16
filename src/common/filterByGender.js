function filterByGender(moviesData, genderSelect) {
    const ffiltered = moviesData.filter(movie => {
        if (genderSelect === "male") {
            return movie.gender === 2
        } else if (genderSelect === "female") {
            return movie.gender === 1
        }
        return movie
    })
    return ffiltered
}

export default filterByGender;