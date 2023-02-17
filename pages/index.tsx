import type { NextPage } from "next";
import type { GetStaticProps } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";
import SmallCard from "../components/SmallCard";
import MediumCard from "../components/Mediumcard";
import LargeCard from "../components/LargeCard";
import Footer from "../components/Footer";

type ExploreItem = {
  id: number;
  img: string;
  location: string;
  distance: string;
};

type CardsItem = {
  img: string;
  title: string;
};

export async function getStaticProps() {
  const exploreData = await fetch("https://www.jsonkeeper.com/b/0NVY").then(
    (res) => res.json()
  );
  const cardsData = await fetch("https://www.jsonkeeper.com/b/6SD1").then(
    (res) => res.json()
  );

  return {
    props: {
      exploreData: JSON.parse(JSON.stringify(exploreData)) as ExploreItem[],
      cardsData: JSON.parse(JSON.stringify(cardsData)) as CardsItem[],
    },
  };
}

const Home: NextPage<{
  exploreData: ExploreItem[];
  cardsData: CardsItem[];
}> = ({ exploreData, cardsData }) => {
  return (
    <div className="">
      <Head>
        <title>AirBnB Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header />
      {/* Banner */}
      <Banner />

      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>

          {/* Display each item in the exploreData array */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData?.map(({ id, img, distance, location }) => (
              <SmallCard
                key={id}
                img={img}
                location={location}
                distance={distance}
              />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>

          <div className="flex  space-x-4 overflow-scroll scrollbar-hide p-3 -ml-3">
            {cardsData?.map(({ img, title }) => (
              <MediumCard key={img} img={img} title={title} />
            ))}
          </div>
        </section>

        <LargeCard
          img={"https://links.papareact.com/4cj"}
          title={"The Greatest Outdoors"}
          description={"Wishlists curated by AirBnB."}
          buttonText={"Get Inspired"}
        />
      </main>

      <Footer />
    </div>
  );
};

export default Home;
