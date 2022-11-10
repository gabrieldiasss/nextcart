import { GlobalStyles } from "../styles/global";

import { Content, TitleContent } from '../styles/app'

import { GetServerSideProps } from "next";

import Card from "../components/Card";

/* interface ElementProps {

} */

export interface Orders {
  protocolo?: string;
  apresentante?: string
  tipo?: string;
  imagem?: string;
  entrada?: any;
  vencimento?: any;
}

export interface LastOrders {
  data: Orders[];
}

export default function Home({ data }: LastOrders) {

  console.log(data)

  return (
    <>

      <GlobalStyles />
      <Content>
        <TitleContent>
          <h1>
            Pedidos
          </h1>

          <span> | Últimos pedidos</span>
        </TitleContent>


        {data.map((info: Orders, key) => (
          <Card data={info} key={key} />
        ))}

      </Content>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {

  // categorys
  const response = await fetch(`http://localhost:5000/data`)
  const data = await response.json()

  console.log(data)

  return {
    props: {
      data
    },
  }
}