import { useParams, Route } from "react-router-dom";
import Comments from '../components/comments/Comments'
import { Fragment } from "react";
const QuoteDetail = () => {
    const params = useParams();
    return (
        <Fragment>
            <h1>Quote detail Page</h1>
            <p>{params.quoteId}</p>
            <Route path={`/quotes/${params.quoteId}/comments`}>
                <Comments ></Comments>
            </Route>

        </Fragment>


    )
};

export default QuoteDetail;