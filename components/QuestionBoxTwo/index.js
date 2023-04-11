import styles from './QuestionBoxTwo.module.css'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { questions } from '@/data/questions.js'


export default function QuestionBoxTwo({cuisineData}) {
    const [answer, setAnswer] = useState('')
    const [isActive, setIsActive] = useState(true);
    const [data, setData] = useState(questions);

    const handleAnswer = (event) => {
        setAnswer(event.target.value);
        
    }

    const handleLableOne = () => {
        if(answer === 'western'){
            return 'var(--laurel-green)';
        }
    }

    const handleLableTwo = () => {
        if(answer === 'european'){
            return 'var(--laurel-green)';
        }
    }

    const handleLableThree = () => {
        if(answer === 'south asian'){
            return 'var(--laurel-green)';
        }
    }

    const handleLableFour = () => {
        if(answer === 'east asian'){
            return 'var(--laurel-green)';
        }
    }

    return (
        <div className={styles.container} style={{
            display: isActive ? 'flex' : 'none'
        }}>
            <div className={styles.progressBar}>
                <div className={styles.progressDone}></div>
                <div className={styles.progressDone}></div>
                <div className={styles.progress}></div>
            </div>

            <div className={styles.quizContainer}>
                <h1 className={styles.question}>{data[1].question}</h1>
                <div className={styles.answerCont}>
                    <div className={styles.answerBox}  style={{
                            backgroundColor: handleLableOne()
                        }}>
                        <label className={styles.answer} style={{
                            backgroundImage: `url(${data[1].img[0].src})`,
                            backgroundRepeat: 'no-repeat'
                        }}>
                            <input
                                type="radio"
                                name="answer"
                                value="western"
                                checked={answer === 'western'}
                                onChange={handleAnswer}
                            />
                            <h3>{data[1].options[0]}</h3>
                        </label>
                    </div>
                    <div className={styles.answerBox}  style={{
                            backgroundColor: handleLableTwo()
                        }}>
                        <label className={styles.answer} style={{
                            backgroundImage: `url(${data[1].img[1].src})`,
                            backgroundRepeat: 'no-repeat'
                        }}>
                            <input
                                type="radio"
                                name="answer"
                                value="european"
                                checked={answer === 'european'}
                                onChange={handleAnswer}
                            />
                            <h3>{data[1].options[1]}</h3>
                        </label>
                    </div>
                    <div className={styles.answerBox}  style={{
                            backgroundColor: handleLableThree()
                        }}>
                        <label className={styles.answer} style={{
                            backgroundImage: `url(${data[1].img[2].src})`,
                            backgroundRepeat: 'no-repeat'
                        }}>
                            <input
                                type="radio"
                                name="answer"
                                value="south asian"
                                checked={answer === 'south asian'}
                                onChange={handleAnswer}
                            />
                            <h3>{data[1].options[2]}</h3>
                        </label>
                    </div>
                    <div className={styles.answerBox}  style={{
                            backgroundColor: handleLableFour()
                        }}>
                        <label className={styles.answer} style={{
                            backgroundImage: `url(${data[1].img[3].src})`,
                            backgroundRepeat: 'no-repeat'
                        }}>
                            <input
                                type="radio"
                                name="answer"
                                value="east asian"
                                checked={answer === 'east asian'}
                                onChange={handleAnswer}
                            />
                            <h3>{data[1].options[3]}</h3>
                        </label>
                    </div>
                </div>
                <button className={styles.btn} hidden={!answer} onClick={() => {
                    cuisineData(answer);
                    setIsActive(false);
                }}>Next</button>
            </div>
        </div>
    )
}