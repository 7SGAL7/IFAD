import React from 'react'
import './Components-css/Header.css';

export class Header extends React.Component{

  constructor(props){
    super(props);

    var redes = [
        'Instagram',
        'Facebook',
        'LinkedIn',
        'Twitter',
        'Youtube'
    ] 

    var temas = [
        'Ciencia y tecnología',
        'Defensa y seguridad',
        'Diplomacia',
        'Economía y finanzas',
        'Energía y Medio ambiente',
        'Política y Gobernanza',
        'Sociedad'
    ]

    var regiones = [
        'África del Norte y Asia occidental',
        'África subsahariana',
        'Ártico y Antpartico',
        'Asia-Pacífico',
        'Eurasia',
        'Europa',
        'Indostán',
        'Latin america y el caribe',
        'México',
        'Mundo',
        'Norteamerica'
    ]

    var articulo =  [
      ['De análisis', undefined], 
      ['De opinión', undefined],
      ['Digest Digital', undefined],
      ['Reseñas', undefined]
    ];

    var contenido = 
    [
     ['Mapas', undefined],
     ['Enciclopedia', undefined],
     ['Regiones', regiones],
     ['Temas', temas]
    ]

    var ceremi = [
      ['Acerca', undefined],
      ['Buscador Académico', undefined]
    ]

    var contacto = [
      ['Convocatorias', undefined],
      ['Redes Sociales', redes]
    ]

    this.state = {
        Menu: [
            ['Artículo', articulo],
            ['Contenido', contenido],
            ['CEMERI', ceremi],
            ['Contacto', contacto],
        ]
      };
    

    

  }




  render(){  

    let menu = this.state.Menu;
    
   

      return(
        <div>
              <nav className = "submenu">
              <div className = "acceso">
                  <ul>
                      <li className = "login"><a href="#"><span><i className="far fa-user"></i></span> Login</a></li>
                      <li className = "busqueda"><a href="#"><span><i className="fas fa-search"></i></span> Búsqueda</a></li>
                  </ul>
              </div>
      
              <div className = "titulo">
                  <h1>CEREMI</h1>
              </div>
      
              <div className = "registro">
                  <a href = "#"><span><i className="far fa-envelope"></i></span>  Registrarse</a>
              </div>
          </nav>
      
          <nav className = "header" id = "menu-follow">
              <ul className = "menu">
                {
                    menu.map(item => {
                    return(
                            <li key = {`item-${item}`} className="menu-item">
                                <a href="#">{item[0]} 
                                    <span><i className="fas fa-chevron-down"></i></span>
                                </a>
                                <ul>
                                    {item[1].map(subitem => {
                                        return (
                                            <li key = {`subtem-${subitem}`} className="menu-main-item"><a>{subitem[0]}</a>
                                            <i className={subitem[1] != undefined ? `fas fa-chevron-right`: ""}></i>
                                                <div className = "subsitems">
                                                <ul>
                                                {
                                                    subitem[1] != undefined ? 
                                                    subitem[1].map(subsitem => {
                                                        return <li key={`subsitem-${subsitem}`} className = "subsitem"><a href = "#">{subsitem}</a></li>
                                                    })
                                                    : ""
                                                }
                                                </ul>
                                                </div>
                                            </li>
                                        )
                                    })
                                    }
                                </ul>
                            </li>
                        )                    
                    })
                }
              </ul>
          </nav>

        </div>

     );
  };

}



export default Header;