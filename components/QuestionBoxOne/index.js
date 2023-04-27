import styles from './QuestionBoxOne.module.css'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { questions } from '@/data/questions.js'
import VeganDish from '@/public/pictures/vegan-salad.jpeg'
import Pescatarian from '@/public/pictures/pescatarian-option.jpeg'
import OvoVegetarian from '@/public/pictures/ovo-vegetarian-option.jpeg'
import LactoOvoVegetarian from '@/public/pictures/lacto-ovo-vegetarian-option.jpeg'

export default function QuestionBoxOne({typeData}) {
    const [answer, setAnswer] = useState('')
    const [isActive, setIsActive] = useState(true);
    const [data, setData] = useState(questions);

    const [popUp, setPopUp] = useState(false);
    const [image, setImage] = useState();
    const [desc, setDesc] = useState('');
    
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
            <div className={styles.quizContainer}>
                <div className={styles.progressBar}>
                    <div className={styles.progressDone}></div>
                    <div className={styles.progress}></div>
                    <div className={styles.progress}></div>
                </div>
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
                            <h3>
                                {data[0].options[0]}
                                <div className={styles.helpBtn} onClick={() => {
                                    setPopUp(true)
                                    setImage(VeganDish)
                                    setDesc('Veganism is a popular dietary practice that refrains from consuming as much animal products as possible. This includes by-products such as eggs, milk and wool. Besides the ethical positives for veganism, the diet is also beneficial to reducing risk of Alzheimer’s disease, heart disease and obesity.')
                                }}>?</div>
                            </h3>
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
                            <h3>
                                {data[0].options[1]}
                                <div className={styles.helpBtn} onClick={() => {
                                    setPopUp(true)
                                    setImage(Pescatarian)
                                    setDesc('Pescatarian is a sub practice that incorporates fish and other seafood products into their diet. Pescetarians avoids red meats such as beef, poultry and pork. Additionally, according to research, this diet has proven to provide many health benefits including, reduced risk of diabetes and heart disease.')
                                }}>?</div>
                            </h3>
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
                            <h3>
                                {data[0].options[2]}
                                <div className={styles.helpBtn} onClick={() => {
                                    setPopUp(true)
                                    setImage(OvoVegetarian)
                                    setDesc('Ovo-Vegetarianism is a sub practice that incorporates eggs into their diet. All other animal by-products are excluded. In this way, Ovo-vegetarianism is similar to Veganism, which completely avoids animal by-products. Eggs are an “eggcellent” source of vitamin B and other healthy compounds.')
                                }}>?</div>
                            </h3>
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
                            <h3>
                                {data[0].options[3]}
                                <div className={styles.helpBtn} onClick={() => {
                                    setPopUp(true)
                                    setImage(LactoOvoVegetarian)
                                    setDesc('Lacto Ovo Vegetarianism is an extension of Ovo Vegetarianism, in which all meat based products are excluded except animal by-products such as eggs and dairy. This type of diet is a great way of reducing animal meat consumption. Adopting this kind of diet is proven to reduce risk of cancer and support healthy weight loss.')
                                }}>?</div>
                            </h3>
                        </label>
                    </div>
                </div>
                <button className={styles.btn} hidden={!answer} onClick={() => {
                    typeData(answer);
                    setIsActive(false);
                }}>Next</button>
            </div>

            {
                popUp ? 
                    <div className={styles.containerPop}>
                        <div className={styles.boxPop}>
                            <Image className={styles.image} src={image} height={150} width={250}/>
                            <div className={styles.description}>
                                {desc}
                            </div>
                            <button className={styles.close} onClick={() => setPopUp(false)}>Close</button>
                        </div>
                    </div>
                : <></>
            }
        </div>
    )
}