const Filter = ({ letterToFilter, filterName }) => {
    return (
        <div>
            filter shown with: <input value={letterToFilter} onChange={filterName}/>
        </div>
    )
}

export default Filter