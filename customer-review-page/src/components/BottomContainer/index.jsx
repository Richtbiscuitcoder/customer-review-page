import './styles.css'
import PurpleBox from "../PurpleBox"


const BottomContainer = () => {
    return (
        <div className="bottom-box">
            <PurpleBox name="Colten Smith" verified="Verified Buyer" review="We needed the same printed designs as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent!" />
            <br />
            <PurpleBox name="Irene Roberts" verified="Verified Buyer" review="Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery." />
            <br />
            <PurpleBox name="Anne Wallace" verified="Verified Buyer" review="Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone!" />
        </div>
    )
}

export default BottomContainer