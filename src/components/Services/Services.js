import React, { useEffect, useState } from 'react';
import Preloader from '../Preloader/Preloader';
import ServiceTask from '../ServiceTask/ServiceTask';
// import productsData from '../../fakeData/productData.json'
const Services = () => {
    const [allService, setAllService] = useState([])
    const [preloader, setPreloader] = useState(true)
    // const products=productsData; 

    // console.log(products)
    useEffect(() => {
        // fetch('http://localhost:8500/services')
        fetch('https://boiling-retreat-60727.herokuapp.com/services')
        .then(res => res.json())
        .then(data => {
            setAllService(data)
            setPreloader(false)
        })
    }, [])


    return (
        <div className='container'>
            <h3 className='text-center mb-5' style={{ fontWeight: '600' }}>Typical Wedding <span style={{ color: '#5DD233' }}>Packages</span></h3>
            <div className='row mb-5 pb-5 d-flex justify-content-center'>
            {
                preloader && <Preloader />
            }

            {
                allService.map(service => <ServiceTask service={service} key={service.id} />)
            }


            </div>
        </div>
    );
};

export default Services;