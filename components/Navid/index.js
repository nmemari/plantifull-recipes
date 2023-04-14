import Image from 'next/image'
import styles from './Navid.module.css'
import ProfileIcon from '@/public/Icons/Profile.svg'

export default function Navid() {
    return(
        <>
            <div className={styles.container}>
                <div className={styles.navidCard}>
                    <Image src={ProfileIcon} width={150} height={150}/>
                    <h3 className={styles.nameTag}>Navid</h3>
                    <h4 className={styles.teamRole}>Lead Programmer</h4>
                    <p className={styles.personalInfo}>
                        Set: H <br/>
                        Student #: A01226833  <br/>
                        Age: 21
                    </p>
                </div>
                
            </div>
            
        </>
    )
}