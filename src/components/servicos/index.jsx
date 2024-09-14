import "./style.css";
import Doctor from "../../asset/images/doctor.png";

//teste

export default function Servicos() {
  return (
    
            <div className="texto">
                <h1>Our services</h1>
                <p>
                    We provide to you the best choiches for you. Adjust it to your health
                    needs and make sure your undergo treatment with our highly qualified
                    doctors you can consult with us which type of service is suitable for
                    your health
                </p>

                <div className="container-card">

                <div className="box-card">
                    <img src={Doctor} alt="" />
                    <h3>Search doctor</h3>
                    <p>Choose your doctor from thousands of specialist, general, and trusted hospitals</p>
                </div>

                <div className="box-card">
                    <img src={Doctor} alt="" />
                    <h3>Online pharmacy</h3>
                    <p>Buy  your medicines with our mobile application with a simple delivery system</p>
                </div>

                <div className="box-card">
                    <img src={Doctor} alt="" />
                    <h3>Consultation</h3>
                    <p>Free consultation with our trusted doctors and get the best recomendations</p>
                </div>

                <div className="box-card">
                    <img src={Doctor} alt="" />
                    <h3>Details info</h3>
                    <p>Free consultation with our trusted doctors and get the best recomendations</p>
                </div>

                <div className="box-card">
                    <img src={Doctor} alt="" />
                    <h3>Emergency care</h3>
                    <p>You can get 24/7 urgent care for yourself or your children and your
                    lovely family</p>
                </div>

                <div className="box-card">
                    <img src={Doctor} alt="" />
                    <h3>Tracking</h3>
                    <p>Track and save your medical history and health data </p>
                </div>             
               

                </div>
            </div>

          
  )
}
