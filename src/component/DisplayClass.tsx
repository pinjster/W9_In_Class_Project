import Container from 'react-bootstrap/Container'

interface DisplayClassableProps {
    matrixStudents: string[]
}

export default function DisplayClass({matrixStudents }: DisplayClassableProps) {
    const instructor = 'sean'
    return(
        <Container>
            <h3>Instructor: { instructor }</h3>
            <h4>Students</h4>
            { matrixStudents.length > 0 ?
              <ul>
                { matrixStudents.map((student, i) => <li key={i} >{student}</li>) }
              </ul> : <></>
            }
            {/* OR 
            { matrixStudents.length > 0 &&
              <ul>
                { matrixStudents.map((student) => <li>{student}</li>) }
              </ul>
            } */}
        </Container>
    )    
}