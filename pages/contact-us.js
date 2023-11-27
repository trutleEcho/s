import Navbar from "@/components/navbar";
import Image from "next/image";
import styles from "../styles/ContactUs.module.css"
export default function ContactUs(){
    return(
        <>
            <Navbar/>
            <section className={styles.container}>
                <div>
                    <Image src="/contact-us/phone.png" alt="call" width={20} height={20}></Image>
                    <span style={{paddingLeft:10}}>CONTACT US AT -*** *** ***</span>
                </div>
                <div>
                    <Image src="/contact-us/telephone.png" alt="call" width={20} height={20}></Image>
                    <span style={{paddingLeft:10}}>CONTACT US AT -*** *** ***</span>                </div>
                <div>
                    <Image src="/contact-us/mail.png" alt="call" width={20} height={20}></Image>
                    <span style={{paddingLeft:10,marginBottom:10}}>CONTACT US AT -*** *** ***</span>                </div>
                <div>
                    <Image src="/contact-us/web.png" alt="call" width={20} height={20}></Image>
                    <span style={{paddingLeft:10}}>CONTACT US AT -*** *** ***</span>                </div>
                <div>
                    <Image src="/contact-us/location.png" alt="call" width={20} height={20}></Image>
                    <span style={{paddingLeft:10}}>CONTACT US AT -*** *** ***</span>                </div>
            </section>
            
        </>
    );
}