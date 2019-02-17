import React, { Component } from "react";
import { Consumer } from "../../context";
import { Link } from "react-router-dom";
import axios from "axios";
class Contact extends Component {
  state = {
    showContactInfo: true
  };
  onDeleteClick = async (id, dispatch) => {
    await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
    dispatch({ type: "DELETE_CONTACT", payload: id });
  };

  render() {
    const { id, name, email, phone } = this.props.contact;
    const { showContactInfo } = this.state;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div>
              <h1>
                Name: {name}
                <i
                  onClick={() =>
                    this.setState({
                      showContactInfo: !this.state.showContactInfo
                    })
                  }
                  className="fas fa-caret-down"
                  style={{ cursor: "pointer" }}
                />
                <i
                  className="fas fa-times"
                  style={{ cursor: "pointer", color: "red", float: "right" }}
                  onClick={this.onDeleteClick.bind(this, id, dispatch)}
                />
                <Link to={`contact/edit/${id}`}>
                  <i
                    className="fas fa-pencil-alt"
                    style={{
                      color: "black",
                      float: "right",
                      cursor: "pointer",
                      marginRight: "1rem"
                    }}
                  />
                </Link>
              </h1>
              {showContactInfo ? (
                <ul className="list-group">
                  <li className="list-group-item">
                    <h6> Email:{email} </h6>
                  </li>
                  <li className="list-group-item">phone:{phone}</li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}
export default Contact;
