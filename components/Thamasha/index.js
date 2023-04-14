import Image from 'next/image'
import styles from './Thamasha.module.css'
import ProfileIcon from '@/public/Icons/Profile.svg'

export default function Thamasha() {
    return(
        <>
            <div className={styles.container}>
                <div className={styles.navidCard}>
                    <Image src={ProfileIcon} width={150} height={150}/>
                    <h3 className={styles.nameTag}>Thamasha</h3>
                    <h4 className={styles.teamRole}>Project Researcher</h4>
                    <p className={styles.personalInfo}>
                        Set: H <br/>
                        Student #: A01292184  <br/>
                        Age: 19
                    </p>
                </div>
                
            </div>
            
        </>
    )
}