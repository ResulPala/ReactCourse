import React from 'react';
import Slider from './components/Slider';
import Card from './components/Card';

function App() {
  const cards = [
    {
      title: 'Kart 1',
      description: 'Bu kartın açıklaması 1',
      image: 'kart1.jpg'
    },
    {
      title: 'Kart 2',
      description: 'Bu kartın açıklaması 2',
      image: 'kart2.jpg'
    },
    {
      title: 'Kart 3',
      description: 'Bu kartın açıklaması 3',
      image: 'kart3.jpg'
    }
  ];

  return (
    <div>
      <Slider cards={cards.map((card, index) => <Card key={index} {...card} />)} />
    </div>
  );
}

export default App;
