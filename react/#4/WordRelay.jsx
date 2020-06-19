const React = require("react");
const { Component } = React;

class WordRelay extends Component {
  state = {
    word: '끝말잇기',
    value: '',
    result: ''
  };

  onSubmitForm = (e) =>{
    e.preventDefault();
    if(this.state.word[this.state.word.length -1] === this.state.value[0]){
      this.setState({
        restult: '딩동댕',
        word: this.state.value,
        value: ''
      })
      this.input.focus();
    }

  }

  onChange = (e) =>{
    this.setState({value: e.target.value});
  }

  onRefInput = (c) =>{
   this.input = c; 
  }

  render() {
    return (
      <>
        <div>{this.state.word}</div>
        <form onSubmit={this.onSubmitForm}>
          <input ref={this.onRefInput} value={this.state.value} onChange={this.onChange}/>
          <button>클릭</button>
        </form>
        <div>{this.state.restult}</div>
      </>
    )
  }
}

module.exports = WordRelay;
