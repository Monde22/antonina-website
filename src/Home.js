import PassengerList from "./PassengerList";
import useFetch from "./useFetch";

const Home = () => {
    const { data: lists, isPending, error } = useFetch('https://antonina-line-website.herokuapp.com');

    return ( 
        <div className="home">
            { error && <div>{ error }</div> }
            { isPending && <div>Loading...</div> }
            {lists && <PassengerList lists={lists} name="List of Passengers" />}
        </div>
     );
}
 
export default Home;
