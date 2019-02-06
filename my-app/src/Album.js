import React, { Component } from 'react';
import {get} from 'axios';

class Album extends Component {
  constructor(props){
    super(props);
    this.state = {
        pics: []
    }
  }

  
  componentWillMount(){
    const {item} = this.props;
    get(`https://jsonplaceholder.typicode.com/photos?albumId=${item.id}`)
        .then((res) => {
            this.setState({
                pics: res.data
            })
        })
        .catch((e) => {
            console.log(e);
        })  
  }

  render() {
    const {item} = this.props;
    const {pics} = this.state;
    return (
        
      <section>
        <div>
            <div>{item.title}</div>
            <div>
                <span>id: {item.id},</span>
                <span>userId: {item.userId}</span>
            </div>
        </div>
        <div  style={{flex: '1',
            display: 'flex',
            overflow: 'auto'}}>
            <div style={{display:'flex',minHeight:'minContent'}}>
                {pics.map((item, index) => <Picture key={index} item={item}/> )}
            </div>
        </div>
      </section>  
    );
  }
}

const Picture = ({item}) => {
    return(
        <div>
        <div style={{height:'150px',width:'150px',backgroundImage: `url(${item.thumbnailUrl})`,marginRight:'3px'
            ,marginBottom: '3px'
        }}>

        </div>
        <div style={{textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    width: '140px',
    overflow: 'hidden'}}>{item.title}</div>
        </div>
    )
}

export default Album;
