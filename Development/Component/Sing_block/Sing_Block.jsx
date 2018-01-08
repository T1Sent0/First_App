import React from 'react';
import Input from '../Input/Input.jsx'
import './Sing_Block.scss'

export default class General extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className={'--general-block-sing'}>
                <h1>Уже заходили к нам ?</h1>
                <p>Пройдите авторизацию</p>
                <div>
                    <label className={'flex-column'}>
                        <span>Ваш логин</span>
                        <Input className={'input'} type={'text'} name={'login'}/>
                    </label>
                </div>
                <div>
                    <label className={'flex-column'}>
                        <span>Ваш пароль</span>
                        <Input className={'input'} type={'text'} name={'password'}/>
                    </label>
                </div>
                <div>
                    <Input className={'input-button'} type={'submit'} name={'sing'} value={'Войти'}/>
                </div>
                <h1>Впервые тут ?</h1>
                <p>Зарегистрируйтесь</p>
                <div className={'registration-icon'}>
                    <img/>
                    <img/>
                    <img/>
                    <img/>
                </div>
            </div>
        )
    }
}