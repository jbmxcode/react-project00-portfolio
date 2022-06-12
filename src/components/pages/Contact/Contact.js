import React from 'react'
import { motion } from 'framer-motion'
import './Contact.scss'

function Contact() {
    return (
        <motion.div className="contactPage row"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className="container">
                <section className="contact">
                    <nav className="action-links-group">
                        <a href="pdf/jbmresume-ES-2020.pdf" className="action-link" target="_blank" rel="noopener noreferrer">Hoja de vida</a>
                        <a href="https://wa.me/573122958131" className="action-link" target="_blank" rel="noopener noreferrer">+57 312 2958131</a>
                        <a href="mailto:info@josuebaloy.com" className="action-link" target="_blank" rel="noopener noreferrer">info@josuebaloy.com</a>
                    </nav>
                </section>
            </div>
        </motion.div>
    )
}

export default Contact
