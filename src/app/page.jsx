import './globals.css'
import styles from '../app/styles/page.module.css'
import { Header } from './components/Header';
import { About } from './components/About';
import { Interests } from './components/Interests';
import { ContactForm } from './components/ContactForm';

export default function Home() {
  
  return (
    <main className={styles.pageContainer}>
      <Header />
      <div className={styles.pageSeparator}>
        <About />
        <Interests />
      </div>
      <ContactForm />
    </main>
  );
}
