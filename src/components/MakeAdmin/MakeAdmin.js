import React from 'react';
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';

const MakeAdmin = () => {
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = data => {
        fetch('http://localhost:8500/makeAdmin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    swal('Good Job', 'New Admin Added to database', 'success')
                }
            })
            .catch(error => {
                swal('Internal Server Error', 'Something went wrong', 'error');
            })
    };
    
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='row p-md-5 pt-4'>
                    <div className='col-md-7 pl-0'>
                        <div className='row px-md-0 px-2'>
                            <div className="col-md-9">
                                <input className='form-control mb-2' type="email" placeholder="doe@gmail.com" name="email" ref={register({
                                    required: true, maxLength: 100, pattern: /^\S+@\S+\.\S+$/
                                })} />
                                <p className='text-danger mb-0'>{errors.email && '* This field is required'}</p>
                            </div>
                            <div className="col-md-3 pb-4 pl-md-0">
                                <input className='btn btn-success px-5' type="submit" value="submit" />
                            </div>
                        </div>
                    </div>
                </div>
            </form>

        </>
    );
};

export default MakeAdmin;