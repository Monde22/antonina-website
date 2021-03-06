import { useHistory, useParams } from "react-router-dom";
import useFetch from './useFetch';

const PassengerDetails = () => {
    const { id } = useParams();
    const { data: list, error, isPending } = useFetch('http://localhost:8000/lists/' + id);
    const history = useHistory();

    const handleClick = () =>{
        fetch('http://localhost:8000/lists/' + list.id, {
            method: 'DELETE'
        }).then(() => {
            history.push('/');
        })
    }

    return ( 
        <div className="passenger-details">
            { isPending && <div>Loading...</div>}
            { error && <div>{ error }</div> }
            { list && (
                <article>
                    <h2>Name: { list.name }</h2>
                    <h3>Seat Number: { list.seatNumber }</h3>
                    <h3>Travelling to: { list.travellingTo }</h3>
                    <div><h4>Reference Number: { list.referenceNumber }</h4></div>
                    <button onClick={handleClick}>Delete</button>
                </article>
            )}
        </div>
     );
}
 
export default PassengerDetails;
