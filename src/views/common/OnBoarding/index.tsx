import {
  Button,
  Form,
  Input,
  InputNumber,
  Radio
} from 'antd';
import {useState} from "react";
import {useAppDispatch} from "@/store";
import {updateProfile} from "@/store/Action/app.action.ts";
import {filter, setFirstAppOpen} from "@/store/Slice/app.slice.ts";
import {useNavigate} from "react-router-dom";
import {MDBCard} from "mdb-react-ui-kit";

const {useForm} = Form

const OnBoarding = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [gender, setGender] = useState();
  const [findGender, setFindGender] = useState();
  const [form] = useForm();

  const handleSubmit = () => {
    form.submit()
  }

  const onFinish = (values : {age: number, address: string}) => {
    dispatch(filter({
      gender: findGender,
      age: values.age,
      address: values.address,
    }))
    dispatch(updateProfile({
      seeking: findGender
    }))
    dispatch(setFirstAppOpen());
  }
  return (
    <div className='flex flex-1 flex-col text-black h-screen'>
      <div className='container flex flex-1 my-[100px] rounded-2xl items-center justify-center p-4'>
        <div className='flex-1'>
          <MDBCard className='bg-white py-5'>
            <Form
              layout="inline"
              className={'flex flex-row items-center justify-center p-2'}
            >
              <Form.Item
                label='Bạn là (nam/nữ)'
              >
                <Radio.Group onChange={(e) => setGender(e.target.value)} value={gender}>
                  <Radio value={'male'}>Nam</Radio>
                  <Radio value={'female'}>Nữ</Radio>
                </Radio.Group>
              </Form.Item>
              <Form.Item
                label='Đang tìm kiếm (nam/nữ)'
              >
                <Radio.Group onChange={(e) => setFindGender(e.target.value)} value={findGender}>
                  <Radio value={'male'}>Nam</Radio>
                  <Radio value={'female'}>Nữ</Radio>
                </Radio.Group>
              </Form.Item>
            </Form>
            <Form
              labelCol={{
                xs: {span: 4},
                sm: {span: 6},
              }}
              wrapperCol={{
                xs: {span: 24},
                sm: {span: 14},
              }}
              form={form}
              onFinish={onFinish}
              // @ts-ignore
              variant="filled"
              size='large'>
              <Form.Item
                label="Độ tuổi"
                name="age"
                rules={[{required: true, message: 'Please input age!'}]}
              >
                <InputNumber min={0} max={100} style={{width: '100%'}}/>
              </Form.Item>

              <Form.Item
                label="Khu vực tìm kiếm"
                name="address"
                rules={[{required: true, message: 'Please input!'}]}
              >
                <Input.TextArea/>
              </Form.Item>
              <Form.Item wrapperCol={{offset: 6, span: 16}}>
                <Button
                  onClick={handleSubmit}
                  type="default" htmlType="submit">
                  Tìm kiếm
                </Button>
              </Form.Item>
            </Form>
          </MDBCard>
        </div>
      </div>
    </div>
  )
}

export default OnBoarding
