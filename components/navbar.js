import Link from "next/link";
import styles from "../styles/Navbar.module.css"
import Image from "next/image";
export default function Navbar(){
    return(
        <>
            <header className={styles.container}>
                <div className={styles.boxes}>
                    
                    <h1 className={styles.h1}>
                    <Image src="/logo.jpg" alt="logo" width={60}height={60}></Image>
                        Shivam Sales Copration
                    </h1>
                </div>               
                <div className={styles.boxes}>
                    <ul className={styles.navbar}>
                        <li>
                            <Link legacyBehavior href="/"><a>Home</a></Link>
                        </li>
                        <li>
                            <Link legacyBehavior href="/about-us"><a>About us</a></Link>
                        </li>
                        <li>
                            <Link legacyBehavior href="/contact-us"><a>Contact us</a></Link>
                        </li>
                        <li>
                            <Link legacyBehavior href="products"><a>Products</a></Link>
                        </li>
                    </ul>
                </div>
            </header>
        </>
    );
}