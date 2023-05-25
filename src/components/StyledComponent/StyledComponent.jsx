import styled from 'styled-components'

const Caixa = styled.div`
    background-color: blue;
    width: 100px;
    color: white;
    height: 100px;
`

function StyledComponent(){
    return(
        <Caixa>
            Olá
        </Caixa>
    )
}

export default StyledComponent