function Recommendation () {
    const currentMonth = new Date().getMonth()
    const isSprint = currentMonth >= 2 && currentMonth <= 5

    if (!isSprint) {
        return <div>Ce n'est pas le moment de rempoter</div>
    }
    return <div>c'est le printemps, rempoter ! </div>
}

export default Recommendation