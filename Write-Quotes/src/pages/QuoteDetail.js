import { useParams, Route } from "react-router-dom";
import Comments from '../components/comments/Comments'
import { Fragment } from "react";
import HighlightedQuote from '../components/quotes/HighlightedQuote';

const DUMMY_QUOTES = [
    {id:'p1',author:'Max',text:'Learning React is fun!'},
    {id:'p2',author:'Joe',text:'Learning React is great!'},
]

const QuoteDetail = () => {
    const params = useParams();

    const quote = DUMMY_QUOTES.find(quote=>quote.id===params.quoteId);

    if(!quote){
        return <p>No Quote Found!</p>
    }
    return (
        <Fragment>
            <HighlightedQuote text={quote.text} author={quote.author}></HighlightedQuote>
            <Route path={`/quotes/${params.quoteId}/comments`}>
                <Comments ></Comments>
            </Route>

        </Fragment>


    )
};

export default QuoteDetail;