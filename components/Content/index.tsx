import Card from '../Card'
import { Container, TitleContent } from './styles'

export default function Content() {

    return (
        <Container>
            <TitleContent>
                <h1>
                    Pedidos 
                </h1>

                <span> | Últimos pedidos</span>
            </TitleContent>

            <Card />
            <Card />
            <Card />
            
        </Container>
    )
}