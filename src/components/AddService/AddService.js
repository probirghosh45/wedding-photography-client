import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
// import swal from 'sweetalert';
import axios from 'axios';

const AddService = () => {
    const { register, handleSubmit,watch, errors } = useForm();
    // const [file, setFile] = useState(null);
    const [imageURL,setImageURL]=useState(null)

    // const onSubmit = data => {
    //     const formData = new FormData();
    //     formData.append('file', file)
    //     formData.append('taskName', data.taskName)
    //     formData.append('description', data.description)

    //     fetch('http://localhost:8500/addService', {
    //         method: 'POST',
    //         body: formData
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             if(data){
    //                 swal('Good Job', 'New service created successfully!', 'success')
    //             }
    //         })
    //         .catch(error => {
    //             swal('Bad Request', 'Something went wrong', 'error');
    //         })
    // };

    const onSubmit = data => {
        const eventData = {
          name: data.name,
          description:data.description,
          price:data.price,
          imageURL: imageURL
        };
    //    const url= `http://localhost:8500/addService`;
       const url= `https://boiling-retreat-60727.herokuapp.com/addService`;
       console.log(eventData);
   
    fetch(url,{
        method: 'POST',
        headers:{
            'content-type': 'application/json'
        },
        body:JSON.stringify(eventData)
    })
   
    .then(res=>console.log('server activated',res));





    }


    // const handleFileChange = (e) => {
    //     const newFile = e.target.files[0];
    //     setFile(newFile);
    // }

    const handleImageUpload = event => {
        console.log(event.target.files[0])
        const imageData = new FormData();
        imageData.set('key','4441c3916186266ff77bdd932599ecfe'); 
        imageData.append('image',event.target.files[0]);
        
        axios.post('https://api.imgbb.com/1/upload', 
         imageData)
          .then(function (response) {
            setImageURL(response.data.data.display_url);
          })
          .catch(function (error) {
            console.log(error);
          });


    }
  
    console.log(watch("example")); // watch input value by passing the name of it
  

    return (
        <div className='row p-md-5'>

            <form onSubmit={handleSubmit(onSubmit)} className='row d-flex'>

                <div className='col-md-7'>
                    <label for='name'>Package Title</label>
                    <input className='form-control mb-1' type="text" placeholder="Package Title" name="name" ref={register({ required: true, maxLength: 80 })} />
                    <p className='text-danger mb-0'>{errors.name && '* This field is required'}</p>
                </div>

                <div className='col-md-3' style={{ marginTop: '30px' }}>
                    <div className="button-wrapper">
                        <span className="label">
                            <img src={`https://i.ibb.co/7r7FX06/upload.png`} alt="upload-icon" /> Upload image
                        </span>
                        <input type="file" name="upload" id="upload" class="upload-box" placeholder="Upload File" ref={register({ required: true })} onChange={handleImageUpload}/>
                        <p className='text-danger mb-0'>{errors.upload && '* This field is required'}</p>
                    </div>
                </div>

                <div className='col-md-7'>
                    <div className="form-group mt-3">
                        <label for="Textarea">Description</label>
                        <input name="description" placeholder="Enter Description" className="form-control" id="Textarea" rows="4" ref={register({ required: true })} ></input>
                        <p className='text-danger mb-0'>{errors.description && '* This field is required'}</p>
                    </div>
                </div>

                <div className='col-md-7'>
                    <label for='name'>Package Price</label>
                    <input className='form-control mb-1' type="text" placeholder="Package Title" name="price" ref={register({ required: true, maxLength: 80 })} />
                    <p className='text-danger mb-0'>{errors.price && '* This field is required'}</p>
                </div>

                <div className='col-md-3 mb-3 align-self-end'>
                    <input className='btn btn-success btn-block' type="submit" />
                </div>
            </form>
        </div>
    );
};

export default AddService;