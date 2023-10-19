const Country = ({name, capital, area, languages, flag}) => {
    
    const loopObj = () => {
        let languagesArr = []
        for (let lang in languages) {
            languagesArr.push(languages[lang])
        }
        return languagesArr
    }
    
    return (
        <>
        <h1>{name}</h1>
        <p>capital: {capital}</p>
        <p>area: {area}</p>
        <h2>Languages</h2>
        { 
           loopObj().map(e => <li>{e}</li>) 
        }
        <img src={flag} alt="flag" />
        </>
    )
}

export default Country