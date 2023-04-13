import styles from './BeginBox.module.css'
import Link from 'next/link'

export default function BeginBox() {
    return (
        <div className={styles.container}>
            <div className={styles.beginBox}>
                <h6>We want to get to know you</h6>
                <p>take our quiz to find the recipe that's best for you.</p>                
            </div>
            <Link className={styles.btn} href='tkquiz'>Take the Quiz</Link>
            <Link className={styles.btn} href='tutebtn'>Tutorial</Link>
        </div>
    )
}