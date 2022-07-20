import React, {useState} from "react";


const MainContent = props => {

    const results = props.data;

    const [en, setEn] = useState('');
    const [author, setAuthor] = useState('saleh')

    // const [data, setData] = useState({
    //     author: "saleh",
    //     en: ""
    // });

            
    const handleSubmit = () => {
        
        const data = {en, author};

        fetch('https://programming-quotes-api.herokuapp.com/Quotes', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        })
        .then(console.log(data))
        .catch((error) => {
            console.log(error)
        })
    }

    
    return (  

        <div className="main-content-container">

            <div className="quotes-container">
                {results.length > 0 && (
                    <ul className="quotes-list">
                        {results.map(result => (
                            <li className="qoutes-items">{result.en} <p className="author"> - {result.author} </p> </li>
                        ))}
                    </ul>
                )}
            </div>

            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <input className="input-field" type="text" placeholder="Write any qouete..."  onChange={ (e) => setEn(e.target.value) }  value={en}/>
                    <button id="submit-button" type="submit">Submit</button>
                </form>
            </div>

        </div>

    )



}

export default MainContent;