import React from 'react'
import styles from '../styles/About.module.css'

const About = () => {
  return (
    <div className={styles.aboutWrapper}>
      <p>
        This is a project we created for the Spaceport Hackathon in Žilina 2023
        to help with wildfires. The method we chose was a controlled fire
        planning analysis tool developed especially for Pljevlja as part of the
        fighting deforestation - wildfire prevention category. The topic was an
        interesting mixture of learning something new and leveraging our
        skillsets.
      </p>
      <p>
        The analysis tool has a 4bn€ TAM and we see commercial potential because
        of the 5-10x savings this offers vs. fire fighting, scalability and low
        on capital burn. It is a perfect example of how innovation, commercial
        potential and doing something good for the world can coexist.
      </p>
      <p>
        To get more information on the project head to the contact us section.
      </p>
    </div>
  )
}

export default About
