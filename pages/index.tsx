import { GlobalStyles } from "../styles/global";

import { Content, TitleContent } from '../styles/app'

import { GetServerSideProps } from "next";

import Card from "../components/Card";

/* interface ElementProps {

} */

export interface LastOrders {
  data: {
    protocol?: string;
    apresentante?: string
    tipo?: string;
    imagem?: string;
    entrada?: number
    vencimento?: number;
  }
}

export default function Home({ data }: any) {

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


        {data.map((info: any) => (
          <Card data={info} />
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