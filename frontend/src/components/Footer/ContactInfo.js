import React from 'react'

export default function ContactInfo() {
    return (
        <div id="ContactInfo" className="Footer__contact-infos">
            <div className="Footer__contact-info">
                <div className="upper">Юридический адрес</div>
                <div>Россия, 115114, г. Москва, ул. Летниковская,<br/>д. 10, стр1</div>
            </div>
            <div className="Footer__contact-info">
                <div className="upper">телефон</div>
                <div><a href="tel:84954821544">+7 (495) 482-15-44</a></div>
            </div>
            <div className="Footer__contact-info">
                <div className="upper">email</div>
                <div><a href="mailto:info@ueplatform.ru">info@ueplatform.ru</a></div>
            </div>
        </div>
    )
}