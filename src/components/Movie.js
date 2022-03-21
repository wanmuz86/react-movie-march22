function Movie({movie, handleClick}){
    return (
    <div className="col-md-4 col-sm-12" onClick={()=> handleClick(movie)}>
        <img src={movie.poster_url} className="img-fluid"/>
        <p className="text-center text-light">{movie.title}</p>
    </div>
    );
}

export default Movie;