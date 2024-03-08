import React from "react";

class TrendlineHelper extends React.Component {
  render() {
    const handleClick = (e) => {
      this.props.onButtonClick(e.target.innerHTML);
    };

    return (
      <>
        <div className="container-fluid">
          <button type="button" className="btn btn-primary" onClick={handleClick}>Portfolio</button>
          <button type="button" className="btn btn-primary" onClick={handleClick}>TSLA</button>
          <button type="button" className="btn btn-primary" onClick={handleClick}>AAPL</button>
          <button type="button" className="btn btn-primary" onClick={handleClick}>AMD</button>
        </div>
      </>
    );
  }
}

export default TrendlineHelper;