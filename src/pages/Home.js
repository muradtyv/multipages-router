import { Link, useNavigate } from "react-router-dom";


function HomePage() {

    const navigate = useNavigate();

    const navigateHandler =() => {
        navigate("/products")
    }
    return <div>
        <h1>My home Page</h1>
        <p>go to <Link to="/products"> products of list</Link></p>
        <p>
            <button onClick={navigateHandler}>Navigate</button>
        </p>
    </div>
}

export default HomePage;