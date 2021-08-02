import React, {useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['samurai x']);

    // const handleAdd = (e) => {
    //     setCategories((categ) => [...categ, 'Dangarompa']);
    // }

    return (
        <>
            <h2>Gif_ExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr/>
            {/* <button onClick = {handleAdd} >Agregar</button> */}
            <br/>
            <ol>
                {
                    categories.map( category => (
                        <GifGrid 
                            key={category}
                            category={category} 
                        />
                    ))
                }
            </ol>
        </>
    )

}

export default GifExpertApp;