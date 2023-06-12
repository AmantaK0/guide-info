import './placeholder.css' 

const Placeholder = ({data}) => {
    return (
        <>
            <h1> {data.name} </h1>
            <h2> {data.description} </h2>
        </>
    )
}

export default Placeholder;