import { useState } from "react";


function AddCatForm({onAddCat}) {
    const [name, setName] = useState('')
    const [latinName, setLatinName] = useState('')
    const [image, setImage] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddCat({name, latinName, image})
        setName('')
        setLatinName('')
        setImage('')
    }

    const handleNameChange = (e) => {
        setName(e.target.value);
    }
    
    const handleLatinNameChange = (e) => {
        setLatinName(e.target.value);
    }

    const handelImageChange = (e) => {
        setImage(e.target.value);
    }

    return (
        <div className="AddCatForm">
            <form onSubmit={handleSubmit}>
                <label>Cat Name:
                    <input name="Name" value={name}
                        onChange={handleNameChange} />
                </label><br></br>
                <label>Latin Name:
                    <input name="latinName" value={latinName}
                        onChange={handleLatinNameChange} />
                </label><br></br>
                <label>Cat Image:
                    <input name='Image' value={image}
                        onChange={handelImageChange} />
                </label><br></br><br></br>
                <button>Add Cat</button>
            </form>
        </div>
    )
}

export default AddCatForm