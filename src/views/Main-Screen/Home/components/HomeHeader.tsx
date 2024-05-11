import {Button, Form, Input, InputNumber, Select} from "antd";
import {useAppDispatch} from "@/store";
import {filter} from "@/store/Slice/app.slice.ts";

export const HomeHeader = () => {
  const [form] = Form.useForm();
  const dispatch = useAppDispatch();
  const handleSearch = (values) => {
    dispatch(filter(values))
  }
  return (
    <div className='py-3 mt-2 bg-white rounded'>
      <Form
        onFinish={handleSearch}
        form={form}
        className={'px-3 justify-center'}
        layout="inline">
        <Form.Item label='Giới tính' name={'gender'}>
          <Select
            defaultValue="null"
            style={{width: 120}}
            options={[
              {value: 'male', label: 'Male'},
              {value: 'female', label: 'Female'}
            ]}
          />
        </Form.Item>
        <Form.Item label='Tuổi' name={'age'}>
          <InputNumber min={0} max={100} style={{width: '100%'}}/>
        </Form.Item>

        <Form.Item label='Địa chỉ' name={'address'}>
          <Input style={{width: '100%'}}/>
        </Form.Item>

        <Button onClick={() => {
          form.submit()
        }}> Tìm kiếm </Button>
      </Form>
    </div>
  )
}
