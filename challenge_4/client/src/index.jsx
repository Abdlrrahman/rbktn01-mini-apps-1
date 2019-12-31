class Page extends React.Component {
    render() {
        return (
            <div class="game-board" >
                <div class="box"></div>
                <div class="box"></div>
                <div class="box"></div>
                <div class="box"></div>
                <div class="box"></div>
                <div class="box"></div>
                <div class="box"></div>
                <div class="box"></div>
                <div class="box"></div>
            </div>
        )
    }
}

ReactDOM.render(<Page />, document.getElementById('S'))