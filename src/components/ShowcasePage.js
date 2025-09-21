import React, { useEffect, useState } from 'react';
import { fetchProgrammingWorks } from '../services/api';

const ShowcasePage = () => {
    const [works, setWorks] = useState([]);
    const [sortOrder, setSortOrder] = useState('latest');

    useEffect(() => {
        const getWorks = async () => {
            const data = await fetchProgrammingWorks(sortOrder);
            setWorks(data);
        };
        getWorks();
    }, [sortOrder]);

    const handleSortChange = (event) => {
        setSortOrder(event.target.value);
    };

    return (
        <div>
            <h1>编程作品展示</h1>
            <select onChange={handleSortChange} value={sortOrder}>
                <option value="latest">最新作品</option>
                <option value="popular">最火作品</option>
            </select>
            <div className="works-list">
                {works.map((work) => (
                    <div key={work.id} className="work-item">
                        <h2>{work.title}</h2>
                        <p>{work.description}</p>
                        <p>作者: {work.author}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ShowcasePage;