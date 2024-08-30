import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div class="not-found">
            <h1>404 Not Found</h1>
            <Link class="link" to="/">Home</Link>
        </div>
    )
}

export default NotFound;