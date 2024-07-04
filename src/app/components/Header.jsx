'use client'

import Image from "next/image";
import styles from "../styles/header.module.css";
import { useState } from "react";
import { HeartIcon } from "../icons/HeartIcon";

export function Header () {
  const [follow, setFollow] = useState(567)

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
          {follow} <span className={styles.followText}>Seguidores</span>
        </span>
        <span className={styles.follow}>
          234 <span className={styles.followText}>Seguidos</span>
        </span>
      </div>

      
      <button className={styles.followButton} onClick={() => setFollow(follow + 1)}>
        <HeartIcon />
      </button>
    </header>
  )
}