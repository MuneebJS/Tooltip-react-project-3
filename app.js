class Tooltip extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            opacity: false,
            // display : none,
        }
        this.toggle = this.toggle.bind(this)
    }
    toggle() {
        const fd = ReactDOM.findDOMNode(this)
        this.setState({
            opacity: !this.state.opacity,
            top: fd.offsetTop,
            left: fd.offsetLeft,
            // display : inline
        })
    }
    render() {
        const style = {
            zIndex: (this.state.opacity) ? 1000 : -1000,
            opacity: +this.state.opacity,
            top: (this.state.top || 0) + 20,
            left: (this.state.left || 0) - 30,
            // border : "2px solid black",
            backgroundColor: "silver",
            display: "inline",
            // height : "400px",
            lineHeight: '2em',
            fontWeight: 'bold',
            // fontSize : 40pxk'

        }
        return (
            <div>
                <span onMouseOver={this.toggle} onMouseOut={this.toggle} style={{ color: 'blue' }} >
                    {this.props.children}
                </span>
                <div style={style}>
                    {this.props.text}
                </div>
            </div>
        )
    }
}
ReactDOM.render(
    <div>
        The key to creating the
        <Tooltip text="Tooltip provide us some additional information"> Tooltip </Tooltip>
        component is to be able to take any text,
        hide it
        with<Tooltip text="Cascade Styling Sheet"> CSS </Tooltip>and then make it visible again on mouse over. We'll use if/else
        conditions,<Tooltip text="jsx stands for javascript extension"> JSX </Tooltip>
        and other<Tooltip text="Instruction provided to computer in proper manner"> programming </Tooltip>elements from this project
    </div>,
    document.getElementById('app')
)