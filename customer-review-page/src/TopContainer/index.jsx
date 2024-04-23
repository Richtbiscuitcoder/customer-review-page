import ContentBox from "../components/ContentBox"
import StarRating from "../components/StarRating1"
import './styles.css'

const TopContainer = () => {
    return (
        <div className="top-box">
            <ContentBox />
            <div className="star-container"> 
                <StarRating title="Reviews" />
                <br />
                <StarRating title="Report Guru" />
                <br />
                <StarRating title="BestTech" />
                <br />
            </div>
        </div>
    )
}

export default TopContainer