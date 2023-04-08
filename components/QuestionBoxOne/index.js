import styles from './QuestionBoxOne.module.css'
import { useState, useEffect } from 'react'

export default function QuestionBoxOne() {
    const [answer, setAnswer] = useState('')
    const [isActive, setIsActive] = useState(false);
    
    const handleAnswer = (event) => {
        setAnswer(event.target.value);
    }

    return (
        <>
            <div className={styles.progressBar}>
                <div className={styles.progressDone}></div>
                <div className={styles.progress}></div>
                <div className={styles.progress}></div>
            </div>

            <div className={styles.quizContainer}>
                <h1 className={styles.question}>Which type do you practice?</h1>
                <div className={styles.answerCont}>
                    <div className={styles.answerBox}>
                        <label className={styles.answer}>
                            <input
                                type="radio"
                                name="answer"
                                value="vegan"
                                checked={answer === 'vegan'}
                                onChange={handleAnswer}
                            />
                            <h3>Vegan</h3>
                        </label>
                    </div>
                    
                    <label className={styles.answer}>
                        <input
                            type="radio"
                            name="answer"
                            value="pescatarian"
                            checked={answer === 'pescatarian'}
                            onChange={handleAnswer}
                        />
                        <h3>Pescatarian</h3>
                    </label>
                    <label className={styles.answer}>
                        <input
                            type="radio"
                            name="answer"
                            value="ovo vegetarian"
                            checked={answer === 'ovo vegetarian'}
                            onChange={handleAnswer}
                        />
                        <h3>Ovo Vegetarian</h3>
                    </label>
                    <label className={styles.answer}>
                        <input
                            type="radio"
                            name="answer"
                            value="ovo-lacto vegetarian"
                            checked={answer === 'ovo-lacto vegetarian'}
                            onChange={handleAnswer}
                        />
                        <h3>Ovo-Lacto Vegetarian</h3>
                    </label>
                </div>
                <button hidden={!answer}>Next</button>
            </div>
        </>
    )
}