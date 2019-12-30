class Form1 extends React.Component {
    constructor() {
        super()
        this.state = {
            isHidden: true
        }
    }
    toggleHidden() {
        this.setState({
            isHidden: !this.state.isHidden
        })
    }
    render() {
        return (
            <form onclick="event.preventDefault()" id="F1" method="POST" name="input1" action="/F2">
                First name: <input type="text" name="fname"></input><br></br>
                Last name: <input type="text" name="lname"></input><br></br>
                Email: <input type="text" name="lname"></input><br></br>
                <input type="password" name="psw"></input><br></br>
                <input id="s1" onClick={this.toggleHidden.bind(this)} type="submit" value="Submit"></input>
                {!this.state.isHidden && <Form2 />}
            </form>
        )
    }
}

class Form2 extends React.Component {
    constructor() {
        super()
        this.state = {
            isHidden: true
        }
    }
    toggleHidden() {
        this.setState({
            isHidden: !this.state.isHidden
        })
    }
    render() {
        return (
            <form id="F2" method="POST" name="input2" action="/F3">
                Line1: <input type="text" name="fname"></input><br></br>
                Line2: <input type="text" name="lname"></input><br></br>
                City: <input type="text" name="lname"></input><br></br>
                State: <input type="text" name="lname"></input><br></br>
                Zip Code: <input type="text" name="lname"></input><br></br>
                Phone Number: <input type="number" name="lname"></input><br></br>
                <input id="s2" onClick={this.toggleHidden.bind(this)} type="submit" value="Submit"></input>
                {!this.state.isHidden && <Form3 />}
            </form>
        )
    }
}

class Form3 extends React.Component {
    constructor() {
        super()
        this.state = {
            isHidden: true
        }
    }
    toggleHidden() {
        this.setState({
            isHidden: !this.state.isHidden
        })
    }
    render() {
        return (
            <form id="F3" method="POST" name="input2" action="/F3">
                Credit Card Number: <input type="number" name="fname"></input><br></br>
                Expiry Date: <input type="date" name="lname"></input><br></br>
                CVV: <input type="text" name="lname"></input><br></br>
                Billing Zip Code: <input type="text" name="lname"></input><br></br>
                <input id="s3" type="submit" value="Submit"></input>
            </form>
        )
    }
}

ReactDOM.render(
    <div><Form1 /></div>,
    document.getElementById('title')
);

$("#F1").click(function (event) {
    event.preventDefault();
});
