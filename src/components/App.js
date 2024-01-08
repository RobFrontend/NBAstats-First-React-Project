import React from "react";
import Footer from "./Footer.js";
import Article from "./Article.js";
import Header from "./Header.js";
import News from "./News.js";

export default function App() {
  return (
    <>
      <News />
      <section className="section-article">
        <Header />
        <Article />
      </section>
      <Footer />
    </>
  );
}
