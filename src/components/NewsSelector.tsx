import { Dispatch, SetStateAction } from "react";
import { NewsType } from "../context-provider/AppContext";

interface NewsSelectorInterface {
  news: NewsType[];
  onSelect: Dispatch<SetStateAction<NewsType | null>>;
}

const NewsSelector: React.FC<NewsSelectorInterface> = ({ news, onSelect }) => {
  const handleSelect = (newsId: number) => {
    const selectedNews = news.find((singleNews) => singleNews.id === newsId);
    if (selectedNews) onSelect(selectedNews);
  };

  return (
    <div className="flex items-center gap-1 mt-10">
      {news.map((singleNews) => (
        <div
          className="grid place-content-center border h-9 w-9 cursor-pointer"
          key={singleNews.id}
          onClick={() => handleSelect(singleNews.id)}
        >
          {singleNews.id}
        </div>
      ))}
    </div>
  );
};

export default NewsSelector;
