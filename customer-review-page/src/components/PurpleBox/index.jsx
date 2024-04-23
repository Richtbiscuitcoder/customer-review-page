import './styles.css'

const PurpleBox = ({name, review})  => {
    return (
        <div className='purple-box'>
            <h1>{name}</h1>
            <h3>Verified Buyer</h3>
            <p>{review}</p>
        </div>
    )
}

export default PurpleBox