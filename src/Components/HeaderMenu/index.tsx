'use client';
import Image from 'next/image';
import styles from './HeaderMenu.module.scss'
import Link from 'next/link';
import PromotionSlider from "@/Components/Promo"; 
export default function HeaderMenu() {

    
    return (
        <header className={styles.headerMenu}>
            <div className={styles.wrapper}>
            <button className={styles.button}>
                    <div className={styles.buttonIcon}>
                        <Image fill src="/assets/tochki.svg" alt="logo" />
                    </div>
                    <div className={styles.buttonText}>
                        Все категории
                    </div>
                    
                </button>

                <div className={styles.inputContainer}>
                            <input
                                type="text"
                                placeholder="Введите номер запчасти или VIN"
                                className={styles.inputField} />
                            {/* <Image fill src="/assets/Search.png" alt="logo" className={styles.searchIcon}/> */}
                        </div>

                <ul className={styles.button_list}>
                  
                  <button >Запчасти для ТО</button>
                  <button>Автомасла</button>
                  <button>Оригинальные запчасти</button>
                  <button className={styles.adapt}>Неоригинальные запчасти</button>
                  <button className={styles.adapt}>Лампочки</button>
                  <button className={styles.adapt}>Аккумуляторы</button>
                </ul>
                <Link href='/basket'>
                 <button className={styles.basket}>
                    <div className={styles.basketIcon}>
                        <Image fill src="/assets/basket1.svg" alt="logo" />
                    </div>
                    <div className={styles.basketText}>Корзина</div>
                    <div className={styles.basketCircle}>
                    <span className={styles.basketQuantity}>5</span>
                    </div>
                </button>
                </Link>
               


            </div>
        </header>
    )
}