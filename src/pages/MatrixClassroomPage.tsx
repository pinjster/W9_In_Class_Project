import Body from "../component/Body";
import DisplayClass from "../component/DisplayClass";
import Whiteboard from "../component/Whiteboard";

export default function MatrixClassroom() {
    const matrixStudents: Array<string> = ['christian', 'ben', 'sima', 'david', 'michael', 'tajay'];  

  return (
    <Body sidebar>
        <DisplayClass matrixStudents = {matrixStudents} />
        <Whiteboard matrixStudents = {matrixStudents} />
    </Body>
  )
}
