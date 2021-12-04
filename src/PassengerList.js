import { Link } from "react-router-dom";

const PassengerList = ({ lists, name }) => {
    
    return (
       <div className="passenger-list">
           <h2>{ name }</h2>
           {lists.map((list) => (
                <div className="list-preview" key={list.id}>
                    <Link to={`/passengers/${list.id}`}>
                    <h2>Name: { list.name }</h2>
                    <h3>Seat Number: { list.seatNumber }</h3>
                    <h4>Travelling to: { list.travellingTo }</h4>
                    </Link>
                </div>
            ))}
       </div>
    );
}
 
export default PassengerList;