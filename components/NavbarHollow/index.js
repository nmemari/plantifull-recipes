import styles from './NavbarHollow.module.css'
import Image from 'next/image'
import Link from 'next/link'
import Home from '@/public/Icons/Home.png'
import Info from '@/public/Icons/Info.png'
import Tutorial from '@/public/Icons/Tutorial.png'
import CallTA from '@/public/Icons/CTA.png'
import About from '@/public/Icons/About.png'
import Search from '@/public/Icons/Search.png'
import { useState, useEffect } from 'react'

export default function NavbarHollow() {
    const [isActive, setIsActive] = useState('none');

    return (
        <>
            <div className={styles.navbar}>
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
                                <Image className={styles.barIcon} src={Home} width={40} height={35}/>
                                Home
                            </Link>
                        </li>
                        <li className={styles.sideBarItem}>
                            <Link className={styles.link} href={'quiz'}>
                                <Image className={styles.barIcon} src={Info} width={40} height={40}/>
                                Quiz
                            </Link>
                        </li>
                        <li className={styles.sideBarItem}>
                            <Link className={styles.link} href={'browse'}>
                                <Image className={styles.barIcon} src={Search} width={35} height={40}/>
                                Browse
                            </Link>
                        </li>
                        <li className={styles.sideBarItem}>
                            <Link className={styles.link} href={'tutorial'}>
                                <Image className={styles.barIcon} src={Tutorial} width={35} height={40}/>
                                Tutorial
                            </Link>
                        </li>
                        <li className={styles.sideBarItem}>
                            <Link className={styles.link} href={'callToAction'}>
                                <Image className={styles.barIcon} src={CallTA} width={35} height={40}/>
                                Call to Action
                            </Link>
                        </li>
                        <li className={styles.sideBarItem}>
                            <Link className={styles.link} href={'about'}>
                                <Image className={styles.barIcon} src={About} width={40} height={40}/>
                                About Us
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
        
    )
}