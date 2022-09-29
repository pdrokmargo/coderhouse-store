
import React, { Component, useState, useEffect } from 'react';


// Componente de presentación
const Brand = (props) => {
    const [title, setTitle] = useState('Fragantos Default');

    // componentDidUpdate para cualquier cambio
    useEffect(() =>{
        // console.log('Cambio cada que Renderizo');
    })

    // componentDidMount
    useEffect(() =>{
        // console.log('Se montó el componente de función');

        // componentWillUnmount
        return () => {
            // console.log('Se desmontó el componente de función');
        }
    }, [])

    // componentDidUpdate para cambios en title
    useEffect(() =>{
        // console.log('Se actualiza el componente de función cuando title cambie de valor/estado');
    }, [title])

    // componentDidUpdate para cambios en props
    useEffect(() =>{
        // console.log('Se actualiza el componente de función cuando las props cambien de valor/estado');
    }, [props])


    return (
        <h1>{props.children || title}</h1>
    )
}

export default Brand;