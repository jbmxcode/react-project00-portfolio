import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import './About.scss'

function About() {
    return (
        <motion.div className="aboutPage row"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className="container">
                <section className="about">
                    <ul className="items-list">
                        <li className="item">
                            <div className="item-name">Proactivo</div>
                            <div className="item-text">El ayer ya paso y no me estanco en procesos obsoletos, avanzo con nuevas ideas y formas en pro de la excelencia</div>
                        </li>
                        <li className="item">
                            <div className="item-name">Diligente</div>
                            <div className="item-text">Lo que no sé, lo aprendo. Espero ambientes de presión y de exigencia para así llevar al máximo mi potencial</div>
                        </li>
                        <li className="item">
                            <div className="item-name">Eficiente</div>
                            <div className="item-text">No es solo hacer el trabajo, es hacer el trabajo superando todas las expectativas posibles, esa es mi misión</div>
                        </li>
                        <li className="item">
                            <div className="item-name">Auto-Disciplinado</div>
                            <div className="item-text">La disciplina combinada con una disposición correcta es mi receta en el día a día y así poder avanzar</div>
                        </li>
                    </ul>
                    <div className="about-me">
                        <p>Poder plasmar ideas en código o pixeles son las pasiones de mi vida, cada proyecto es un mundo nuevo por descubrir, y mi meta es lograr dejar huella día tras día e imprimir esa marca única que me representa.</p>
                        <p>Soy Panameño y actualmente vivo en Bogotá Colombia desde el año 2016. Mi experiencia en el mundo de la programación lleva ya unos 7 años y ha sido una aventura tras otra.</p>
                    </div>
                    <div className="action-links-group">
                        <Link to="/skills" className="action-link">Tecnologías</Link>
                    </div>
                </section>
            </div>
        </motion.div>
    )
}

export default About
