import {useParams} from 'react-router-dom';

function Detail(){
    let { movieId } = useParams();
    return (
    <div><p>This is detail page for {movieId}</p></div>
    )
}
export default Detail;