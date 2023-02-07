const Header = ({course}) => {
    return (
        <h1>{course}</h1>
    )
}
  
const Part = ({part}) => {
    return (
        <p> {part.name} {part.exercises}</p>
    )
}

const Total = ({parts}) => {
    let total = parts.reduce((s, p) => s + p.exercises, 0)
    // console.log("Total", total)
    return (
        <p>Number of exercises {total} </p>
    )
}
  
const Content = ({parts}) => {
    // console.log("Content", parts);
    return parts.map((part) => {
        return <Part key={part.name} part={part} />
    })
}

const Course = ({courses}) => {
    // console.log("Coures: ", courses)
    return courses.map(course =>
        <div key={course.name}>
            <Header course={course.name}/>
            <Content parts={course.parts}/>
            <Total parts={course.parts}/>
        </div>
    )
}

export default Course;