import styles from './BeginBox.module.css'
import Link from 'next/link'

export default function BeginBox() {
    return (
        <div className={styles.container}>
            <div className={styles.beginBox}>
                <h3>We want to get to know you</h3>
                <h4>take our quiz to find the recipe that's best for you.</h4>                
            </div>
            <Link className={styles.btn} href='tkquiz' >Take the Quiz</Link>
            <Link className={styles.btn} href='tutebtn'>Tutorial</Link>
        </div>
    )
}