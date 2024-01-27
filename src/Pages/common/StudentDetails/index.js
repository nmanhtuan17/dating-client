import {useLocation, useParams} from "react-router-dom";
import {StudentService} from "../../../Services/student.service";
import {useLayoutEffect, useState} from "react";
import {TabHeader} from "../../../Components/Layout/TabHeader";
import {Divider, Skeleton, Space, Image, Col, Row} from "antd";

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
      <TabHeader title={`About ${student?.fullname}`}/>
      <Divider/>
      <Row gutter={16}>
        <Col>
          <Image
            width={200}
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          />
        </Col>
        <Col span={3}>
          <div>Mã sinh viên: </div>
        </Col>
      </Row>
    </Skeleton>
  )
}

export default StudentDetails
