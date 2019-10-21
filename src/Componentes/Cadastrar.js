import React, {useState, useEffect} from 'react';
import './Cadastrar.scss';
import Botao from '../Componentes/Botao';
import Input from '../Componentes/Input';
import {Link} from 'react-router-dom'

const Cadastrar = () => {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [confirmEmail, setConfirmEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [count, setCount] = useState(0);
    const [mensagem , setMensagem] = useState("");


    const resposta = (texto) =>{
        setMensagem(texto)
        setTimeout(() =>{
          setMensagem("")
        }, 2000)
      }

    const handleSubmit = e =>{
        e.preventDefault();

        response = fetch('localhost:8080/doador'. method = 'post')

        resposta = {
            "nome": nome,
            "email": email,
            "confirmEmail": confirmEmail,
            "password" : password
            
        }

        if(email === confirmEmail){
          const paylod = {
            nome:nome,
            email: email,
            confirmEmail : confirmEmail,
            password: senha
          }
          localStorage.setItem(`Dados${count}`, JSON.stringify(paylod));
          setCount(count + 1);
          setNome("");
          setEmail("");
          setConfirmEmail("");
          setSenha("");
          resposta("Cadastro realizado com sucesso")
        }else{
          resposta("Os emails não correspondem");
          
        }
    
        }
    return (
        <div className="cadastro">
        <h1>cadastre-se</h1>
        <form onSubmit={handleSubmit}>
    
            <Input 
            type="text" 
            label="Nome" 
            placeholder="Nome Completo"
            atualizarState={setNome}
            value={nome}
            obrigatorio
            />
            
            <Input 
            type="email" 
            label="Email" 
            placeholder="digite o Email"
            atualizarState={setEmail}
            value={email}
            />
    
    
            <Input 
            type="email" 
            label="Redigite o email" 
            placeholder="Confirme o Email"
            atualizarState={setConfirmEmail}
            value={confirmEmail}
            />
            
            <Input 
            type="password" 
            label="Senha" 
            placeholder="digite a senha"
            atualizarState={setSenha}
            value={senha}
            obrigatorio
            />
    
            <Input type="submit" value="Cadastrar"/>
              
            </form> 
          </div>
        )
}
export default Cadastrar;