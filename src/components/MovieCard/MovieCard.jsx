import { Card } from "antd";
import "./MovieCard.css";

function MovieCard(props) {
  return (
    <Card hoverable cover={props.img}  className="movie-card">
      <Card.Meta title={'«'+props.title+'»'} description={props.year} />
    </Card>
  );
}

export default MovieCard;
