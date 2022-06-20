import './Components-css/References.css';

function References(){

    const Mostrar = () => {
        var references = document.getElementById('reference');
        var icon = document.getElementById('reference-icon');
        if(references.style.display === 'block'){
          
            icon.className = "fa fa-caret-right";
            references.style.display = 'none';
        }else{
            icon.className = "fa fa-caret-up";
            references.style.display = 'block';
        }
    }


    return (

        <div className="Reference-component">
            <div className='autor'>
                <div className='box-button'>
                    <i className='fas fa-caret-right' id = "reference-icon"></i>
                    <input type='button' onClick={()=>{Mostrar()}} value = " Autor y Fuentes" className='button-reference'></input>
                </div>
            
                
                <div className = "reference" id = "reference">
                
                    <br/>Por Aida Jiménez Juárez
                    [1] International Fund for Agricultural Development. (s. f.). About. <br/>
                    [2] Ídem.<br/>
                    [3] Ídem.<br/>
                    [4] Ídem.<br/>
                    [5] Ídem.<br/>
                    [6] Ídem.<br/>
                    [7] International Fund for Agricultural Development. (s. f.). Vision.<br/>
                    [8] Ídem.<br/>
                    [9] International Fund for Agricultural Development. (2016, abril). IFAD Strategic Framework 2016–2025 Enabling inclusive and sustainable rural transformation.<br/>
                    [10] Ídem.<br/>
                    [11] International Fund for Agricultural Development. (s. f.). Our approach. IFAD<br/>
                    [12] Ídem.<br/>
                    [13] Ídem.<br/>
                    [14] Ídem.<br/>
                    [15] Ídem.<br/>
                    [16] Ídem.<br/>
                    [17] International Fund for Agricultural Development. (s. f.). Topics. IFAD.<br/>
                    [18] Ídem.<br/>
                    [19] International Fund for Agricultural Development. (s. f.). Covid-19. IFAD.<br/>
                    [20] International Fund for Agricultural Development. (s. f.). Climate and environment. IFAD.<br/>
                    [21] International Fund for Agricultural Development. (s. f.). crops. IFAD.<br/>
                    [22] International Fund for Agricultural Development. (s. f.). Fisheries and aquaculture. IFAD.<br/>
                    [23] International Fund for Agricultural Development. (s. f.). Gender. IFAD.<br/>
                    [24] International Fund for Agricultural Development. (s. f.). Indigenous peoples. IFAD.<br/>
                    [25] International Fund for Agricultural Development. (s. f.). Institutions and organizations. IFAD.<br/>
                    [26] International Fund for Agricultural Development. (s. f.). Land. IFAD.<br/>
                    [27] International Fund for Agricultural Development. (s. f.). Livestock and rangeland. IFAD.<br/>
                    <br/>
                    Referencias:<br/>
                    <br/>
                    International Fund for Agricultural Development. (s. f.). About. IFAD. Recuperado 14 de mayo de 2022, de https://www.ifad.org/en/about <br/>
                    <br/>
                    International Fund for Agricultural Development. (s. f.). Climate and environment. IFAD. Recuperado 14 de mayo de 2022, de https://www.ifad.org/en/climate-and-environment <br/>
                    <br/>
                    International Fund for Agricultural Development. (s. f.). Covid-19. IFAD. Recuperado 14 de mayo de 2022, de https://www.ifad.org/en/covid19 <br/>
                    <br/>
                    International Fund for Agricultural Development. (s. f.). crops. IFAD. Recuperado 15 de mayo de 2022, de https://www.ifad.org/en/crops <br/>
                    <br/>
                    International Fund for Agricultural Development. (s. f.). Fisheries and aquaculture. IFAD. Recuperado 15 de mayo de 2022, de https://www.ifad.org/en/fisheries <br/>
                    <br/>
                    International Fund for Agricultural Development. (s. f.). Gender. IFAD. Recuperado 15 de mayo de 2022, de https://www.ifad.org/en/gender <br/>
                    <br/>
                    International Fund for Agricultural Development. (s. f.). Indigenous peoples. IFAD. Recuperado 15 de mayo de 2022, de https://www.ifad.org/en/indigenous-peoples <br/>
                    <br/>
                    International Fund for Agricultural Development. (s. f.). Institutions and organisations. IFAD. Recuperado 15 de mayo de 2022, de https://www.ifad.org/en/institutions-and-organizations <br/>
                    <br/>
                    International Fund for Agricultural Development. (s. f.). Land. IFAD. Recuperado 15 de mayo de 2022, de https://www.ifad.org/en/land <br/>
                    <br/>
                    International Fund for Agricultural Development. (s. f.). Livestock and rangeland. IFAD. Recuperado 15 de mayo de 2022, de https://www.ifad.org/en/livestock-and-rangeland <br/>
                    <br/>
                    International Fund for Agricultural Development. (s. f.). Our approach. IFAD. Recuperado 14 de mayo de 2022, de https://www.ifad.org/en/approach <br/>
                    <br/>
                    International Fund for Agricultural Development. (s. f.). Topics. IFAD. Recuperado 14 de mayo de 2022, de https://www.ifad.org/en/topics <br/>
                    <br/>
                    International Fund for Agricultural Development. (s. f.). Vision. IFAD. Recuperado 14 de mayo de 2022, de https://www.ifad.org/en/vision <br/>
                    <br/>
                    International Fund for Agricultural Development. (2016, abril). IFAD Strategic Framework 2016–2025 Enabling inclusive and sustainable rural transformation. IFAD. https://www.ifad.org/en/strategic-framework <br/>
                    <br/>
                    International Fund for Agricultural Development. (2018, 15 mayo). Performance-based Allocation System [Vídeo]. YouTube.<br/>
                    https://www.youtube.com/watch?v=CaM8U1KWTIw&amp;feature=youtu.be <br/>
                    <br/>
                </div>
                <div className="line-division line-min"></div>
            </div>

            <div className = "reference-extra">
                <div className='reference-box'> 
                    <i className='fas fa-pen-nib'></i>
                    <p>Contenido apegado a The Trust Project</p>
                </div>
                <div className='reference-box'>
                    <i className='fas fa-exclamation-circle'></i>
                    <p>Reportar una errata</p>
                </div>
            </div>


            <div className="line-division line-max"></div>
        </div>
    );
}


export default References;

