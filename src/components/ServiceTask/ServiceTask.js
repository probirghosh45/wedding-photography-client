import React, { useContext, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';
import { SelectedServiceContext } from '../../App';
import './ServiceTask.css'

const ServiceTask = ( props ) => {
    const [selectedService, setSelectedService] = useContext(SelectedServiceContext);

    // const handleServiceLink = () => {
    //     setSelectedService(service)
    //     sessionStorage.setItem('selectedService', service.taskName);
    // }

    const {name,imageURL,description,price,_id}=props.service

    //animation 
    const ref = useRef();
    const [isHovered, setHovered] = useState(false);
    const [animatedProps, setAnimatedProps] = useSpring(() => {
        return {
            xys: [0, 0, 1],
            config: { mass: 10, tension: 400, friction: 40, precision: 0.00001 },
        }
    });

    return (
        <div className='d-flex justify-content-center'>
            <div className='col-md-3 ml-md-0 ml-sm-0 pl-md-0 pl-sm-0 mx-auto'>
                <animated.div
                    ref={ref}
                    onMouseEnter={() => setHovered(true)}
                    onMouseMove={({ clientX, clientY }) => {
                        // Get mouse x position within card
                        const x =
                            clientX -
                            (ref.current.offsetLeft -
                                (window.scrollX || window.pageXOffset || document.body.scrollLeft));

                        // Get mouse y position within card
                        const y =
                            clientY -
                            (ref.current.offsetTop -
                                (window.scrollY || window.pageYOffset || document.body.scrollTop));

                        // Set animated values based on mouse position and card dimensions
                        const dampen = 50; // Lower the number the less rotation
                        const xys = [
                            -(y - ref.current.clientHeight / 2) / dampen, // rotateX
                            (x - ref.current.clientWidth / 2) / dampen, // rotateY
                            1.07 // Scale
                        ];

                        // Update values to animate to
                        setAnimatedProps({ xys: xys });
                    }}
                    onMouseLeave={() => {
                        setHovered(false);
                        // Set xys back to original
                        setAnimatedProps({ xys: [0, 0, 1] });
                    }}
                    style={{
                        // If hovered we want it to overlap other cards when it scales up
                        zIndex: isHovered ? 2 : 1,
                        // Interpolate function to handle css changes
                        transform: animatedProps.xys.interpolate(
                            (x, y, s) =>
                                `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
                        )
                    }}
                >
                    <Link to={`/checkout/${_id}`} className="card service-card py-3 px-1 mb-5 border-0" style={{ width: '18rem', textDecoration: 'none' }}>
                        {
                             <img style={{ width: '280px', height:'350px' }} className="mx-auto"  alt='package-img' src={imageURL}  />
                        }
                        <div className="card-body">
                            <h5 className="card-title text-center">{name}</h5>
                            <h6 className="card-title text-center">{description}</h6>
                            <h3 className="card-text text-center">STARTING FROM ${price}</h3>
                        </div>
                    </Link>
                </animated.div>
            </div>
        </div>
    );
};

export default ServiceTask;