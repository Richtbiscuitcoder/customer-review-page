import ContentBox from "/Users/ioacademy/Documents/customer-review-page/customer-review-page/src/components/ContentBox"
import StarRating from "/Users/ioacademy/Documents/customer-review-page/customer-review-page/src/components/StarRating1"

import './styles.css'

const TopContainer = () => {
    return (
        <div className="top-box">
            <ContentBox />
            <div className="">
                <StarRating title="Reviews" stars={5}/>
                <br />
                <StarRating title="Report Guru" stars={1}/>
                <br />
                <StarRating title="BestTech" stars={3} />
                <br />
            </div>
        </div>
    )
}

export default TopContainer