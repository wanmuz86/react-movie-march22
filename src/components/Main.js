import react, { useEffect, useState } from 'react';
import Movie from './Movie';


function Main() {

    const [movies, setMovies] = useState([]);
    useEffect(() => {
        fetch('https://wanmuz-rest-api-22.herokuapp.com/api/movies')
            .then(
                function (response) {
                    if (response.status !== 200) {
                        console.log('Looks like there was a problem. Status Code: ' +
                            response.status);
                        return;
                    }

                    // Examine the text in the response
                    response.json().then(function (data) {
                        setMovies(data["data"])
                    });
                }
            )
            .catch(function (err) {
                console.log('Fetch Error :-S', err);
            });

    }, [])

    return (
        <main className="bg-secondary">
            <div className="container"> 
            <div className="row">
            {
            movies.map(val=>{
                return <Movie movie={val} />
            })
            }
            </div>
            </div>

        </main>

    );
}

export default Main;