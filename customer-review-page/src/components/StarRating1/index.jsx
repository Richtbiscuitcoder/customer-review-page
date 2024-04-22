import './styles.css'


const StarRating = ({title}, {stars}) => {
    return (
        <div className='star-box'>
            <i class="fa-solid fa-star"></i>
            <p>Rated {stars} Stars in {title}</p>
        </div>
    )
} 

export default StarRating