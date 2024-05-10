import {
  Button,
  Cascader,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Mentions,
  Select,
  TreeSelect,
} from 'antd';
const { RangePicker } = DatePicker;

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 6 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 14 },
  },
};
const OnBoarding = () => {



  return (
    <div className='flex flex-1 flex-col text-black h-screen'>
      <div className='container flex flex-1 my-[100px] rounded-2xl bg-gray-200 items-center justify-center p-4'>
        <div className='flex flex-1 justify-between items-start'>
          <div className='flex-1 font-bold text-6xl text-center'>
            Let's set your imformation
          </div>
          <div className='flex-1'>
            {/*// @ts-ignore*/}
            <Form {...formItemLayout} variant="filled" size='large'>
              <Form.Item label="Input" name="Input" rules={[{ required: true, message: 'Please input!' }]}>
                <Input />
              </Form.Item>

              <Form.Item
                label="InputNumber"
                name="InputNumber"
                rules={[{ required: true, message: 'Please input!' }]}
              >
                <InputNumber style={{ width: '100%' }} />
              </Form.Item>

              <Form.Item
                label="TextArea"
                name="TextArea"
                rules={[{ required: true, message: 'Please input!' }]}
              >
                <Input.TextArea />
              </Form.Item>

              <Form.Item label="Select" name="Select" rules={[{ required: true, message: 'Please input!' }]}>
                <Select />
              </Form.Item>

              <Form.Item
                label="DatePicker"
                name="DatePicker"
                rules={[{ required: true, message: 'Please input!' }]}
              >
                <DatePicker />
              </Form.Item>

              <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
                <Button type="default" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OnBoarding
