import React, { Component } from 'react';

class reponsive extends Component {
    render() {
        return (
            <div>
                <div className="button__control" id="btn">
                    <a className="icon" href="/#" onClick={myButton()}>
                        <ul className="control__mobile">
                            <li>
                                <div className="control" />
                            </li>
                            <li>
                                <div className="control" />
                            </li>
                        </ul>
                        <ul className="control__mobile">
                            <li>
                                <div className="control" />
                            </li>
                            <li>
                                <div className="control" />
                            </li>
                        </ul>
                    </a>
                </div>
            </div>
        );
    }
}

export default reponsive;
function myButton() {
    // var btn = document.getElementById("btn");
    // var left = document.getElementById("left");
    // var right = document.getElementById("right");

    // if (btn.className === "button__control") {
    //     btn.className = "button__control 0";
    //     btn.style.display = "block"
    //     left.style.position = "relative";
    //     right.style.display = "none";
    //     left.style.boxShadow = "40px 40px 20px 40px rgba(0, 0, 0, 0.4)";

    // } else if (btn.className === "button__control 0") {
    //     left.style.position = "unset";
    //     right.style.display = "absolute";
    //     right.style.display = "block";
    //     left.style.boxShadow = "none";
    //     right.style.boxShadow = "40px 40px 20px 40px rgba(0, 0, 0, 0.4)";

    //     btn.className = "button__control";
    // }

}
// nếu như của id btn class == button__control thì class của display + thêm class reponsive còn lại là class bằng right