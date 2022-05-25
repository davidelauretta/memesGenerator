import React from "react";

export default function Form() {

    const [meme, setMeme] = React.useState(
        {
            topText: '',
            bottomText: '',
            randomImage: ''
        }
    )

    const [allMemes, setAllMemes] = React.useState([])

    React.useEffect(() => {
        async function getMemes() {
            const res = await fetch('https://api.imgflip.com/get_memes')
            const data = await res.json()
            setAllMemes(data.data.memes)
        }
        getMemes()
    }, [])

    function updateImage() {
        setMeme(prevMeme => {
            return { 
                ...prevMeme,
                randomImage: allMemes[Math.floor(Math.random() * allMemes.length)].url
            }
        })
    }

    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => {
            return (
                {
                    ...prevMeme,
                    [name]: value
                }
            )
        })
    }
 
    return (
        <main>
            <div className="form">
                <input 
                    type='text' 
                    className="form-input" 
                    placeholder="Top text"
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                />
                <input 
                    type='text' 
                    className="form-input" 
                    placeholder="Bottom text"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                />
                <button className="form-button" onClick={updateImage}>Get a new meme image  &#x1F5BC;&#xFE0F;</button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} />
                <h2 className="meme-text top">{meme.topText}</h2>
                <h2 className="meme-text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}
