import styles from './QuestionBoxThree.module.css'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { questions } from '@/data/questions.js'

export default function QuestionBoxThree({timeData}) {
    const [answer, setAnswer] = useState('')
    const [isActive, setIsActive] = useState(true);
    const [data, setData] = useState(questions);
    
    const handleAnswer = (event) => {
        setAnswer(event.target.value);
    }

    const handleLableOne = () => {
        if(answer === 'breakfast'){
            return 'var(--fern-green)';
        }
    }

    const handleLableTwo = () => {
        if(answer === 'dinner/lunch'){
            return 'var(--fern-green)';
        }
    }

    return (
        <div className={styles.container} style={{
            display: isActive ? 'flex' : 'none'
        }}>
            <div className={styles.quizContainer}>
                <div className={styles.progressBar}>
                    <div className={styles.progressDone}></div>
                    <div className={styles.progressDone}></div>
                    <div className={styles.progressDone}></div>
                </div>
                <h1 className={styles.question}>{data[2].question}</h1>
                <div className={styles.answerCont}>
                    <div className={styles.answerBox}  style={{
                            backgroundColor: handleLableOne()
                        }}>
                        <label className={styles.answer}>
                            <Image src={data[2].img[0]} width={125} height={125}/>
                            <input
                                type="radio"
                                name="answer"
                                value="breakfast"
                                checked={answer === 'breakfast'}
                                onChange={handleAnswer}
                            />
                            <h3>{data[2].options[0]}</h3>
                        </label>
                    </div>
                    <div className={styles.answerBox}  style={{
                            backgroundColor: handleLableTwo()
                        }}>
                        <label className={styles.answer}>
                            <Image src={data[2].img[1]} width={125} height={125}/>
                            <input
                                type="radio"
                                name="answer"
                                value="dinner/lunch"
                                checked={answer === 'dinner/lunch'}
                                onChange={handleAnswer}
                            />
                            <h3>{data[2].options[1]}</h3>
                        </label>
                    </div>
                </div>
                <button className={styles.btn} hidden={!answer} onClick={() => {
                    timeData(answer);
                    setIsActive(false);
                }}>Next</button>
            </div>
        </div>
    )
}