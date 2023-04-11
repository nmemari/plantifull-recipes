import styles from './NavbarFull.module.css'
import Image from 'next/image'
import Link from 'next/link'
import Sprout from '@/public/logos/Logo_light-green.svg'
import { useState, useEffect } from 'react'

export default function Navbar() {
    const [isActive, setIsActive] = useState('none');

    return (
        <>
            <div className={styles.navbar}>
                <div className={styles.logoCont}>
                    <Image src={Sprout} width={90} height={90}/>
                    <h1>Plantifull Recipe</h1>
                </div>
                <button className={styles.sideBarBtn} onClick={() => setIsActive('block')}>
                    <div className={styles.menuComp}></div>
                    <div className={styles.menuComp}></div>
                    <div className={styles.menuComp}></div>
                </button>
            </div>

            <div className={styles.sideBarCont} style={{
                display: isActive
            }}>
                <div className={styles.sideBar}>
                    <button className={styles.sideBarClose} onClick={() => setIsActive('none')}>X</button>
                    <ul className={styles.sideBarMenu}>
                        <li className={styles.sideBarItem}>
                            <Link className={styles.link} href={'landing'}>
                                <Image className={styles.barIcon} src='/../public/Icons/Home.png' width={40} height={35}/>
                                Home
                            </Link>
                        </li>
                        <li className={styles.sideBarItem}>
                            <Link className={styles.link} href={'quiz'}>
                                <Image className={styles.barIcon} src={'/../public/Icons/Info.png'} width={40} height={40}/>
                                Quiz
                            </Link>
                        </li>
                        <li className={styles.sideBarItem}>
                            <Link className={styles.link} href={'tutorial'}>
                                <Image className={styles.barIcon} src={'/../public/Icons/Tutorial.png'} width={35} height={40}/>
                                Tutorial
                            </Link>
                        </li>
                        <li className={styles.sideBarItem}>
                            <Link className={styles.link} href={'tutorial'}>
                                <Image className={styles.barIcon} src={'/../public/Icons/CTA.png'} width={35} height={40}/>
                                Call to Action
                            </Link>
                        </li>
                        <li className={styles.sideBarItem}>
                            <Link className={styles.link} href={'about'}>
                                <Image className={styles.barIcon} src={'/../public/Icons/About.png'} width={40} height={40}/>
                                About Us
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
        
    )
}