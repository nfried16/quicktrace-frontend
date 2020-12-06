import React, {useState} from 'react';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete'
import {Input} from 'antd';

const Autocomplete = () => {
    const [value, setValue] = useState(null);

    return(
        <div style = {{width: '60%'}}>
            <GooglePlacesAutocomplete
            apiKey = 'AIzaSyD6iZG7xjTCNbAe8DQEHx2euU8lgV-9170'
            selectProps={{
                value,
                onChange: setValue,
            }}
            />
        </div>
    )
};
export default Autocomplete;