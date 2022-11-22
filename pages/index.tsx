import { Content, TitleContent } from '../styles/app'

import { GetServerSideProps } from "next";

import Card from "../components/Card";
import { LastOrders, Order } from "../interfaces";

export default function Home({ data }: LastOrders) {

   data.sort((a, b) => {
    if( a.vencimento < b.vencimento) {
      return -1
    } else {
      return 1
    }
  })

  return (
    <Content>
      <TitleContent>
        <h1>
          Pedidos
        </h1>

        <span> | Últimos pedidos</span>
      </TitleContent>


      {data.map((info: Order, key) => (
        <Card data={info} key={key} />
      ))}

    </Content>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {

  // orders
  const response = await fetch(`http://localhost:3000/api/orders`)
  const data = await response.json()

  console.log(data)

  return {
    props: {
      data
    },
  }
}