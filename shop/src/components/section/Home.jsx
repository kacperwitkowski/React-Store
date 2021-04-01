import '../scss/Home.scss'
import { Link } from "react-router-dom";
import sample from "../media/video.mp4";

const Home = () => {
 return (
   <div className="home">
     <div className="home--video-container">
       <video className="home--video" autoPlay="autoplay" loop="loop" muted="muted" playsInline="playsinline">
         <source src={sample} type="video/mp4" />
       </video>
     </div>
     <div className="home--details">
       <h2>Struggling with finding your favourite shoes? </h2>
       <h3>You found a place where all your problems should disappear!</h3>
       <div className="home--button-effect">
         <Link to="/product" className="btn fill">
           Check our products
         </Link>
       </div>
     </div>
   </div>
 );
}
 
export default Home;

