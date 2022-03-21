function Movie({movie}){
    return (
    <div className="col-md-4 col-sm-12">
        <img src={movie.poster_url} className="img-fluid"/>
        <p className="text-center text-light">{movie.title}</p>
    </div>
    );
}

export default Movie;