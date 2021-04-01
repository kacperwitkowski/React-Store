import "../scss/About.scss";
import HappyWorkers from '../media/happyworkers.jpg';

 const About = () => {
  return (
    <div>
    <div className="about">
      <div className="about--top">
        <h2>Our Story</h2>
        <div className="about--img">
        <img src={HappyWorkers} alt="" />
      </div>
      </div>
    
      <div className="about--bottom">
        <div className="about--text">
          <p>
            We are a big company which was founded in ... Honestly there is no history of our company aside place where you can find us now.
            We are located in Phoenix, AZ. Thats all what i have to say. One
            day something more will be here (maybe)...
          </p>
        </div>
      </div>
    </div>  
  
    </div>
  );
 }
  
 export default About;