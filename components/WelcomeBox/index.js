import styles from './WelcomeBox.module.css'
import Link from 'next/link'


export default function WelcomeBox() {
    return (
        <div className={styles.container}>
            <div className={styles.msgBox}>
                <h1>Welcome to Plantifull Recipes</h1>
                <h3>A recipe app to suit all your vegetarian needs</h3>
            </div>
            <Link className={styles.btn} href='story'>Let's Get Started</Link> 
        </div>
    )
}