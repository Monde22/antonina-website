import { useState } from "react";
import { useHistory } from 'react-router-dom';

    const Create = () => {
    const [name, setName] = useState('');
    const [seatNumber, setSeatNumber] = useState('');
    const [referenceNumber, setreferenceNumber] = useState('');
    const [travellingTo, setTravellingTo] = useState('');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const list = {name, seatNumber, referenceNumber, travellingTo};


        setIsPending(true);

        fetch('https://antonina-line-website.herokuapp.com', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.parse(list)
        }).then(() => {
            console.log('New Passenger Added');
            setIsPending(false);
            history.push('/');
        })

    }

    return ( 
        <div className="create">
            <h2>Add a New Passenger</h2>
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input 
                type = "text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                />
                <label>Seat Number:</label>
                <input 
                type = "number"
                required
                value={seatNumber}
                onChange={(e) => setSeatNumber(e.target.value)}
                />
                <label>Reference Number:</label>
                <input 
                type = "number"
                required
                value={referenceNumber}
                onChange={(e) => setreferenceNumber(e.target.value)}
                />
                <label>Travelling to:</label>
                <select
                value={travellingTo}
                onChange={(e) => setTravellingTo(e.target.value)}
                >
                    <option value ="PITX TO TABACO">PITX TO TABACO</option>
                    <option value ="PITX TO LEGAZPI">PITX TO LEGAZPI</option>
                    <option value ="PITX TO TIWI">PITX TO TIWI</option>
                </select>
                { !isPending && <button>Add Passenger</button> }
                { isPending && <button disabled>Adding Passenger....</button> }
            </form>
        </div>
     );
}
 
export default Create;
