import React from 'react'
import { useState, useEffect } from 'react';
export default function Bookings() {
    const [data, setData] = useState({})
    useEffect(() => {
        const data = localStorage.getItem("slots")
        const AllData = JSON.parse(data);
        setData(AllData)
    }, [])
    return (
        <div className='w-50 border m-auto mt-5'>
            <table className='table'>
                <thead>
                    <tr>
                        <th>slot</th>
                        <th>Date</th>
                        <th>User</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.entries(data).map(([key, value]) => {
                        return (
                            Object.entries(value).map(([key1, value1]) => {
                                return (
                                    <tr key={key1}>
                                        <td>{key}</td>
                                        <td>{key1}</td>
                                        <td>{value1.name}</td>
                                    </tr>
                                )
                            })
                        )
                    })}

                </tbody>

            </table>
        </div>
    )
}
