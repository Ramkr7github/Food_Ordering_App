import { useRouteError } from "react-router-dom"

const Error = () => {

    const err = useRouteError()
    return(
        <div>
        <h1>Oooops !!!</h1>
        <h2> Something Went Wrong</h2>
        <h3>{err.status}:{err.statusText}</h3>
    

    {console.log(err)}
        </div>
    )
}
export default Error ;