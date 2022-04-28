import { useParams, Route, Link, useRouteMatch } from "react-router-dom";
import Comments from '../components/comments/Comments'
import { Fragment, useEffect } from "react";
import HighlightedQuote from '../components/quotes/HighlightedQuote';
import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";
import LoadingSpinner from "../components/UI/LoadingSpinner";

const QuoteDetail = () => {
    const params = useParams();
    const match = useRouteMatch();
    const { quoteId } = params;

    const { sendRequest, status, data: loadedQuotes, error } = useHttp(getSingleQuote, true);
    useEffect(() => {
        sendRequest(quoteId);
    }, [sendRequest, quoteId])

    if (status === 'pending') {
        return <div className='centered'>
            <LoadingSpinner></LoadingSpinner>
        </div>
    }

    if(error){
        return <p className='centered-focused'> {error} </p>
    }
 

    if (!loadedQuotes.text) {
        return <p>No Quote Found!</p>
    }
    return (
        <Fragment>
            <HighlightedQuote text={loadedQuotes.text} author={loadedQuotes.author}></HighlightedQuote>
            <Route path={match.path} exact>
                <div className="centered">
                    <Link className="btn--flat" to={`${match.url}/comments`}>Load Comments</Link>
                </div>
            </Route>

            <Route path={`${match.path}/comments`}>
                <Comments ></Comments>
            </Route>

        </Fragment>


    )
};

export default QuoteDetail;