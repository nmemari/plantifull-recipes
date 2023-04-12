import styles from './ResultBox.module.css'

export default function ResultBox({
    name = '',
    ingredients = [],
    steps = []
}) {
    return (
        <div className={styles.container}>
            <h1>{name}</h1>
            <h2>What you'll need</h2>
            <div className={styles.ingredientList}>
                {
                    ingredients && ingredients.map((item, index) => {
                        return (
                            <div className={styles.ingredientStep} key={index}>
                                <div className={styles.ingredientNum}>{index + 1}</div>
                                <div className={styles.ingredientItem}>{item}</div>
                            </div>
                        )
                    })
                }
            </div>
            <h2>How to Cook</h2>
            <div className={styles.stepsList}>
                {
                    steps && steps.map((item, index) => {
                        return (
                            <div className={styles.stepInst} key={index}>
                                <div className={styles.stepNum}>Step {index + 1}</div>
                                <div className={styles.stepItem}>{item}</div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}