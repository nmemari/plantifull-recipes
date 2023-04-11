import styles from './Confirm.module.css'

export default function ConfirmBox({
    type = '',
    cuisine = '',
    time = '',
    name = ''
}) {
  return (
    <div className={styles.container}>
        <h1>Here are your choices</h1>
        <div className={styles.choiceCont}>
            <p>You are <b>{type}</b></p>
            <p>You are having <b>{cuisine}</b> cuisine</p>
            <p>You are having <b>{time}</b></p>
        </div>
        <h2>Here is the recipe we have for you</h2>
        <div className={styles.recipeName}>{name}</div>
    </div>
  )
}
