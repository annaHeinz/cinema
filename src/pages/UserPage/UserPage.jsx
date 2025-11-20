import { Row, Col } from "antd";
import { moviesData } from "../../utils/mockData";
import MovieCard from "../../components/MovieCard/MovieCard";
import "./UserPage.css";
import { useEffect, useState } from "react";

function UserPage() {
    const [filtered, setFiltered] = useState(moviesData);

    return (
        <div className="userpage-content">
            <h1 style={{ marginBottom: "0%" }}>Обо мне</h1>
            <div className="userpage-content-col">
                <div>
                    <p>имя</p>
                    <p>почта</p>
                    <p>роль</p>
                    <p>любимые жанры</p>
                </div>
                <div style={{ marginLeft: "10%" }}>
                    <p>Ксения Цыгулева</p>
                    <p>example@mail.ru</p>
                    <p>критик</p>
                    <p>драма, боевик, фантастика</p>
                </div>
            </div>
            <h1 style={{ marginTop: "0%" }}>Сохраненные фильмы</h1>
            <div>
                <Row gutter={[40, 40]}>
                    {filtered.map((item) => (
                        <Col span={8}>
                            <MovieCard title={item.title} year={item.year} />
                        </Col>
                    ))}
                </Row>
            </div>

        </div>


    );
}

export default UserPage;