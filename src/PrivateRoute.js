import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function PrivateRoute(props) {
    const { Component } = props
    const Navigate = useNavigate()
    useEffect(() => {
        const tokenData = sessionStorage.getItem('accessToken');
        if (!tokenData) {
            Navigate('/logout')
        }
    })
    return (
        <>
            <Component />
        </>
    )
}

export default PrivateRoute