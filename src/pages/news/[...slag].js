import { useRouter } from "next/router"

const CatchAllRoutes = () => {
    const router = useRouter()

    return (

        <div>
            <h1>CatchAllRoutes {router.query.slag}</h1>
        </div>
    )
}

export default CatchAllRoutes