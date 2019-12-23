import React, { Component } from 'react';
import './timeline.css';
import Products from './products/products';
import _ from 'lodash';
import productsConstant from "../../constants/constant.json"

class Timeline extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        localStorage.setItem("productsStorage", JSON.stringify(productsConstant));
    }

    render() {
        const totalYears = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
        return totalYears.map((key, value) => {
            return (
                <div key={value}>
                    {(key % 2 !== 0) ? (
                        <div className="timeline-container left">
                            <div className="content">
                                <h2>{`200${key}`}</h2>
                                <Products year = {_.parseInt(`200${key}`)}></Products>
                            </div>
                        </div>
                    ) : (<div className="timeline-container right">
                        <div className="content">
                            <h2>{(key !== 0) ? (`200${key}`) : (`201${key}`)}</h2>
                            <Products year = {_.parseInt((key !== 0) ? (`200${key}`) : (`201${key}`))}></Products>
                        </div>
                    </div>
                        )}
                </div>
            );
        })
    }
}

export default Timeline;