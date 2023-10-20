const Country = ({name, capital, area, languages, flag, temperature, wind, iconURL}) => {
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
           loopObj().map(e => <li key = {e}>{e}</li>) 
        }
        <img src={flag} alt="flag" />
        <h2>Weather in {name}</h2>
        <p>Temperature {Math.round(temperature-273.15)} Celsius </p>
        <img src={iconURL} alt="weather icon" />
        <p>Wind {wind} m/s </p>
        </>
    )
}

export default Country