import Person from "./Person"

const Persons = (props) => {
    return (
        props.peopleToShow.map(person => {
            return <Person key={person.name} person={person}/>
        })
    )
}
export default Persons;