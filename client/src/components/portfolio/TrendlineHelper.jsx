import React from "react";

class TrendlineHelper extends React.Component {
  render() {
    const handleClick = (e) => {
      this.props.onButtonClick(e.target.innerHTML);
    };

    const buttons = this.props.portfolioArr.map((item) => (
      <button key={item} type="button" className="btn btn-primary" onClick={handleClick}>
        {item}
      </button>
    ));

    return (
      <>
        <div className="grid grid-rows overflow-y-auto h-[50vh]">
          <button type="button" className="btn btn-primary" onClick={handleClick}>Portfolio</button>
          {buttons}
        </div>
      </>
    );
  }
}

export default TrendlineHelper;
