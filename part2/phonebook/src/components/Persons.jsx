const Persons = ( {persons, letterToFilter} ) => {
    const filterNames = persons.filter(person => person.name.charAt(0).toLowerCase() === letterToFilter.toLowerCase())
  
    return (
        <>
            { letterToFilter? 
            filterNames.map(person => <li key={person.name}> {person.name} {person.number }</li>) :
            persons.map(person => <li key={person.name}> {person.name} {person.number }</li>)
            }
        </>
    )
}

export default Persons