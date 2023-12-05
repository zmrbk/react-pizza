import React from 'react';
import axios from 'axios';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Spinner } from '../components/Spinner';

const FullPizza: React.FC = () => {
  const [pizza, setPizza] = React.useState<{
    imageUrl: string;
    title: string;
    price: number;
  }>();
  const { id } = useParams();
  const navigate = useNavigate();

  React.useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get(`https://654df55bcbc3253557422701.mockapi.io/items/${id}`);
        setPizza(data);
      } catch (error) {
        alert('Ошибка при получении пиццы!');
        navigate('/');
      }
    }
    fetchPizza();
  }, []);

  if (!pizza) {
    return (
      <div className="container">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="container">
      <div className="pizza">
        <img className="pizza__img" src={pizza.imageUrl} alt="" />
        <div className="pizza__info">
          <div className="pizza__content">
            <h2 className="pizza__content-title">{pizza.title}</h2>
            <h4 className="pizza__content-price">{pizza.price} Р</h4>
          </div>
          <Link to={'/'}>
            <button className="button button--outline button--add">
              <span>Назад</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FullPizza;
