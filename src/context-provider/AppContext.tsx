import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";

export type NewsType = {
  author_id: number;
  body: string;
  created_at: string;
  id: number;
  image_url: string;
  title: string;
};

export type AuthorType = {
  id: number;
  name: string;
  role: string;
  place: string;
  avatar_url: string;
};

interface AppContextProps {
  children: ReactNode;
}

interface NewsIDContextInterface {
  newsId: number;
  setNewsId: Dispatch<SetStateAction<number>>;
}

interface NewsContextInterface {
  news: NewsType[];
  setNews: Dispatch<SetStateAction<NewsType[]>>;
}

interface AuthorContextInterface {
  authors: AuthorType[];
  setAuthors: Dispatch<SetStateAction<AuthorType[]>>;
}

export const NewsIDContext = createContext<NewsIDContextInterface>({
  newsId: 1,
  setNewsId: () => {},
});

export const NewsContext = createContext<NewsContextInterface>({
  news: [],
  setNews: () => {},
});

export const AuthorContext = createContext<AuthorContextInterface>({
  authors: [],
  setAuthors: () => {},
});

const AppContext: React.FC<AppContextProps> = ({ children }) => {
  const [newsId, setNewsId] = useState<number>(1);
  const [news, setNews] = useState<NewsType[]>([]);
  const [authors, setAuthors] = useState<AuthorType[]>([]);

  return (
    <NewsIDContext.Provider value={{ newsId: newsId, setNewsId: setNewsId }}>
      <NewsContext.Provider value={{ news: news, setNews: setNews }}>
        <AuthorContext.Provider value={{ authors: authors, setAuthors }}>
          {children}
        </AuthorContext.Provider>
      </NewsContext.Provider>
    </NewsIDContext.Provider>
  );
};

export default AppContext;
