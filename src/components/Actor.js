function Actor({actor}){
    return (
    <div className="col-md-2 col-sm-6">
        <img src={actor.pic_url} className="img-fluid"/>
        <p>{actor.name}</p>
    </div>
    );
}
export default Actor;