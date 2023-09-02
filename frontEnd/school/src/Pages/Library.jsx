import React from "react";
import Layout from "../conponents/Layout";
import Path from "../conponents/Path";

const books = [
  {
    title: "Science Book",
    description: `
      This is a description for the Science Book. It contains a wealth of knowledge on various scientific topics, ranging from physics and chemistry to biology and astronomy. With over 500 pages of meticulously researched content, this book is a valuable resource for students, researchers, and anyone interested in the wonders of the natural world.

      The Science Book delves into the fascinating world of scientific discoveries, showcasing the contributions of renowned scientists throughout history. From Isaac Newton's laws of motion to Charles Darwin's theory of evolution, this book covers it all.

      In addition to historical insights, the Science Book also explores cutting-edge research and the latest breakthroughs in various scientific fields. Whether you're a novice or an expert, this book will ignite your curiosity and deepen your understanding of the universe.

      Dive into the captivating world of science with this comprehensive book. It's a journey through time and space, unraveling the mysteries of our existence, and inspiring you to explore the boundless realms of scientific exploration.`,
    image: "/imgInfra/lib1.jpeg",
  },
  {
    title: "Technical Book",
    description: `
      The Technical Book is a must-read for anyone interested in technology and engineering. It provides an in-depth look at the latest advancements in the tech industry, from artificial intelligence and machine learning to blockchain and cybersecurity.

      This book is not just a collection of facts and figures; it's a roadmap to the future of technology. It covers the principles behind cutting-edge technologies and offers practical insights into their applications. Whether you're a software developer, an IT professional, or simply a tech enthusiast, this book has something for you.

      The Technical Book also highlights the stories of tech pioneers who have revolutionized the industry. You'll learn about the journeys of innovators like Elon Musk, Steve Jobs, and Mark Zuckerberg, and how their inventions have shaped the modern world.

      With stunning visuals and easy-to-understand explanations, the Technical Book makes complex concepts accessible to everyone. It's a valuable resource for staying updated on the fast-paced world of technology.`,
    image: "/imgInfra/lib2.jpeg",
  },
  {
    title: "Social Science",
    description: `
      The Social Science book is a comprehensive exploration of human society and behavior. It delves deep into the realms of sociology, psychology, anthropology, and more to provide a holistic understanding of how societies function and evolve.

      This book examines the fundamental questions of human existence: Why do we behave the way we do? How do societies form and change? What drives cultural diversity? It offers thought-provoking insights into these complex issues, drawing on the work of influential thinkers and researchers.

      From the theories of Sigmund Freud to the studies of Margaret Mead, the Social Science Book covers a wide range of perspectives and approaches. It also addresses contemporary issues such as globalization, social inequality, and the impact of technology on human relationships.

      Whether you're a student of social sciences or simply curious about the world around you, this book will expand your horizons and deepen your appreciation for the complexities of human society.`,
    image: "/imgInfra/lib3.jpg",
  },
];

const Library = () => {
  return (
    <Layout>
      <Path path={[{ path: "/", name: "Home" }]} page="Library" />
      <section>
        <div className="container py-5">
          <div className="section-title bg-dark text-white rounded-3">
            <h2 className="text-center fs-2 text-monochrome py-2">Library</h2>
          </div>
          <div className="">
            <div className="mainn row mt-5 border rounded p-3 m-3" style={{}}>
              {books.map((book, index) => (
                <div
                  className="row col-12"
                  key={index}
                  style={{ marginTop: "auto" }}
                >
                  <div className="col-md-4">
                    <img
                      alt=""
                      src={book.image}
                      className="images img alt=fluid  rounded"
                    />
                  </div>
                  <div className="col-md-8">
                    <h3>{book.title}</h3>
                    <p className="fs-6">{book.description}</p>
                  </div>
                </div>
              ))}
              <br />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Library;
