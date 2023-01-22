import React, { useState } from 'react';
import listFaqCategory from './listFaqCategory.json';
import { styled } from '@mui/material/styles';



export const faqDetails = () => {
    
    

  return (
    <div>
        {listFaqCategory.map((el)=>(
            
<li className="accordion_item">
      <button className="button">
        {el.question}
        <span className="control">—</span>
      </button>
      <div className="answer_wrapper">
        <div className="answer">{el.answer}</div>
      </div>
    </li>
            

        ))}
     
  </div>
  );
}
