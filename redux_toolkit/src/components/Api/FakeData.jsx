import React from 'react';
import Chance from "chance";

const chance = Chance();

const FakeData = () => {
    console.log("FakeData", chance.name({ middle: true })
)
}

export default FakeData;