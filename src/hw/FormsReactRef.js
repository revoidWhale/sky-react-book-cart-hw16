import React, { Component } from "react";

const arrPositions = [
  {
    id: "fd",
    value: "Front-end Developer",
    title: "Front-end Developer",
  },
  {
    id: "bd",
    value: "Back-end Developer",
    title: "Back-end Developer",
  },
];

class SumbitRef extends Component {
  state = {
    inputText: "",
    textareaText: "",
    selectText: "",
  };

  inputRef = React.createRef();
  textareaRef = React.createRef();
  selectRef = React.createRef();

  componentDidMount() {
    console.log("cdm", this.inputRef);
  }

  handleChange = () => {
    console.log(this.inputRef.current.value);
    console.log(this.textareaRef.current.value);
    console.log(this.selectRef.current.value);
    this.setState({
      inputText: this.inputRef.current.value,
      textareaText: this.textareaRef.current.value,
      selectText: this.selectRef.current.value,
    });
  };

  render() {
    const { inputText, textareaText, selectText } = this.state;

    return (
      <>
        <form>
          {/* Input */}
          <label>
            Name:
            <input
              ref={this.inputRef}
              type="text"
              name="name"
              value={inputText}
              onChange={this.handleChange}
            />
          </label>
          {/* Textarea */} <br />
          <label htmlFor="text">Text:</label>
          <textarea
            ref={this.textareaRef}
            id="text"
            value={textareaText}
            onChange={this.handleChange}
          />
          {/* Select */} <br />
          <select
            ref={this.selectRef}
            value={selectText}
            onChange={this.handleChange}
          >
            {arrPositions.map(({ id, value, title }) => (
              <option key={id} value={value}>
                {title}
              </option>
            ))}
          </select>
        </form>
      </>
    );
  }
}

export default SumbitRef;
