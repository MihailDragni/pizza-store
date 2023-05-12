import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const FullPizzas: React.FC = () => {
  const [pizza, setPizza] = useState<{
    imageUrl: string;
    title: string;
    price: number;
  }>();
  const { id } = useParams();
  const navigate = useNavigate();

  console.log(pizza);

  useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get(
          `https://63eb60affb6b6b7cf7dd1913.mockapi.io/pizzas/` + id,
        );
        setPizza(data);
      } catch (error) {
        alert(error);
        navigate('/');
      }
    }
    fetchPizza();
  }, []);
  if (!pizza) {
    return <p>Loading...</p>;
  }
  return (
    <div className="container">
      <img style={{ width: 200, height: 200 }} src={pizza.imageUrl} alt="Pizza" />
      <h1>{pizza.title}</h1>
      <h2>{pizza.price}</h2>
    </div>
  );
};

export default FullPizzas;
