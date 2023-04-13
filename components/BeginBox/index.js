import styles from './BeginBox.module.css'
import Link from 'next/link'

export default function BeginBox() {
    return (
        <div className={styles.container}>
            <div className={styles.beginBox}>
                <h1>We want to get to know you</h1>
                <p>take our quiz to find the recipe that's best for you.</p>                
            </div>
            <Link className={styles.btn} href='quiz'>Take the Quiz</Link>
            <Link className={styles.btn} href='tutorial'>Tutorial</Link>
        </div>
    )
}