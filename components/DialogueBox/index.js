import styles from './DialogueBox.module.css'

export default function DialogueBox({
    text = ''
}) {
    return (
        <div className={styles.container}>
            <div className={styles.box}>
                {text}
            </div>
        </div>
    )
}