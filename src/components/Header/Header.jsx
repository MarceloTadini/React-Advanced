import style from './Header.module.css'

function Header(){
    return(
        <header className={style.header}>
            <h1>Bem-vindo!</h1>
            <button className={style.btn}>Botão Teste</button>
        </header>
    )
}

export default Header
