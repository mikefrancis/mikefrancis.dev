import * as React from "react";

import Hero from "./../components/styled/Hero";
import Container from "./../components/styled/Container";
import SEO from "../components/SEO";
import Article from "../components/Article";
import Ticker from "../components/Ticker";
import Layout from "../components/layouts/Default";

const Index = () => (
  <>
    <SEO />
    <Layout>
      <Hero>
        <h1>
          Just your friendly neighbourhood{" "}
          <Ticker
            easing="ease-out"
            delay={2000}
            speed={400}
            items={["software engineer", "UI designer", "ops tinkerer"]}
          />
        </h1>

        <p>Currently based in London, UK.</p>
      </Hero>

      <Container>
        <Article
          title="I Am The Seed Tree"
          summary="Marketing website built for the amazing people at Nosy Crow."
          image="https://placehold.it/800x300"
        />
      </Container>
    </Layout>
  </>
);

export default Index;
