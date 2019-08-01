import React from 'react'
import Container from 'components/Container'
import BackCallButton from 'components/BackCallButton'
import FooterNav from './Nav'
import ContactForm from 'apps/ContactForm'
import ContactInfo from './ContactInfo'
import './styles.scss'

export default function Footer() {
    return (
        <footer className="footer">
            <Container>
                <div className="footer-top">
                    <ul className="footer-menu list-unstyled">
                        <li><a href="company/" className="footer-link">О компании</a></li>
                        <li><a href="about/" className="footer-link">О системе</a></li>
                        <li><a href="contacts.html" className="footer-link">Контакты</a></li>
                    </ul>
                    <ul className="footer-links list-unstyled">
                        <li><a href="company/extraservices/" className="footer-link">Дополнительные услуги</a></li>
                        <li><a href="analytics/" className="footer-link">Аналитика</a></li>
                        <li><a href="vacancies/" className="footer-link">Карьера</a></li>
                        <li><a href="news/" className="footer-link">Новости</a></li>
                        <li><a href="newslinks/" className="footer-link">Пресса о нас</a></li>
                    </ul>
                    <div className="footer-shared">
                        <ul className="social-list list-unstyled">
                            <li><a href="https://vk.com/club162277630" rel="nofollow noopener noreferrer" target="_blank" className="social-list-icon vk-color">
                                <i class="fa fa-vk vk" aria-hidden="true"></i>
                            </a></li>
                            <li><a href="https://www.facebook.com/%D0%9E%D0%9E%D0%9E-%D0%A1%D0%9A%D0%94%D0%9E--2068635610082163/?modal=admin_todo_tour" rel="nofollow noopener noreferrer" target="_blank" className="social-list-icon fb-color">
                                <i class="fa fa-facebook fb" aria-hidden="true"></i>
                            </a></li>
                            <li><a href="https://www.youtube.com/channel/UCRa6Mcjby73j7iIY1aIy6mg/featured" rel="nofollow noopener noreferrer" target="_blank" className="social-list-icon yt-color">
                                <i class="fa fa-youtube yt" aria-hidden="true"></i>
                            </a></li>
                            <li><a href="https://www.instagram.com/skdo__/" rel="nofollow noopener noreferrer" target="_blank" className="social-list-icon ig-color">
                                <i class="fa fa-instagram ig" aria-hidden="true"></i>
                            </a></li>
                        </ul>

                        <div className="footer-subscription">

                            <form action="/" method="post" className="ui-group ajax_form form-horizontal">
                                <input type="hidden" name="pageurl" value="http://192.168.1.112/index.html"></input>

                                <input type="email" name="email3" className="ui-field ui-placeholder" id="subscription-input" placeholder="Подпишитесь на обновления"></input>

                                <span className="error_email3"></span>

                                <button type="submit" className="footer-subscription-send">
                                    <i class="fa fa-arrow-right arrow" aria-hidden="true"></i>
                                </button>
                                <i class="fa fa-envelope-o mail" aria-hidden="true"></i>

                                <input type="hidden" name="af_action" value="25ea61d7c06e4fbea660706eb244120e"></input>
                            </form>
                            <div id="success-response" className="alert alert-info" style={{ display: 'none' }}>
                                <div>Вы успешно подписаны на новости</div>
                            </div>
                        </div>            </div>

                    <div className="footer-support">
                        <div className="footer-support-address">г. Москва, ул. Садовническая, д.76/71, стр. 3</div>
                        <div className="footer-support-scheme"><a href="contacts.html">Схема проезда</a></div>
                        <div><a href="mailto:info@skdo.ru" rel="nofollow" className="footer-support-email">info@skdo.ru</a></div>
                        <div className="footer-support-phone"><a href="tel:88007007997" rel="nofollow">8 800 700-79-97</a></div>
                        <BackCallButton />
                    </div>
                </div>
                <FooterNav />
            </Container>
        </footer>
    )
}