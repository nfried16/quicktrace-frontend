import React, {useState} from 'react';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete'
import {Input} from 'antd';

const Autocomplete = () => {
    const [value, setValue] = useState(null);

    return(
        <div style = {{width: '60%'}}>
            <GooglePlacesAutocomplete
            apiKey = {process.env.API_KEY}
            selectProps={{
                value,
                onChange: setValue,
            }}
            />
        </div>
    )
};
export default Autocomplete;