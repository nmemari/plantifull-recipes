import styles from './QuestionBoxOne.module.css'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { questions } from '@/data/questions.js'

export default function QuestionBoxOne() {
    const [answer, setAnswer] = useState('')
    const [isActive, setIsActive] = useState(true);
    const [data, setData] = useState(questions);
    
    const handleAnswer = (event) => {
        setAnswer(event.target.value);
    }

    const handleLableOne = () => {
        if(answer === 'vegan'){
            return 'var(--fern-green)';
        }
    }

    const handleLableTwo = () => {
        if(answer === 'pescatarian'){
            return 'var(--fern-green)';
        }
    }

    const handleLableThree = () => {
        if(answer === 'ovo vegetarian'){
            return 'var(--fern-green)';
        }
    }

    const handleLableFour = () => {
        if(answer === 'ovo-lacto vegetarian'){
            return 'var(--fern-green)';
        }
    }

    return (
        <div className={styles.container} style={{
            display: isActive ? 'flex' : 'none'
        }}>
            <div className={styles.progressBar}>
                <div className={styles.progressDone}></div>
                <div className={styles.progress}></div>
                <div className={styles.progress}></div>
            </div>

            <div className={styles.quizContainer}>
                <h1 className={styles.question}>{data[0].question}</h1>
                <div className={styles.answerCont}>
                    <div className={styles.answerBox}  style={{
                            backgroundColor: handleLableOne()
                        }}>
                        <label className={styles.answer}>
                            <Image src={data[0].img[0]} width={125} height={125}/>
                            <input
                                type="radio"
                                name="answer"
                                value="vegan"
                                checked={answer === 'vegan'}
                                onChange={handleAnswer}
                            />
                            <h3>{data[0].options[0]}</h3>
                        </label>
                    </div>
                    <div className={styles.answerBox}  style={{
                            backgroundColor: handleLableTwo()
                        }}>
                        <label className={styles.answer}>
                            <Image src={data[0].img[1]} width={125} height={125}/>
                            <input
                                type="radio"
                                name="answer"
                                value="pescatarian"
                                checked={answer === 'pescatarian'}
                                onChange={handleAnswer}
                            />
                            <h3>{data[0].options[1]}</h3>
                        </label>
                    </div>
                    <div className={styles.answerBox}  style={{
                            backgroundColor: handleLableThree()
                        }}>
                        <label className={styles.answer}>
                            <Image src={data[0].img[2]} width={125} height={125}/>
                            <input
                                type="radio"
                                name="answer"
                                value="ovo vegetarian"
                                checked={answer === 'ovo vegetarian'}
                                onChange={handleAnswer}
                            />
                            <h3>{data[0].options[2]}</h3>
                        </label>
                    </div>
                    <div className={styles.answerBox}  style={{
                            backgroundColor: handleLableFour()
                        }}>
                        <label className={styles.answer}>
                            <Image src={data[0].img[3]} width={125} height={125}/>
                            <input
                                type="radio"
                                name="answer"
                                value="ovo-lacto vegetarian"
                                checked={answer === 'ovo-lacto vegetarian'}
                                onChange={handleAnswer}
                            />
                            <h3>{data[0].options[3]}</h3>
                        </label>
                    </div>
                </div>
                <button className={styles.btn} hidden={!answer} onClick={() => setIsActive(false)}>Confirm</button>
            </div>
        </div>
    )
}