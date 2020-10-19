import React from 'react'
import { motion } from 'framer-motion'
import './Home.scss'

function Home() {
    return (
        <motion.div className="homePage row"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <h1 className="page-title">
                <span className="first-line">Josue</span>
                <span className="second-line">Baloy Melendez</span>
            </h1> 
        </motion.div>
    )
}

export default Home
