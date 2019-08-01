import React from 'react';
import Modal from 'components/Modal';
import { FormFormikEnhanced, FormInput, SubmitButton } from 'components/Form';
import './styles.scss';

const BackCallButton = () => {
    return (
        <Modal className="back-call btn-black btn" buttonText={'Обратный звонок'}>
            <FormFormikEnhanced
                fields={{}}
                formTitle={'Заказ обратного звонка'}
                onSuccess={() => alert('Success')}
            >
                <FormInput>
                    <input type="text" name="name" className="ui-field" placeholder="Ваше имя"></input>
                </FormInput>
                <FormInput>
                    <input type="text" name="phone" className="ui-field" placeholder="Телефон"></input>
                </FormInput>
                <FormInput className="formInputRow">
                    <input type="checkbox" className="checkbox-custom" id="consent" name="consent"></input>
                    <label htmlFor="consent">Согласен с <a href="/" target="_black">правилами использования и обработки персональных данных</a></label>
                </FormInput>
                <SubmitButton className="btn-blue"><span>Заказать звонок</span></SubmitButton>

            </FormFormikEnhanced>
        </Modal>
    )
}

export default BackCallButton; 