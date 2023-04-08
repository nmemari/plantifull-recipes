import styles from './storyCarousel.module.css'
import { storyData } from '@/data/storyData.js'
import { useEffect, useState } from 'react'
import Image from 'next/image';
import DialogueBox from '../DialogueBox';
import Link from 'next/link';

export default function StoryCarousel() {
    const [data, setData] = useState(storyData);
    const [number, setNumber] = useState(0);
    const [isActive, setIsActive] = useState(false); 
    const [isFinish, setIsFinish] = useState(false);

    useEffect(() => {
        if(number != 0) {
            setIsActive(true);
        } else {
            setIsActive(false);
        }
    })

    useEffect(() => {
        if(number == 6) {
            setIsFinish(true);
        } else {
            setIsFinish(false);
        }
    })

    return (
    <div className={styles.container}>      
        <Image className={styles.img} src={data[number].image} width={400} height={400}/>
        <DialogueBox className={styles.box}
            text={data[number].dialogue}
        />
        <div className={styles.btnContainer}>
            <button className={styles.btn} onClick={() => setNumber(number - 1)} style={{
                display: isActive ? 'block' : 'none'
            }}>Back</button> 
            <button className={styles.btn} onClick={() => setNumber(number + 1)} style={{
                display: isFinish ? 'none' : 'block'
            }}>Next</button>
            <Link className={styles.finish} href="landing" style={{
                display: isFinish ? 'block' : 'none'
            }}>Finish</Link>
        </div>
    </div>
  )
}
