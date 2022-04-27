import { useParams } from "react-router-dom";

const ProductDetail = ()=>{
    const params =  useParams();
    return (
        <div>
            {params.productId}
        </div>
    )
};
export default ProductDetail;