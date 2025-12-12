import { useParams } from 'react-router-dom';
import { Descriptions, Flex, Typography, Tag } from "antd";
import { getMovie } from "../../utils/requests";
import { useEffect, useState } from "react";
import "./MoviePage.css";

const MoviePage = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (id) {
            setLoading(true);
            getMovie(id)
                .then((response) => {
                    if (response.data.status === "success") {
                        setMovie(response.data.data);
                    }
                })
                .catch((error) => {
                    console.error("Ошибка загрузки фильма:", error);
                })
                .finally(() => {
                    setLoading(false);
                });
        }
    }, [id]);

    if (loading) {
        return <div>Загрузка...</div>;
    }

    if (!movie) {
        return <div>Фильм не найден</div>;
    }

    const items = [
        { label: "год", children: movie.details?.year || "Не указано" },
        {
            label: "режиссер",
            children: movie.details?.director ? movie.details.director.replace(/"/g, '') : "Не указано",
        },
        {
            label: "сценарист",
            children: movie.details?.screenwriter ? movie.details.screenwriter.replace(/"/g, '') : "Не указано",
        },
        {
            label: "жанр",
            children: (
                <>
                    {movie.details?.genres?.map((genre) => (
                        <Tag color="#FF7A85" key={genre}>
                            {genre}
                        </Tag>
                    )) || <span>Не указано</span>}
                </>
            ),
        },
        {
            label: "страна",
            children: movie.details?.country || "Не указано",
        },
        {
            label: "описание",
            children: movie.details?.description || "Описание отсутствует",
            span: 3,
        },
    ];

    return (
        <div id="movie-page">
            <div className="content-movie-container">
                <Flex gap={30} align="center">
                    <Typography.Title className="movie-title" level={4}>
                        {movie.title?.ru || movie.title || "Нет названия"}
                    </Typography.Title>
                    {movie.title?.en && (
                        <Typography.Title className="movie-title light" level={4}>
                            {movie.title.en}
                        </Typography.Title>
                    )}
                </Flex>
            </div>
            <div className="content-movie-container">
                <Flex gap={90}>
                    {movie.poster && (
                        <img
                            className="movie-img"
                            src={"https://" + movie.poster}
                            alt={movie.title?.ru || movie.title || "Постер фильма"}
                        />
                    )}
                    <div className="movie-info-container">
                        <Descriptions
                            column={1}
                            colon={false}
                            title={"О фильме"}
                            bordered
                            items={items}
                        />
                    </div>
                </Flex>
            </div>
            {movie.actors && movie.actors.length > 0 && (
                <div className="content-movie-container">
                    <Typography.Title level={5}>Актеры:</Typography.Title>
                    <Flex gap={8} wrap="wrap">
                        {movie.actors.map((actor, index) => (
                            <Tag key={index} color="blue">{actor}</Tag>
                        ))}
                    </Flex>
                </div>
            )}
        </div>
    );
};

export default MoviePage;