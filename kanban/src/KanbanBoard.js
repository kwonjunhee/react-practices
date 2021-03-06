import React from 'react';
import CardList from './CardList';
import styles from './assets/css/KanbaBoard.css';
import cards from './data.json';

const KanbaBoard = () => {
  console.log(cards);
    
  const result = [0,1,2,3,4].filter(function(e){
    return false;
  }) 
  console.log(result);
  return (
    <div className={styles.KanbanBoard}>
      <CardList title={'ToDo'} />
      <CardList title={'Doing'} />
      <CardList title={'Done'} />
    </div>
  )
}

export default KanbaBoard