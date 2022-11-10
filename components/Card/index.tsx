import { info } from 'console';
import { LastOrders } from '../../pages'
import { CardContainer, CardContent } from './styles'

interface CardProps {
    data: any;
}

export default function Card({ data }: any) {



    return (
        <CardContainer>

            <CardContent>

                <img src={data.imagem} alt="" />

                <div>
                    <strong>{data.protocolo}</strong>
                    <p>Data de entrada: {new Intl.DateTimeFormat('pt-br').format(
                        new Date(data.entrada)
                    )}</p>
                    <p>Data de vencimento: {new Intl.DateTimeFormat('pt-br').format(
                        new Date(data.vencimento)
                    )}</p>
                </div>
            </CardContent>

        </CardContainer>
    )
}