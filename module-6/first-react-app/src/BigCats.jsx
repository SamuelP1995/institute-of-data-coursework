import { useState } from "react";

import AddCatForm from './AddCatForm';

const cats = [
    { id: 1, name: 'Cheetah', latinName: 'Acinonyx jubatus', image: 'https://media.istockphoto.com/id/511850954/photo/cheetah.jpg?s=612x612&w=0&k=20&c=nlOlw_e5YvZyzLsan0eCCs3z0S7zEE6xwQ5xkPrwLkY=' },
    { id: 2, name: 'Cougar', latinName: 'Puma concolor', image: 'https://media.istockphoto.com/id/682954094/photo/mountain-lion.jpg?s=612x612&w=0&k=20&c=oyEDpvRtROuE3UV6SAUy1h_he-SdC-OCdf_FEB8njXU=' },
    { id: 3, name: 'Jaguar', latinName: 'Panthera onca', image: 'https://media.istockphoto.com/id/478819163/photo/jaguar-panthera-onca.jpg?s=612x612&w=0&k=20&c=KXRtLkzoik3NqYFaJVIMJwX80nCM4KRuPeMezlAvXjE=' },
    { id: 4, name: 'Leopard', latinName: 'Panthera pardus', image: 'https://media.istockphoto.com/id/465470420/photo/focused.jpg?s=612x612&w=0&k=20&c=xjhwOExrjp-u2TFQRh4V7oI5XUlDddm6YF35AR01IZs=' },
    { id: 5, name: 'Lion', latinName: 'Panthera leo', image: 'https://media.istockphoto.com/id/492611032/photo/the-african-king.jpg?s=612x612&w=0&k=20&c=SPP0WTaFwSTmB_QX7WrWbVBPXiKTg4e8ArZrUAo2G6k='},
    { id: 6, name: 'Snow leopard', latinName: 'Panthera uncia', image: 'https://media.istockphoto.com/id/521375354/photo/snow-leopard-in-snow-storm-iii.jpg?s=612x612&w=0&k=20&c=eWC_IuA1HPGo3YESfHaAKVHOzCKuwjF2i1GXn4Mvce8=' },
    { id: 7, name: 'Tiger', latinName: 'Panthera tigris', image: 'https://media.istockphoto.com/id/627540386/photo/siberian-tiger.jpg?s=612x612&w=0&k=20&c=NLWNOC_uHW0X8rHL7-Ny5i7yiL9j2nDn2E4CO4Bk0v0=' },
];

function BigCats() {

    const [currentCats, setCurrentCats] = useState(cats)

    const handleSort = () => {
        const newCats = currentCats.slice().sort((a, b) => a.name.localeCompare(b.name));
        setCurrentCats(newCats);
    }

    const handleReverse = () => {
        const newCats = currentCats.slice().sort((a, b) => b.name.localeCompare(a.name));
        setCurrentCats(newCats);
    }

    const handlePanthera = () => {
        const newCats = currentCats.filter(cat => cat.latinName.includes('Panthera'));
        setCurrentCats(newCats);
    }

    const handleFullList = () => {
        setCurrentCats(cats);
    }

    const handleAddCat = (newCat) => {
        newCat.id = currentCats.length + 1; 
        setCurrentCats([...currentCats, newCat])
    }

    const handleDelete = (idToDelete) => () => {
        const filteredCats = currentCats.filter(cat => cat.id !== idToDelete)
        setCurrentCats(filteredCats);
    }

    const catItems = currentCats.map((cat, i) => (
        <li key={i}>
            <div className='Card'>
                Name: {cat.name} -<br></br>
                Latin Name: {cat.latinName}<br></br>
                <img src ={cat.image} style={{width:200}}></img><br></br>
                <button onClick={handleDelete(cat.id)}>Delete</button>
            </div>
        </li> 
    )) 

    
    
    return (
        <div className="BigCat" style={{fontWeight: 800, color: "dodgerblue"}}>
            <h2>Just a Couple of Cool Cats</h2>
            <button onClick={handleSort}>Sort</button>
            <button onClick={handleReverse}>Reverse</button><br></br>
            <button onClick={handlePanthera}>Cats of the<br></br>Panthera Family</button>
            <button onClick={handleFullList}>Show full list</button><br></br>
            <div className='CatItems'>
            <ul> 
                { catItems }
            </ul>
            </div>
            <AddCatForm onAddCat={handleAddCat}/>
        </div>
    )
}


export default BigCats