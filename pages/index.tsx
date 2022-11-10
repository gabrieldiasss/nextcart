import { GlobalStyles } from "../styles/global";

import { Content, TitleContent } from '../styles/app'
import { GetStaticProps } from "next";
import Card from "../components/Card";

export default function Home() {
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

        <Card />
        <Card />
        <Card />
      </Content>
    </>
  )
}

/* export const getStaticProps: GetStaticProps = async () => {

  // categorys
  const response = await fetch(`https://api.nytimes.com/svc/news/v3/content/section-list.json?q=everything&api-key=${process.env.API_KEY}`)
  const data = await response.json()

  // news
  const responseNews = await fetch(`https://api.nytimes.com/svc/news/v3/content/nyt/all.json?q=everything&api-key=${process.env.API_KEY}`)
  const dataNews = await responseNews.json()

  console.log(data)
  console.log(dataNews)

  return {
    props: {
      category: data,
      newsHome: dataNews
    },

    revalidate: 3600
  }
} */