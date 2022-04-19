import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetails = () => {
    const {serviceId}=useParams();
    return (
        <div>
          <h2>Welcome To Details:{serviceId}</h2>
          <h3>Hi tomra kemon aco </h3>
          <div>
              <Link to="/checkout">
              <button className='btn btn-info'> Procceed CheackOut</button>
              </Link>
          </div>
        </div>
    );
};

export default ServiceDetails;