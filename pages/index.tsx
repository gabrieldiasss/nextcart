import { GlobalStyles } from "../styles/global";

import { Container } from '../styles/app'
import Header from "../components/Header";
import Content from "../components/Content";

export default function Home() {
  return (
    <Container>

      <GlobalStyles />

      <Header />

      <Content />

      

    </Container>
  )
}
