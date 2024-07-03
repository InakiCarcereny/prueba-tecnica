import Image from "next/image";
import styles from "../styles/header.module.css";

export function Header () {

  return (
    <header className={styles.container}>
      <div className={styles.userContainer}>
        <Image 
        className={styles.img}
        src="/user.webp" 
        alt="User Avatar" 
        width={80} 
        height={80} />
        <p className={styles.userName}>
          <span>
            Matias
          </span> 
          <span>
            Aguirre
          </span>
        </p>
      </div>

      <div className={styles.containerFollow}>
        <span className={styles.follow}>
          567 Seguidores
        </span>
        <span className={styles.follow}>
          234 Seguidos
        </span>
      </div>

      <div className={styles.containerTime}>
        <p>Aca va la hora local</p>
      </div>
    </header>
  )
}