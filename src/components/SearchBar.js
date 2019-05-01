import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onFormSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.term);
  };
  // this.onInputChange หมายถึงว่า เราเรียกเพื่อต้องการค่าเป็น Call Back เราไม่ได้ใส่ () ข้างหลัง
  // ถ้าใส่จะหมายความว่า เมื่อ render จะเรียก onInputChange เราเลยเอาวงเล็บออก

  // NOTE : We not put () on the function when we pass a call back funtion in onChange props
  // Lec. 80
  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Image Search Bar</label>
            <input
              type="text"
              value={this.state.term}
              onChange={e => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
