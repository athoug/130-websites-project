
// Card Component
const Card = (props) => {
    //  dynamic style
    let borderColor = {
        borderLeftColor: props.color
    };
    let numberColor = {
        color: props.color
    };

    return(
        <div className="Card" style={borderColor}>
            <h3 className="title"> Reason <span className="number" style={numberColor}># {props.id + 1} </span></h3>
            <p>{props.text}</p>
        </div>
    );
};

// Random color
function randColor(){
  return '#' + (function co(lor){   return (lor +=
    [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'][Math.floor(Math.random()*16)])
    && (lor.length == 6) ?  lor : co(lor); })('');
}

class Happy extends React.Component {
    constructor() {
        super();
        // load json
        $.getJSON('./js/data.json', function(data) {
            DATA = (data);
        });
        this.data = data;

        this.state = {
            reasons: this.data.reasons,
            showBox: false
        };
        console.log(this.state);
    }

    buttonHandler = () => {
        if(this.state.showBox) {
            this.addHappy(document.getElementById('data').value);
            document.getElementById('data').value = "";
        }
        let status = this.state.showBox;
        this.setState({
            showBox: !status
        })
    }

    addHappy = (happy) => {
        const stateCopy = [...this.state.reasons];
        stateCopy.push(happy);
        this.setState({
            reasons: stateCopy
        });
        localStorage.setItem('data', JSON.stringify(stateCopy));
    }

    keyPressedHandler = (e) => {
        if(e.key === 'Enter') {
            this.addHappy(e.target.value);
            e.target.value = ""
        }
    }

    render() {
        let cards = (
            <div>
                {this.state.reasons.map((text, index) => {
                    return(
                        <Card text={text} key={index} id={index} color={randColor()}/>
                    )
                })}
            </div>
        );

        // toogle input box based on state
        let input = null;
        if(this.state.showBox) {
            input = <input type="text" placeholder="Why are you happy?" onKeyDown={(e) => this.keyPressedHandler(e)} id="data"/>
        }

        return (
            <div>
                <h1> Happiness Reasons </h1>
                <p className="discription">We live in search of happiness yet we forget that it can be find anywhere in anything so share what makes you happy. You never know you might make someone else happy by sharing</p>
                {input}
                <button onClick={(e) => this.buttonHandler(e)}> Add A Reason </button>
                {cards}
            </div>
        );
    }
}

ReactDOM.render(<Happy />, document.getElementById('root'))
