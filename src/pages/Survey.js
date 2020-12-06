/*global google*/

import React, { useState } from 'react';
import Autocomplete from '../components/Autocomplete'
import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
  AutoComplete,
} from 'antd';
import Geosuggest, { Suggest } from 'react-geosuggest';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import axios from 'axios';
import "./survey.css";

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 4 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 20 },
  },
};
const formItemLayoutWithOutLabel = {
  wrapperCol: {
    xs: { span: 24, offset: 0 },
    sm: { span: 20, offset: 4 },
  },
};

// const Survey = () => {
//   const [componentSize, setComponentSize] = useState('default');
//   const onFormLayoutChange = ({ size }) => {
//     setComponentSize(size);
//   };


//   return (
//     <>
//       <Form
//         labelCol={{ span: 4 }}
//         wrapperCol={{ span: 14 }}
//         layout="horizontal"
//         size={componentSize}
//       >
//         <Form.Item class="symptomQuery"><label>Have you experienced any symptoms synonymous with COVID-19?</label>
//           <Select>
//             <Select.Option value="yes">Yes</Select.Option>
//             <Select.Option value="no">No</Select.Option>
//           </Select>
//         </Form.Item>
//         <Form.Item class="symptomDate"><label>When did you first start having symptoms?</label>
//           <DatePicker />
//         </Form.Item>
//         <Form.Item class="testResultQuery"><label>Have you received a positive test result?</label>
//           <Select>
//             <Select.Option value="yes">Yes</Select.Option>
//             <Select.Option value="no">No</Select.Option>
//           </Select>
//         </Form.Item>
//         <Form.Item class="testResultDate"><label>Date of the positive test result, if applicable:</label>
//           <DatePicker />
//         </Form.Item>
//         <Form.Item class="InputNumber"><label>How many people are in your household?</label>
//           <InputNumber />
//         </Form.Item>
//         <Form.Item class="highRiskQuery"><label>Are you in contact with high risk individuals on a normal basis?</label>
//           <Select>
//             <Select.Option value="yes">Yes</Select.Option>
//             <Select.Option value="no">No</Select.Option>
//           </Select>
//         </Form.Item>
//         <label>Please enter any places you have visited in the week before your positive COVID test: </label>
//         <Form.Item>
//           <Autocomplete />
//         </Form.Item>
//         <Form.Item label="Switch">
//           <Switch />
//         </Form.Item>
//         <Form.Item class="submitButton">
//           <Button>Submit</Button>
//         </Form.Item>
//       </Form>
//     </>
//   );
// };

const Survey = () => {
  const onFinish = async values => {
    let locations = await Promise.all(values.addresses.map(addr => addrToLatLng(addr)));
    locations = locations.filter(el => el !== null);
    const newPerson = {
      name: values.name,
      locations: locations
    }
    console.log(newPerson);
    axios.post('https://quicktrace-backend.herokuapp.com/positive', newPerson)
      .then(res => console.log(res))
      .catch(err => console.log(err))
  };
  const addrToLatLng = async addr => {
    addr.replace(/ /g, '+');
    const latlng = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${addr}&key=${process.env.API_KEY}`)
      .then(res => {return res.data.results[0].geometry.location})
      .catch(err => {console.log(err); return null})
    if(latlng === null) {
      return null;
    }
    return [latlng.lat, latlng.lng];
  }
  return (
    <Form name="dynamic_form_item" {...formItemLayout} onFinish={onFinish}>
      <Form.Item label = 'Name' name = 'name' rules={[
        {
          required: true,
          message: "Please enter your name.",
        },
        ]}>
        <Input style={{ width: '60%' }}/>
      </Form.Item>
      <Form.List
        name="addresses"
      >
        {(fields, { add, remove }, { errors }) => (
          <>
            {fields.map((field, index) => (
              <Form.Item
                {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
                label={index === 0 ? 'Addresses' : ''}
                required={false}
                key={field.key}
              >
                <Form.Item
                  {...field}
                  validateTrigger={['onChange', 'onBlur']}
                  rules={[
                    {
                      required: true,
                      whitespace: true,
                      message: "Please input address or delete this field.",
                    },
                  ]}
                  noStyle
                >
                  <Input style = {{width: '60%'}}/>
                </Form.Item>
                {fields.length > 1 ? (
                  <MinusCircleOutlined
                    className="dynamic-delete-button"
                    onClick={() => remove(field.name)}
                  />
                ) : null}
              </Form.Item>
            ))}
            <Form.Item wrapperCol={{ offset: 4 }}>
              <Button
                type="dashed"
                onClick={() => add()}
                style={{ width: '60%' }}
                icon={<PlusOutlined />}
              >
                Add address
              </Button>
              <Form.ErrorList errors={errors} />
            </Form.Item>
          </>
        )}
      </Form.List>
      <Form.Item wrapperCol = {{offset: 4}}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Survey;