import {Link} from "react-router-dom"

function Movie({movie}){
    return (
        <Link to={`/detail/${movie.id}`} className="col-md-4 col-sm-12">

        <img src={movie.poster_url} className="img-fluid"/>
        <p className="text-center text-light">{movie.title}</p>

    </Link>
    );
}

export default Movie;