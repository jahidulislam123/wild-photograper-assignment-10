import React from 'react';
import jahidul  from '../../images/jahidul islam.jpg'

const About = () => {
    return (
        <div>
            
            <div  className='container mt-5'>
                <div className='bg-secondary rounded d-flex align-items-center'>
                   <div> <img  className='w-100 rounded ms-3' src={jahidul} alt="" /></div>
                    <div className='p-2'>
                    <h2>Name : Jahidul Islam </h2>
                    <h2>Education : Bsc in CSE </h2>
                    <h2>Year: 3rd</h2>
                    <h2>Passion : Web Developing </h2>
                    <p className='p-5'>Goal: I want to be a fullstack web developer . As i am Jankar Mahabub's student so i am hopping i will be able to complete my course with every efficinet things of web developing materials . And i 
                        have another goal here that  i want to go abroad for my higher study thats why i am also taking preparation for ielts ..
                        the most important thing is i want to be a honest man , i want to be a person from whom every body can get good work .
                        
                    </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default About;