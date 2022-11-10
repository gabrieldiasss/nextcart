import { HeaderContainer } from './styles'
import Image from 'next/image'


export default function Header() {

    return (
        <HeaderContainer>
            <div>
                <Image src="/images/logo.png" alt="" width={527} height={107}/>
            </div>
        </HeaderContainer>
    )
}