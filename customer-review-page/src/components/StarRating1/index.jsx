import './styles.css'




const StarRating = ({stars, title}) => {
    const starJSX = <i className="fa-solid fa-star"></i>

    const starArray = []
    for (let i = 0; i < stars; i++) {
        starArray.push(starJSX)
    }

    return (
        <div className='star-box'>
               {starArray} 
            <p>Rated {stars} Stars in {title}</p>       
        </div>

    )
} 

export default StarRating