import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Actor from './Actor';
function Detail() {
    let { movieId } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {

        fetch(`https://wanmuz-rest-api-22.herokuapp.com/api/movies/${movieId}`)
            .then(
                function (response) {
                    if (response.status !== 200) {
                        console.log('Looks like there was a problem. Status Code: ' +
                            response.status);
                        return;
                    }

                    // Examine the text in the response
                    response.json().then(function (data) {
                        console.log(data)
                        setMovie(data["data"])
                    });
                }
            )
            .catch(function (err) {
                console.log('Fetch Error :-S', err);
            });

    }, []);

    return (
        <div className="bg-secondary">
            <div className="container text-center">
                <h2>{movie?.title}</h2>
                <img src={movie?.poster_url} width="50%"></img>
                <p className="text-light">{movie?.synopsis}</p>
                <div className="row">
                    {
                        movie?.actors.map(val=>{
                            return <Actor actor={val}/>
                        })
                    }

                </div>
                <div>
                </div> 
            </div>
        </div>
    )
}
export default Detail;