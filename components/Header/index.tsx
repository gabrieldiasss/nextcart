import { HeaderContainer } from './styles'
import Image from 'next/image'


export default function Header() {

    return (
        <HeaderContainer>
            <div>
                <Image src="/images/logo.png" alt="Logo Next Cart"  className={'image'} width={400} height={80}/>
            </div>
        </HeaderContainer>
    )
}