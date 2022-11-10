
import { useState } from 'react';
import { Orders } from '../../pages';
import { CardContainer, CardContent, InfosAdd } from './styles'

interface CardProps {
    data: Orders;
}

export default function Card({ data }: CardProps) {

    const [isShow, setIsShow] = useState(false)

    return (
        <CardContainer>

            <CardContent
                onMouseEnter={() => setIsShow(true)}
                onMouseLeave={() => setIsShow(false)}
            >

                <img src={data.imagem} alt="" />

                <div>
                    <strong>{data.protocolo}</strong>
                    <p>Data de entrada: {new Intl.DateTimeFormat('pt-br').format(
                        new Date(data.entrada)
                    )}</p>
                    <p>Data de vencimento: {new Intl.DateTimeFormat('pt-br').format(
                        new Date(data?.vencimento)
                    )}</p>
                </div>
            </CardContent>

            {isShow && (

                <InfosAdd>
                    <strong>Informações adicionais</strong>
                    <div>
                        <p>{data.apresentante}</p>
                        <p>{data.tipo}</p>
                    </div>
                </InfosAdd>
            )}

        </CardContainer>
    )
}