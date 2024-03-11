import {useLocation, useParams} from "react-router-dom";
import {StudentService} from "../../../Services/student.service";
import {useLayoutEffect, useState} from "react";
import {TabHeader} from "../../../Components/Layout/TabHeader";
import {Divider, Skeleton, Typography, Image, Col, Row} from "antd";
import StudentImformation from "../../Main-Screen/StudentImformation";

const { Text } = Typography;
const StudentDetails = () => {
  const {studentId} = useParams();
  const [student, setStudent] = useState();
  const [loading, setLoading] = useState(true);
  useLayoutEffect(() => {
    getDetails()
  }, []);
  const getDetails = async () => {
    try {
      const res = await StudentService.getStudent(studentId);
      setStudent(res.data)
      setLoading(false)
    } catch (e) {
      setLoading(false)
    }
  }
  return (
    <Skeleton loading={loading} avatar paragraph={{rows: 4}}>
      <TabHeader title={`Thông tin của ${student?.fullname}`}/>
      <Divider/>
      <StudentImformation data={student} />
    </Skeleton>
  )
}

export default StudentDetails
