import React, { useEffect, useState } from 'react';
import { Container, Item, ItemImage, ItemTitle } from './styles';
import Separator from './separator';

type Item = {
  id: number;
  name: string;
  link: string; 
};

type Props = {
  section: 'foods' | 'people' | 'places';
};

const baseUrl = 'http://localhost:1337'; 

const InicioContent: React.FC<Props> = ({ section }) => {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${baseUrl}/${section}`);
        if (!res.ok) {
          throw new Error(`Erro ${res.status}: ${res.statusText}`);
        }
        const data = await res.json();
        setItems(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error('Erro ao buscar dados:', err);
        setItems([]);
      }
    };

    fetchData();
  }, [section]);

  return (
    <>
    <Separator section={section} />
    <Container>
      {items.length === 0 && <p>Nenhum item encontrado.</p>}
      {items.map(item => (
        <Item key={item.id}>
          <ItemTitle>{item.name}</ItemTitle>
          {item.link && (
            <ItemImage
              src={`${baseUrl}${item.link}`}
              alt={item.name}
            />
          )}
        </Item>
      ))}
    </Container>
    </>
  );
};

export default InicioContent;
