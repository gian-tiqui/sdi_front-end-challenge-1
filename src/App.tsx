import axios from "axios";
import { useContext, useEffect, useState } from "react";
import {
  AuthorContext,
  NewsContext,
  NewsType,
} from "./context-provider/AppContext";
import ImageHeader from "./components/ImageHeader";
import ShareButton from "./components/ShareButton";
import NewsSelector from "./components/NewsSelector";
import DateContainer from "./components/DateContainer";

const App = () => {
  const { news, setNews } = useContext(NewsContext);
  const { authors, setAuthors } = useContext(AuthorContext);
  const [selectedNews, setSelectedNews] = useState<NewsType | null>(null);

  useEffect(() => {
    const fetchNews = async () => {
      const response = await axios.get(
        "https://tmsph-sdi-challenges.pages.dev/challenges/news.json"
      );

      const data = response.data;

      setNews(data);
      setSelectedNews(data[0]);
    };

    fetchNews();
  }, [setNews]);

  useEffect(() => {
    const fetchAuthors = async () => {
      const response = await axios.get(
        "https://tmsph-sdi-challenges.pages.dev/challenges/authors.json"
      );

      const data = response.data;

      setAuthors(data);
    };

    fetchAuthors();
  }, [setAuthors]);

  const getAuthorById = (authorId: number) => {
    return authors.find((author) => authorId === author.id);
  };

  return selectedNews ? (
    <main className="p-4">
      <ImageHeader imageUrl={selectedNews.image_url} />
      <section className="w-full flex justify-between px-5">
        <DateContainer date={selectedNews.created_at} />
        <div></div>
        <ShareButton />
      </section>
      <hr />
      <article className="mt-2">
        <p className="text-red-700 font-sans text-sm font-semibold">
          {getAuthorById(selectedNews.author_id)?.name}
        </p>
        <h1 className="font-bold text-xl mb-4">{selectedNews.title}</h1>
        <h2 className="mb-5 font-semibold">{selectedNews.body}</h2>

        <a href="" className="underline font-extrabold text-xs mb-4">
          READ ARTICLE
        </a>
      </article>
      <NewsSelector news={news} onSelect={setSelectedNews} />
    </main>
  ) : (
    <main className="flex justify-center items-center w-screen h-screen">
      <p>loading</p>
    </main>
  );
};

export default App;
