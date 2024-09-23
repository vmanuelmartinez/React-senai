import './style.css'
import LogoDoctor from '../../asset/images/LogoDoctor.jpg'

export default function HealthCare(){
    return(
        <div className="container-healthcare">
        <img src={LogoDoctor} alt=""/>

        <div className="box-healthcare">
            <h1>Leading healthcare providers</h1>
            <p>Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it’s not just work. We take pride 
            in the solutions we deliver.</p>
            
            <p className='alternative-text'>
            At Trafalgar, we prioritize innovation and convenience, offering personalized healthcare solutions that fit into your daily life. Whether online or on mobile, our goal is to make high-quality care accessible to all. It’s not just about service; it’s about making a meaningful impact.
            </p>
      
        </div>




        </div>
    )
}