import React from 'react';
import Map from '../components/Map';
import axios from 'axios';

class View extends React.Component {
    points = [];

    async componentDidMount() {
        await this.getPeople();
        navigator.geolocation.getCurrentPosition(pos => {
            console.log('here');
            this.setState({center: {
                    lat: pos.coords.latitude,
                    lng: pos.coords.longitude
                }
            })
        }, err => {
            console.log('here');
            this.setState({center: {
                    lat: 35.998050,
                    lng: -78.937456
                }
            })
        })
    }

    getPeople = async () => {
        await axios.get('http://localhost:5000/positive')
            .then(res => {
                res.data.forEach(person => {
                    this.points.push.apply(this.points, person.locations);
                })
            })
            .catch(err => {
                console.log(err);
            })
        // let minlat = 29.602080;
        // let maxlat = 29.939202;
        // let minlng = -95.558366;
        // let maxlng = -95.173051;
        // let points =[];
        // for(let i = 0; i < 75; i++) {
        //     let lat = minlat + Math.random()*(maxlat-minlat);
        //     let long = minlng + Math.random()*(maxlng-minlng);
        //     points.push([lat, long]);
        // }
        // console.log(JSON.stringify(points));
    }

    render() {
        if(this.state === null) {
            return (
                <center>
                    accept
                </center>
            )
        }
        else {
            return (
                <center>
                    <Map center = {this.state.center} points = {this.points}/>
                </center>
            )
        }
    }
}

export default View;