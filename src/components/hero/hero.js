import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styles from './hero.module.css'
import Img from 'gatsby-image'

const Hero = () => {
  const avatar = useStaticQuery(graphql`
  {
    file(relativePath: {eq: "avatar1.png"}) {
      childImageSharp {
        fluid {
          base64
          aspectRatio
          sizes
          src
          srcSet
        }
      }
    }
  }
  `)

  return (
    <section className={styles.hero}>
      <div className={styles.textWrapper}>
        <h1 className={styles.heroText}>
          Hey, I'm Jay!
        </h1>
        <h1 className={styles.heroText}>
          I like to create things...
        </h1>
      </div>
      <div className={styles.imgWrapper}>
        <Img className={styles.img} fluid={avatar.file.childImageSharp.fluid} alt="avatar picture" />
      </div>
    </section>
  )
}

export default Hero
