import styles from '../css/tools.module.css';
import {useState, useEffect} from "react";
import HtmlLogo from "../image/icons/html.png";
import cssLogo from "../image/icons/css-3.png";
import jsLogo from "../image/icons/js.png";
import reactLogo from "../image/icons/sciene.png";
import tsLogo from "../image/icons/typescript.png";
import nodeLogo from '../image/icons/programing.png';
import '../css/font.css'
export function Tools() {
    const [reducedMotion, setReducedMotion] = useState(false);
    const images = [
        HtmlLogo,
        cssLogo,
        jsLogo,
        reactLogo,
        tsLogo,
        nodeLogo,
         HtmlLogo,
        cssLogo,
        jsLogo,
        reactLogo,
        tsLogo,
        nodeLogo  
    ]
    return (
        <>
        <div className={styles.container}>
            <section className={styles.heading}>
                <h2>Tools which i use Daily</h2>
            </section>
            <section className={styles.tools_container}>
                <div className={styles.scroller}>
                    {images.map((src, index)=> <img src={src} className={styles.tools}  alt={src} key={`img-${index}`} />)}
                </div>
            
            </section>

            <section className={styles.tools_container}>
                <div className={styles.scroller}  style={{ animationDirection: 'reverse'}}>
                    {images.map((src, index)=> <img src={src} className={styles.tools}  alt={src} key={`img-${index}`} />)}
                </div>
            
            </section>
            </div>
             
        </>
    )
}