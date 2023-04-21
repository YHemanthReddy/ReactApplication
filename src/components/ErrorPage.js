import { useRouteError } from "react-router-dom"

const Error = () => {
    const errorRouter = useRouteError();
    console.log(errorRouter);
    return (
        <div className="error">
            <h1>OOPs</h1>
            <h3>{errorRouter.statusText || errorRouter.message}</h3>
        </div>
    )

}

export default Error;