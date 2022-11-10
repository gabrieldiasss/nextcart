import { CardContainer, CardContent } from './styles'

export default function Card() {

    return (
        <CardContainer>
            
            <CardContent>

                <img src="https://github.com/gabrieldiasss.png" alt="" />

                <div>
                    <strong>Número do protocolo</strong>
                    <p>Data de entrada</p>
                    <p>Data de vencimento</p>
                </div>
            </CardContent>

        </CardContainer>
    )
}