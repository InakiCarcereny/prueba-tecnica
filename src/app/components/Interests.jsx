import { BallIcon } from "../icons/BallIcon"
import { CarIcon } from "../icons/CarIcon"
import { CodeIcon } from "../icons/CodeIcon"
import { MusicIcon } from "../icons/MusicIcon"

import styles from "../styles/interests.module.css"

const interests = [
  {
    name: 'Programación',
    icon: <CodeIcon />
  },
  {
    name: 'Autos',
    icon: <CarIcon />
  },
  {
    name: 'Futbol',
    icon: <BallIcon />
  },
  {
    name: 'Música',
    icon: <MusicIcon />
  }
]

export function Interests () {

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Intereses</h2>
      <ul className={styles.list}>
        {
          interests.map((interest) => (
            <li className={styles.listItem} key={interest.name}>
              <span>{interest.icon}</span>
              <span className={styles.listItemName}>{interest.name}</span>
            </li>
          ))
        }
      </ul>
    </section>
  )
}