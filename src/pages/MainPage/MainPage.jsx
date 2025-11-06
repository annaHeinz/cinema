import { Typography } from "antd";
import { articleData } from "../../utils/mockData";

// map, filter, forEach

const MainPage = () => {
  const data = articleData;
  return (
    <div id="main-page">
      <div className="logo-container">
        <img src="logo_cinema.svg" />
      </div>
      <div className="description-container">
        <Typography.Text>
          Добро пожаловать в <b>CinemaBlog</b> – место, где кино становится
          страстью! Мы анализируем, обсуждаем и вдохновляемся лучшими фильмами
          всех времен. От голливудских блокбастеров до независимого арт-хауса –
          здесь есть кино для каждого.
        </Typography.Text>
      </div>
      <div className="articles-container">
        <Typography.Title level={3}>Главное сегодня</Typography.Title>
        {articleData.map((item) => (
          <div>{item.title}</div>
        ))}
      </div>
    </div>
  );
};

export default MainPage;
