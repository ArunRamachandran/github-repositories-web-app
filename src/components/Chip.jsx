import React from "react";

import '../stylesheets/components/chip.css';

export const Chip = ({ category, value }) => (
    <span className="chip-container">
        {value} {category}
    </span>
)