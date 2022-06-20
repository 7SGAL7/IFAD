import './Components-css/Form.css'

function Form(){
    return (
        <div className="Form-component">
            <h3>Deja una respuesta</h3>
            <p>Tu dirección de correo electrónico no será publicada. Los campos obligatorios están marcados con *</p>

            <form className="form-website">
                    <p>
                        <label htmlFor="comentario">Comentario <span>*</span></label>
                        <textarea id = "comentario" name = "comentario" required></textarea>
                    </p>
                    
                    <p>
                        <label htmlFor = "name">Nombre <span>*</span></label>
                        <input id = "name" type = "text" name = "name" required></input>
                    </p>
                    <p>
                    <label htmlFor ="email">Correo <span>*</span></label>
                        <input id = "email" type = "email" name = "email" required></input>
                    </p>
                    <p>
                        <label htmlFor ="web">WEB</label>
                        <input id = "web" type = "text" name = "web"></input>
                    </p>
                    <p>
                        <input id = "save-info" type = "checkbox" name = "save-info"></input>
                        <label htmlFor = "save-info">Guarda mi nombre, correo electrónico y web en este navegador para la próxima vez que comente.</label>                      
                    </p>
                    <p>
                        <input type="submit" value = "Publicar el comentario"></input>
                    </p>  
            </form>
        </div>
    );
}

export default Form;