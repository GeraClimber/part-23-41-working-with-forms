import React, {Component} from "react"

class App extends Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            isFriendly: true,
            gender: "",
            favColor: "blue"
        }
        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange(event) {
      const {name, value, type, checked} = event.target
      type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value })
    }
    
    render() {
        return (
            <form>
                <input 
                    type="text" 
                    value={this.state.firstName} 
                    name="firstName" 
                    placeholder="First Name" 
                    onChange={this.handleChange} 
                />
                <br />
                <input 
                    type="text" 
                    value={this.state.lastName} 
                    name="lastName" 
                    placeholder="Last Name" 
                    onChange={this.handleChange} 
                />
                
                {
                    /**
                     * Другие полезные элементы форм:
                     * 
                     * <textarea /> 
                     * <input type="checkbox" />
                     * <input type="radio" />
                     * <select> и <option> 
                     */
                }

                <br />
                <textarea 
                  name="textArea"
                  value={this.state.textArea}
                  onChange={this.handleChange}
                />
                <br />
                <label>
                  <input 
                      type="checkbox" 
                      name="isFriendly"
                      checked={this.state.isFriendly}
                      onChange={this.handleChange}
                  /> Is friendly?
                </label>
                <br />
                <br />
                <label>
                  <input 
                    type="radio" 
                    name="gender"
                    value="male"
                    checked={this.state.gender === "male"}
                    onChange={this.handleChange}
                  /> Male
                </label>
                <br />
                <label>
                  <input 
                    type="radio" 
                    name="gender"
                    value="female"
                    checked={this.state.gender === "female"}
                    onChange={this.handleChange}
                  /> Female
                </label>

                <br />
                <label>Favorite Color:</label>
                  <select 
                    value={this.state.favColor}
                    onChange={this.handleChange}
                    name="favColor"
                  >
                    <option value="blue">Blue</option>
                    <option value="green">Green</option>
                    <option value="red">Red</option>
                    <option value="orange">Orange</option>
                    <option value="yellow">Yellow</option>
                  </select>

                <h1>{this.state.firstName} {this.state.lastName}</h1>
                <h2><font color="#3AC1EF">You are a {this.state.gender}</font></h2>
                <h2><font color="#3AC1EF">Your favorite color is {this.state.favColor}</font></h2>
            </form>
        )
    }
}

export default App