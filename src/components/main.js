import { Spinner } from "reactstrap"

function Main({ loading, sorted, imageUrl, showDetails }) {
    return (
        <div className="movies" >
            {
                !loading ? <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner> :
                    sorted.map(movie => {
                        const imagePath = `${imageUrl}/${movie.profile_path}` //header/
                        const knownForTitles = movie.known_for.map(title => title.title) //["title","title2","title3"]
                        return (
                            <div className="movie border" key={movie.id} onClick={() => showDetails(movie.id)}>
                                <img className="image" src={imagePath} alt="" />
                                <div>{movie.name}</div>
                                <div className="knownFor">{knownForTitles.join(", ")}</div>
                            </div>
                        )
                    })}
        </div>
    )
}
export default Main;