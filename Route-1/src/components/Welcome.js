import { Route } from "react-router-dom";

const Welcome = () => {
    return (
        <section>
            <h1>This is a Welcome page</h1>
            <Route path="/welcome/new-user">
                <p>Welcome new User!</p>
            </Route>
        </section>

    )
};

export default Welcome;