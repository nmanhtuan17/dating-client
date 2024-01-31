import {useLocation, useParams} from "react-router-dom";
import {StudentService} from "../../../Services/student.service";
import {useLayoutEffect, useState} from "react";
import {TabHeader} from "../../../Components/Layout/TabHeader";
import {Divider, Skeleton, Typography, Image, Col, Row} from "antd";

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
  console.log(student)
  return (
    <Skeleton loading={loading} avatar paragraph={{rows: 4}}>
      <TabHeader title={`About ${student?.fullname}`}/>
      <Divider/>
      <Row gutter={16} style={{ marginBottom: '20px' }}>
        <Col span={8}>
          <Image
              width={200}
              src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          />
        </Col>
        <Col span={12}>
          <Row style={{ marginBottom: '20px' }}>
            <Col span={10}>
              <Text type="secondary" style={{fontSize: '18px'}}>
                Mã sinh viên:
              </Text>{' '}
            </Col>
            <Col span={14}>
              <Text strong style={{fontSize: '18px'}}>
                {student?.msv}
              </Text>
            </Col>
          </Row>
          <Row style={{ marginBottom: '20px' }}>
            <Col span={10}>
                <Text type="secondary" style={{fontSize: '18px'}}>
                  Ngành học:
                </Text>{' '}
            </Col>
            <Col span={14}>
                <Text strong style={{fontSize: '18px'}}>
                  {student?.major}
                </Text>
            </Col>
          </Row>
          <Row style={{ marginBottom: '20px' }}>
            <Col span={10}>
                <Text type="secondary" style={{ fontSize: '18px' }}>
                  Lớp:
                </Text>{' '}
            </Col>
            <Col span={14}>
                <Text strong style={{ fontSize: '18px' }}>
                  {student?.class}
                </Text>
            </Col>
          </Row>
          <Row style={{ marginBottom: '20px' }}>
            <Col span={10}>
                <Text type="secondary" style={{ fontSize: '18px' }}>
                  Khóa:
                </Text>{' '}
            </Col>
            <Col span={14}>
                <Text strong style={{ fontSize: '18px' }}>
                  {student?.k}
                </Text>
            </Col>
          </Row>
          <Row style={{ marginBottom: '20px' }}>
            <Col span={10}>
                <Text type="secondary" style={{ fontSize: '18px' }}>
                  Email:
                </Text>{' '}
            </Col>
            <Col span={14}>
                <Text strong style={{ fontSize: '18px' }}>
                  {student?.email}
                </Text>
            </Col>
          </Row>
          <Row style={{ marginBottom: '20px' }}>
            <Col span={10}>
                <Text type="secondary" style={{ fontSize: '18px' }}>
                  Số điện thoại:
                </Text>{' '}
            </Col>
            <Col span={14}>
                <Text strong style={{ fontSize: '18px' }}>
                  {student?.number}
                </Text>
            </Col>
          </Row>
          <Row style={{ marginBottom: '20px' }}>
            <Col span={10}>
                <Text type="secondary" style={{ fontSize: '18px' }}>
                  Cố vấn:
                </Text>{' '}
            </Col>
            <Col span={14}>
                <Text strong style={{ fontSize: '18px' }}>
                  {student?.gv}
                </Text>
            </Col>
          </Row>

        </Col>
      </Row>
    </Skeleton>
  )
}

export default StudentDetails
