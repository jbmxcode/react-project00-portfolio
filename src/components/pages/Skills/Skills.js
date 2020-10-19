import React from 'react'
import { skillsData } from './Data'
import './Skills.scss'

function Skills() {
    return (
        <div className="skillsPage row">
            <div className="container">
                <section className="skills">
                    <div className="summary item-text">
                        <p>Explico brevemente los procesos y conocimientos que he adquirido en estos últimos 7 años:</p>
                        <h4>Estudio de Mercado</h4>
                        <p>El primer paso en la creación de un sitio web, es el levantamiento de información, ya que es muy importante para saber exactamente lo que el cliente desea. Para este proceso utilizo diversos sistemas como <strong>Awwwards, Behance, Dribble, Pinterest, entre otros</strong></p>
                        <h4>Diseño</h4>
                        <p>Luego de un estudio de mercado el siguiente paso es crear el wireframe y el mockup. Utilizo herramientas como <strong>Adobe XD, Photoshop, Invision Studio, Framer Motion, etc</strong></p>  
                        <h4>Estructuración y estilos</h4>
                        <p>Para el <strong>HTML5</strong> siempre mantengo buenas prácticas de código pensando siempre en un concepto modular y de accesibilidad. Para crear componentes y separar por bloques me ayudo de <strong>Webpack</strong> y como plantilla para HTML utilizo <strong>Handlebars</strong></p>
                        <p>Respecto a <strong>CSS3</strong> mi aliado es <strong>SASS</strong> para agilizar y modular el código. Siempre pensando en <strong>"mobile first"</strong> con sitios 100% responsive para todas las resoluciones</p>
                        <p>Me encantan los detalles y uno en especial es dar interactividad y vida a los sitios web que desarrollo. Para ello utilizo tanto <strong>Javascript Plano</strong> como de algunas librerías en el mercado como <strong>AnimeJS, Greensock</strong> o del mismo Javascript puro también <strong>Canvas</strong></p>
                        <h4>Gestión de Contenido</h4>
                        <p>Para esta fase tengo la habilidad de crear temas en <strong>Wordpress y Drupal</strong> desde cero o crear por medio de <strong>NodeJS</strong> un panel administrativo y para el front end utilizo <strong>ReactJS</strong> en conjunto con todas sus librerías, utilizando el ecosistema de <strong>Javascript</strong></p>
                        <h4>Gestión de versiones</h4>
                        <p>Tanto en solitario como en equipo tengo los conocimientos en <strong>Git</strong> en el manejo de repositorios y también en sistemas como <strong>Github</strong> y <strong>Bitbucket</strong>. De igual forma en <strong>Heroku</strong> y <strong>Netlify</strong> para desplegar aplicaciones</p>
                        <h4>Gestión de Proyectos</h4>
                        <p>He tenido la oportunidad de trabajar en equipos de diferentes partes del mundo y con metologías ágiles, utilizando programas como <strong>Trello, Jira, etc</strong></p>
                        <h4>Servidores</h4>
                        <p><strong>Cpanel, AWS, Godaddy, entre otros</strong> son algunos de los cuales he tenido experiencia en lanzar sitios web</p>
                        <h4>Marketing</h4>
                        <p>Respecto a este apartado, por mis inicios como diseñador gráfico, puedo aportar ayudas en la creación de diseño publicitario para <strong>Social Media</strong>, campañas de newsletters con programas como <strong>Mailchimp, Sendinblue</strong> creando correos personalizados</p>
                    </div>
                    <ul className="items-list">
                        {
                            skillsData.map(skill => {
                                return <li>{ skill.name }</li> 
                            })
                        }
                    </ul>
                </section>
            </div>
        </div>
    )
}

export default Skills
