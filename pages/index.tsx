import {useState} from 'react'
import styles from '/styles/Home.module.css'
function test (){

    const [data, setdata] = useState()
    const [input, setInput] = useState('')
    const test = async () => {
        const response = await fetch(`/api/openAI?query=${input}`)
        const data = await response.json()
        setdata(data)
        console.log(data)
    }
    return(
        
        <div>
            <textarea id="imagePrompt"  className={styles.inputBox} onChange={e => setInput(e.target.value)}></textarea>
            <br/>
            <br/>
            <div className={styles.buttonContainer}>
                <button className={styles.button} onClick={test}>Create Shirt</button>
            </div>
            <div className={styles.container} id="container">
                <div>
                    <div className={styles.divimageshirt}>
                    <img  className={styles.topimage} src="tshirt_blank.png" />
                    </div>
                    <div className={styles.divimage}>
                        <img className={styles.imgoverlay} src={data}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default test