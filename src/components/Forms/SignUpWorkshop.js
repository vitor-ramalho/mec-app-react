import React, { useState, useEffect } from 'react';
import './Forms.css';

const SignUpWorkshop = () => {
    return (
        <div className="container">
            <div className="wrapper">
                <h2 className="title">Cadastrar Oficina</h2>
                <form className="form-wrapper">
                    <div className="name">
                        <label className="label">Nome</label>
                        <input 
                            className="input"
                            type="text"
                            name="nome"
                        />
                    </div>
                    <div className="email">
                        <label className="label">E-mail</label>
                        <input 
                            className="input"
                            type="text"
                            name="email"
                        />
                    </div>
                    <div className="email">
                        <label className="label">Telefone</label>
                        <input 
                            className="input"
                            type="text"
                            name="email"
                        />
                    </div>
                    <div className="password">
                        <label className="label">Endereço</label>
                        <input 
                            className="input"
                            type="text"
                            name="senha"
                        />
                    </div>
                    <div>
                        <button className="submit">Cadastre-se: </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignUpWorkshop
