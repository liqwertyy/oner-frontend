import Image from 'next/image'
import styles from './Footer.module.scss'

export default function Footer() {
	return (
		<div className={styles.footer}>
			<div className={styles.container}>
				<div
					style={{
						width: '100%',
						marginRight: '20px',
						display: 'flex',
						justifyContent: 'space-between',
					}}
				>
					<ul className={styles.block}>
						<h3>Меню компании</h3>
						<li>
							{' '}
							<a href="">Что такое Oner</a>
						</li>
						<li>
							{' '}
							<a href="">Реквизиты и информация</a>
						</li>
						<li>
							{' '}
							<a href=" ">Новости </a>
						</li>
						<li>
							{' '}
							<a href="">Вакансии</a>
						</li>
						<li>
							{' '}
							<a href="">Поставщикам</a>
						</li>
						<li>
							{' '}
							<a href="">Контакты</a>
						</li>
					</ul>
					<ul className={styles.block}>
						<h3>Каталоги</h3>
						<li>
							<a href="">Оригинальные запчасти</a>{' '}
						</li>
						<li>
							<a href="">Неоригинальные запчасти</a>
						</li>
						<li>
							<a href="">Запчасти для ТО</a>
						</li>
						<li>
							<a href="">Автомасла</a>
						</li>
						<li>
							<a href="">Аккумуляторы</a>
						</li>
						<li>
							<a href="">Распродажа</a>
						</li>
					</ul>

					<ul className={styles.block}>
						<h3>Помощь</h3>
						<li>
							<a href="">Список брендов</a>
						</li>
						<li>
							<a href="">Популярные товары</a>
						</li>
						<li>
							<a href="">Наличие на складах</a>
						</li>
					</ul>
					<ul className={styles.blockdel}>
						<h3>Помощь</h3>
						<li>
							<a href="">Часто задаваемые вопросы</a>
						</li>
						<li>
							<a href="">Консультация Online</a>
						</li>
						<li>
							<a href="">Оплата заказа</a>
						</li>
						<li>
							<a href="">Доставка заказа</a>
						</li>
						<li>
							<a href="">Возврат товара</a>
						</li>
						<li>
							<a href="">Забыл пароль</a>
						</li>
					</ul>
				</div>

				<button className={styles.button1}>
					<div className={styles.buttonIcon}>
						<Image fill src="/assets/comment.svg" alt="logo" />
					</div>
					<div className={styles.buttonText}>
						<h3>Консультация онлайн</h3>
						<span>Задавайте вопросы</span>
					</div>
				</button>
			</div>

			<div className={styles.container23}>
				<span>Copyright © ООО «Oner.ru» 2021. All rights reserved.</span>
				<div className={styles.pay}>
					<span>Принимаем к оплате</span>
					<div className={styles.icons}>
						<div className={styles.icon}>
							<Image width={67} height={36} src="/assets/pay3.svg" alt="logo" />
						</div>
						<div className={styles.icon}>
							<Image width={47} height={36} src="/assets/pay2.svg" alt="logo" />
						</div>
						<div className={styles.icon}>
							<Image width={67} height={36} src="/assets/pay1.svg" alt="logo" />
						</div>
					</div>
				</div>
				<div className={styles.oferta_conf}>
					<span className={styles.oferta}>Оферта</span>
					<span>Конфиденциальность</span>
				</div>
			</div>
		</div>
	)
}
