const Notification = ( {message, classN} ) => {
    if (message === null) {
        return null
    }

    return (
        <>
        <p className={classN}>{message}</p>
        </>
    )
}

export default Notification