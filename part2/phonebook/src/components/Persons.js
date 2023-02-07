
const Persons = (props) => {
    return (
        props.peopleToShow.map(person => {
            return <div key={person.name}> {person.name} {person.number} </div>
        })
    )
}
export default Persons;