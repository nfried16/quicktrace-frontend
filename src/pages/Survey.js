/*global google*/

import React, { useState } from 'react';
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
import "./survey.css";

const Survey = () => {
  const [componentSize, setComponentSize] = useState('default');
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
  const onSuggestSelect = (place) => {
    console.log(place);
  }
  return (
    <>
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        size={componentSize}
      >
        <Form.Item class="symptomQuery"><label>Have you experienced any symptoms synonymous with COVID-19?</label>
          <Select>
            <Select.Option value="yes">Yes</Select.Option>
            <Select.Option value="no">No</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item class="symptomDate"><label>When did you first start having symptoms?</label>
          <DatePicker />
        </Form.Item>
        <Form.Item class="testResultQuery"><label>Have you received a positive test result?</label>
            <Select>
            <Select.Option value="yes">Yes</Select.Option>
            <Select.Option value="no">No</Select.Option>
            </Select>
        </Form.Item>
        <Form.Item class="testResultDate"><label>Date of the positive test result, if applicable:</label>
          <DatePicker />
        </Form.Item>
        <Form.Item class="InputNumber"><label>How many people are in your household?</label>
          <InputNumber />
        </Form.Item>
        <Form.Item class="highRiskQuery"><label>Are you in contact with high risk individuals on a normal basis?</label>
          <Select>
            <Select.Option value="yes">Yes</Select.Option>
            <Select.Option value="no">No</Select.Option>
          </Select>
        </Form.Item>
        <label>Please enter any places you have visited in the week before your positive COVID test: </label>
        <Geosuggest
        placeholder="Search locations here..."
        onSuggestSelect={onSuggestSelect}
        location={new google.maps.LatLng(53.558572, 9.9278215)}
        radius={20}/>
        <Form.Item label="Switch">
          <Switch />
        </Form.Item>
        <Form.Item class="submitButton">
          <Button>Submit</Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default Survey;