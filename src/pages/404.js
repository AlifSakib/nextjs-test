import { useRouter } from "next/router"

const ErrorPage = () => {

    const router = useRouter()
    setTimeout(() => {
        router.push("/")
    },5000)

    return (

        <div>
            <h1>404</h1>
        </div>
    )
}

export default ErrorPage