import './Components-css/Footer.css'
// import './Components-css/Form.css'

function Footer(){

    return (
            <div className = "footer-div">
            <div className = "footer-top">
                <div className ="footer-top-item">
                    <h3><a>CEREMI</a></h3>
                    <p>Comprometidos con la verdad y el desafío que ella conlleva. Nuestra meta es develar al mundo  para una mejor toma de decisiones. </p>
                </div>
                <div className="footer-top-item footer-icons">
                    <span><i className="fab fa-facebook-f"></i></span>
                    <span><i className="fab fa-youtube"></i></span>
                    <span><i className="fab fa-instagram"></i></span>
                    <span><i className="fab fa-twitter"></i></span>    
                </div>
            </div>

            <div className ="footer-bot">
                <p>
                    Todos los derechos reservados © CEMERI 2019 -2021
                </p>
                <div>
                    <ul>
                        <li><a href ="#">Contacto</a></li>
                        <li><a href ="#">Política de privacidad</a></li>
                    </ul>
                </div>
            </div>
        </div>

    );

}


export default Footer;