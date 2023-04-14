import Image from 'next/image'
import styles from './Lauryn.module.css'
import ProfileIcon from '@/public/Icons/Profile.svg'

export default function Lauryn() {
    return(
        <>
            <div className={styles.container}>
                <div className={styles.navidCard}>
                    <Image src={ProfileIcon} width={150} height={150}/>
                    <h3 className={styles.nameTag}>Lauryn</h3>
                    <h4 className={styles.teamRole}>UX/UI Designer</h4>
                    <p className={styles.personalInfo}>
                        Set: H <br/>
                        Student #: A01293568  <br/>
                        Age: 19
                    </p>
                </div>
                
            </div>
            
        </>
    )
}