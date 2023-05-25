import style from './Content.module.css'

function Content() {
    return(
        <div className={style.content}>
            <h2>Título</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad porro, voluptatem sunt veritatis aliquid atque dolorum rerum at odio autem deserunt iste nam distinctio esse reiciendis quam, ipsum, debitis pariatur.</p>
            <button className={style.btn}>Outro botão Teste</button>
        </div>
    )
}

export default Content