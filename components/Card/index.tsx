import moment from 'moment'
import Image from 'next/image';
import { useState } from 'react';
import { Order } from '../../interfaces';
import { AdditionnalInformationCard } from '../AdditionnalInformationCard';
import { CardContainer, CardContent } from './styles'

interface CardProps {
    data: Order;
}

export default function Card({ data }: CardProps) {

    const [isShow, setIsShow] = useState(false)

    const src = `${data.imagem}`

    return (
        <CardContainer>

            <CardContent
                onMouseEnter={() => setIsShow(true)}
                onMouseLeave={() => setIsShow(false)}
            >

                <Image width={80} height={80} src={src} alt="" />

                <div>
                    <strong>Protocolo: {data.protocolo}</strong>
                    <p>Data de entrada: {moment(data.entrada).format('lll')}</p>
                    <p>Data de vencimento: {moment(data.vencimento).format('lll')}</p>
                </div>
            </CardContent>

            {isShow && (
                <AdditionnalInformationCard data={data} />
            )}

        </CardContainer>
    )
}