import React from 'react';
import {Button} from '../Button/Button';
import './HomeSection.css';
import '../../App.css';

const HomeSection = () => {
    return (
        <div className="home-container">
            <h1>Sua Oficina Mecânica <br /> Na <br /> Palma da Mão.</h1>
            <p>Cadastre-se</p>
            <div className="home-btns">
                <Button
                    className="btns"
                    buttonStyle="btn--outline"
                    buttonSize="btn--large"
                >
                    Oficina
                </Button>
                <Button
                    className="btns"
                    buttonStyle="btn--outline"
                    buttonSize="btn--large"
                >
                    Cliente
                </Button>
            </div>
        </div>
    )
}

export default HomeSection
