import './styles.css'

const PurpleBox = ({name, review, verified})  => {
    return (
        <div className='purple-box'>
            <h1>{name}</h1>
            <h3>{verified}</h3>
            <p>{review}</p>
        </div>
    )
}

export default PurpleBox