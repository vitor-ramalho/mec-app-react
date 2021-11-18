import React from 'react';
import { Button } from '../Button/Button';
import './HomeSection.css';
import '../../App.css';

const HomeSection = () => {
    return (
        <>
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
            <div className="home-content">
                <div className="home-item">
                    <h2>Com o Mec.App é possível encontrar a oficina mais perto de você.</h2>
                    <div className="home-icons">
                        <i className="fas fa-user fa-3x" />
                        <i className="fas fa-route fa-3x" />
                    </div>
                </div>
                <div className="home-item">
                    <h2>Avalie os estabelecimentos e ajude os outros usuários.</h2>
                    <div className="home-icons">
                        <i className="fas fa-star fa-3x" />
                        <i className="fas fa-hands-helping fa-3x" />
                    </div>
                </div>
                <div className="home-item">
                    <h2>Além disso você ainda pode filtrar os locais de acordo com o seu tipo de veículo.</h2>
                    <div className="home-icons">
                        <i className="fas fa-car fa-3x" />
                        <i className="fas fa-motorcycle fa-3x" />
                    </div>
                </div>
                <div className="home-item">
                    <h2>Ah! E se você tem uma oficina mecânica e quer cadastrá-la, basta clicar em oficina, preencher os dados e pronto!</h2>
                    <div className="home-icons">
                        <i className="fas fa-mobile-alt fa-3x" />
                        <i className="fas fa-wrench fa-3x" />
                    </div>
                </div>
                <div className="home-item">
                    <h2>Assim, quando o usuário fizer a busca, sua oficina aparecerá nos resultados.</h2>
                    <div className="home-icons">
                        <i className="fas fa-cog fa-3x" />
                        <i className="fas fa-warehouse fa-3x" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeSection
