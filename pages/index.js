import Head from 'next/head'
import { connectToDatabase } from 'util/mongodb'

export default function Home({ properties }) {
  
  console.log(properties);
  
  return (
    <div>
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
        <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet"/>
      </Head>

      {/* turtorial went downhill from here. No repo and instructor was copying and pasting alot of code. */}
    </div>
  )
}

export const getServerSideProps = async (context) => {
  const { db } = await connectToDatabase();

  const data = await db
    .collection("listingsAndReviews")
    .find({})
    .limit(20)
    .toArray();
  
  const properties = JSON.parse(JSON.stringify(data));

  console.log(properties);
  
  return {
    props: { properties: properties },
  }
}
