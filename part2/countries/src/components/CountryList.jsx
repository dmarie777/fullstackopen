const CountryList = ( {name , showInfo} ) => {
    return (
        <>
        <p >{name}<button onClick={showInfo}>show</button></p>
        </>
    )
}

export default CountryList