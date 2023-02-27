import { useParams } from "react-router-dom";

function ProductDetail() {

    const params = useParams();

    return (
        <div>
           {params.productId}
        </div>
    )
}

export default ProductDetail;