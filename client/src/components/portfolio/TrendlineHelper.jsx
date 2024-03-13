import React from "react";

class TrendlineHelper extends React.Component {
  render() {
    const handleClick = (e) => {
      this.props.onButtonClick(e.target.innerHTML);
    };

    const buttons = this.props.portfolioArr.map((item) => (
      <button key={item} type="button" className="btn btn-primary text-sm sm:text-base md:text-lg p-2 m-1" onClick={handleClick}>
        {item}
      </button>
    ));

    return (
      <>
        <div className="grid grid-rows overflow-y-auto min-h-[20vh] max-h-[60vh]">
          <button type="button" className="btn btn-primary text-sm sm:text-base md:text-lg p-2 m-1" onClick={handleClick}>Portfolio</button>
          {buttons}
        </div>
      </>
    );
  }
}

export default TrendlineHelper;
