import './Components-css/Post.css';

function Post(){

    return (
        <div className='Post-component'>
            <div className = 'background-effect'>
                <div className = 'container-post'>
                    <div className='image-post'>
                        <img src = "https://cemeri.org/wp-content/uploads/conferencia-de-teheran-reunion-tres-grandes-cemeri-768x403.png"/>
                    </div>
                    <div className='Text-post'>
                        <h4><a href = "#">Conferencia de Teherán: la primera reunión de los ‘‘Tres Grandes’’</a></h4>
                        <p>
                        La Conferencia de Teherán fue una reunión en 1943 entre los dirigentes Iósif Stalin, Winston Churchill y Franklin D. Roosevelt en la que coordinaron su estrategia militar contra Alemania y Japón en la Segunda Guerra Mundial.
                        </p>
                        <div className="line-division"></div>
                        <p>
                            Red CEMERI
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Post;