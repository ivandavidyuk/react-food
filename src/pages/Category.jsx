import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getFilteredCategory } from '../api';
import { Preloader } from '../components/Preloader';
import { MealList } from '../components/MealList';

function Category() {
    const { name } = useParams();
    const [meals, setMeals] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getFilteredCategory(name).then((data) => setMeals(data.meals));
    }, [name]);

    return (
        <>
            <button className="btn" onClick={() => navigate(-1)}>
                Go Back
            </button>

            {!meals.length ? <Preloader /> : <MealList meals={meals} />}
        </>
    );
}

export { Category };
