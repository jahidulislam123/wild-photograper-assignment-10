import React from 'react';
import expert1 from '../../../../images/experts/expert1.jpg'
import expert2 from '../../../../images/experts/expert2.jpg'
import expert3 from '../../../../images/experts/expert3.jpg'
import expert4 from '../../../../images/experts/expert4.jpg'
import expert5 from '../../../../images/experts/expert5.jpg'
import expert6 from '../../../../images/experts/expert6.jpg'
import Expert from './Expert/Expert';

const experts =[
    {id:1,name: 'mr Romesh', img: expert1},
    {id:2,name: 'Priya  doke', img: expert2},
    {id:3,name: 'Lami  Rock ', img: expert3},
    {id:4,name: 'Avi vai', img: expert4},
    {id:5,name: 'pike algi ', img: expert5},
    {id:6,name: 'shonan Jhonson', img: expert6}
]
const Experts = () => {
    return (
        <div className='container'>
            <h2 className='text-primary text-center mt-5'>Our Expert </h2>
            <div className="row">
                {
                    experts.map(expert=><Expert
                    key={expert.id}
                    expert={expert}
                    
                    ></Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;