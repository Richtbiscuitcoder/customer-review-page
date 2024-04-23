import './styles.css'


const Ratings = []

const StarRating = ({title, stars}) => {
    return (
        <div className='star-box'>
            <i className="fa-solid fa-star"></i>
            <p>Rated {stars} Stars in {title}</p>
        </div>
    )
} 

export default StarRating