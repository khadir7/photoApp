import React, {Component} from 'react';
import  "../../scss/index.css"
import tabs from "../../constants/tabs";

const Tab = ({tab}) => {
  return(
    <div className="tab"
         style={{
          height:'150px',
          width:'150px',
          border:'1px solid black',
          marginRight: '5px'
        }}
    >
      {tab.text}
    </div>
  )
}

class App extends Component {
    constructor(props){
      super(props);
      this.state = {
        tabsToDisplay:[]
      }
    }

    componentDidMount(){
      this.setState({
        tabsToDisplay: tabs.slice(0,4)
      })
    }

    render () {
      const {tabsToDisplay} = this.state;
      return (
        <div className="tabContainer"
style={{
  display: 'inline-flex',
  alignItems: 'center'
}}
        >
<div onClick={()=>this.setState({tabsToDisplay: tabs.slice(0,4)})} style={{
              fontSize:'75px'
            }}> {`<`} </div>
<div>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
          }}>
          {
            tabsToDisplay.map((item,index) =>
              <Tab key={index} tab={item}/>
            )
          }
          </div>
</div>
          <div onClick={()=>this.setState({tabsToDisplay: tabs.slice(4,7)
})} style={{
                        fontSize:'75px'
                      }}> > </div>
        </div>
      )
    }
}
export default App
