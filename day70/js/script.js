// component
const Card = (props) => {
    return(
        <div className="Card">
            <h3 className="title"> Reason <span className="number"># {props.id + 1} </span></h3>
            <p>{props.text}</p>
        </div>
    );
};

class Happy extends React.Component {
    constructor() {
        super();
        this.state = {
            reasons: ['Seeing the sun rise.',
                      'Drinking a cup of tea.',
                      'Catching up with your friends.',
                      'Playing with your dog.',
                      'Reading a good book.',
                      'Binge watch a cool new show',
                      'Your code compiles with no errors!',
                      'Working on your project.',
                      'A new episode of your favorite Podcast is out.'
                    ]
        }
    }
    render() {
        let cards = (
            <div>
                {this.state.reasons.map((text, index) => {
                    return(
                        <Card text={text} key={index} id={index} />
                    )
                })}
            </div>
        )

        return (
            <div>
                <h1> Happiness Reasons </h1>
                <p className="discription">We live in search of happiness yet we forget that it can be find anywhere in anything so share what makes you happy. You never know you might make someone else happy by sharing</p>
                {cards}
            </div>
        );
    }
}

ReactDOM.render(<Happy />, document.getElementById('root'))
