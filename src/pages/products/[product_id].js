import { useRouter } from "next/router"

const ProductDetails = () => {

    const router = useRouter()

    return (

        <div>
            <h1>Product Details {router.query.product_id}</h1>
        </div>
    )
}


export default ProductDetails