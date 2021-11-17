import React from 'react';
import styled from 'styled-components';
import { categories } from '../data';
import CategoryItem from './CategoryItem';
const Container = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;
`;
const Categories = () => {
  return (
    <Container>
      {categories.map((category) => (
        <CategoryItem item={category} key={category.id} />
      ))}
    </Container>
  );
};

export default Categories;
