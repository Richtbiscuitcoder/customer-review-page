
import StarRating from "./components/StarRating1"
import PurpleBox from "./components/PurpleBox"
import TopContainer from "./components/TopContainer" 
import "./App.css"


function App() {
  return (
    <>
      <TopContainer />
      
      <div className="bottom-half"> 
        <PurpleBox name="Colten smith" review="We needed the same printed designs as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent!" />
        <PurpleBox name="Irene Roberts" review="Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery" />
        <PurpleBox name="Anne Wallace" review="Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone!"/>
      </div> 
    </>
  )
}

export default App
