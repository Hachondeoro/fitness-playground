import React, { useState, useEffect } from "react";
import { selectWeight, setSame, decrease } from "@redux/slices/calories";
import { useAppSelector, useAppDispatch } from "@redux/hooks";

const Calories: React.FC = () => {
    const weight = useAppSelector(selectWeight);
    const dispatch = useAppDispatch();

    return (
        <div>
            Your daily calorie intake is:
            {weight * 30}
        </div>
    );
};

export default Calories;
