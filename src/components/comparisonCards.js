import React from "react";
import "/src/app/globals.css";

const ComparisonCards = () => {
    return (
        <div className="comparison-container">
            <div className="comparison-card">
                <h3>FlockIQ</h3>
                <ul>
                    <li>Unlimited Forms</li>
                    <li>Conditional Logic</li>
                    <li>Collaborative Editing</li>
                </ul>
                <button>Choose Plan</button>
            </div>
            <div className="comparison-card">
                <h3>Google Forms</h3>
                <ul>
                    <li>Basic Forms</li>
                    <li>No Branding Options</li>
                    <li>Limited Logic</li>
                </ul>
                <button>Learn More</button>
            </div>
        </div>
    );
};

export default ComparisonCards;
