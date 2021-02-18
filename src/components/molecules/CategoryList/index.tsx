import React from 'react';
import { useBookingState, useBookingDispatch } from '@/stores/BookingContext';
import * as Styled from './style';

// const { currentItem, changeItem } = selectItem(0, categories);
// current가 undefined 리턴

const categories = [
  {
    id: 0,
    name: '작명',
  },
  {
    id: 1,
    name: '사주',
  },
  {
    id: 2,
    name: '타로',
  },
  {
    id: 3,
    name: '운세',
  },
];

const CategoryList: React.FC = () => {
  const dispatch = useBookingDispatch();
  const context = useBookingState();
  const { category } = context;
  console.log('예약정보', context);
  return (
    <Styled.Container>
      <Styled.Inner>
        <Styled.List>
          {categories.map(_category => (
            <Styled.ListItem key={_category.id}>
              <Styled.CategoryButton
                type="button"
                isSelected={category === _category.name}
                onClick={() =>
                  dispatch({
                    type: 'SELECTCATEGORY',
                    category: _category.name,
                  })
                }
              >
                <Styled.ItemFont>{_category.name}</Styled.ItemFont>
              </Styled.CategoryButton>
            </Styled.ListItem>
          ))}
        </Styled.List>
      </Styled.Inner>
    </Styled.Container>
  );
};

export default CategoryList;
