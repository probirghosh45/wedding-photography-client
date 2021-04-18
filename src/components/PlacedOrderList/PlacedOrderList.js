import React, { useEffect, useState } from 'react';
import swal from 'sweetalert';

const PlacedOrderList = ({ placedOrder }) => {
    const [color, setColor] = useState('')
    const [selectedOption, setSelectedOption] = useState(placedOrder.status)

    useEffect(() => {
        if (selectedOption === 'pending') {
            setColor('danger')
        } else if (selectedOption === 'on going') {
            setColor('warning')
        } else if (selectedOption === 'done') {
            setColor('success')
        }
        const id = placedOrder._id;
        const status = selectedOption;
        const data = { id, status }

        fetch(`http://localhost:8500/update/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(resData => {
                if (resData) {
                    swal('Update', 'Work status update successfully', 'success')
                }
            })
            .catch(error => {
                swal(`Can't Update`, 'Something went wrong', 'error');
            })

    }, [selectedOption])

    return (
        <>
            <tbody>
                <tr className='bg-white'>
                    <th scope="row">{placedOrder.name}</th>
                    <td>{placedOrder.email}</td>
                    <td>{placedOrder.service}</td>
                    <td>{placedOrder.projectDetails}</td>
                    <td>
                        <form>
                            <select
                                value={selectedOption}
                                onChange={e => setSelectedOption(e.target.value)}
                                className={`text-${color} bg-dark border rounded p-2 font-weight-bold`} name="status">
                                <option value="pending">pending</option>
                                <option value="on going">on going</option>
                                <option value="done">done</option>
                            </select>
                        </form>
                    </td>
                </tr>
            </tbody>
        </>

    );
};

export default PlacedOrderList;