const Persons = ( {person, handleDeletion} ) => {
  
    return (
        <>
            <li> 
                {person.name} {person.number}
                <button onClick={handleDeletion}>Delete</button> 
            </li>

        </>
    )
}

export default Persons