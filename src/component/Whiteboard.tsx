import { useState } from 'react';
import Container from 'react-bootstrap/Container';

interface Whiteboardable {
    matrixStudents: string[];
}


export default function Whiteboard({ matrixStudents }: Whiteboardable) {
    const [ whiteboardStudent, setWhiteboardStudent ] = useState('sima')
    
    return (
        <Container>
            <p>Today's whiteboard was performed by { whiteboardStudent }</p>
            <button onClick={ () => {
                setWhiteboardStudent( 
                    matrixStudents[Math.floor(Math.random() * matrixStudents.length )] )}
                    }>Update Whiteboard Student</button>
        </Container>
    )
}
