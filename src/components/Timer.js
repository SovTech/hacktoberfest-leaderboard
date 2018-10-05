import * as React from 'react';

class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          time: ''
        };
        this.GetCount = this.GetCount.bind(this);
    }

    static dateFuture = new Date(2018,9,31,23,59,59);

    componentDidMount() {
        this.GetCount();
    }

    GetCount() {
        let dateNow = new Date();                              // grab current date
        let amount = Timer.dateFuture.getTime() - dateNow.getTime(); // calc milliseconds between dates
        let out = '';
    
        // time is already past
        if (amount < 0) {
          out = "Now!";
        } else {
          // date is still good
          let days = 0;
          let hours = 0;
          let mins = 0;
          let secs = 0;
    
          amount = Math.floor(amount/1000);                 // kill the "milliseconds" so just secs
    
          days=Math.floor(amount/86400);                    // days
          amount=amount%86400;
    
          hours=Math.floor(amount/3600);                    // hours
          amount=amount%3600;
    
          mins=Math.floor(amount/60);                       // minutes
          amount=amount%60;
    
          secs=Math.floor(amount);                          // seconds
    
          if(days !== 0){out += days +" day"+((days!==1)?"s":"")+", ";}
          if(days !== 0 || hours !== 0){out += hours +" hour"+((hours!==1)?"s":"")+", ";}
          if(days !== 0 || hours !== 0 || mins !== 0){out += mins +" minute"+((mins!==1)?"s":"")+", ";}
          out += secs + " seconds";
    
          setTimeout(() => {
            this.GetCount();
          }, 1000);
        }
        this.setState({ time: out });
      }

    render() {
        return (
            <h3>{this.state.time}</h3>
        );
    }
}

export default Timer;