import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    decrement,
    increment,
    incrementByAmount,
    incrementAsync,
    selectCount,
} from "@/components/redux-toolkit/counterSlice";
import {
    setSame,
    reset,
    selectMagicnumber,
} from "@/components/redux-toolkit/formulaSlice";
import styles from "@/components/redux-toolkit/Counter.module.css";

const Counter = () => {
    const count = useSelector(selectCount);
    const magicnumber = useSelector(selectMagicnumber);
    const dispatch = useDispatch();
    const [incrementAmount, setIncrementAmount] = useState("20");
    const [magic, setmagic] = useState("7");

    return (
        <div className="mt-5 ">
            <div className={styles.row}>
                <button
                    className={styles.button}
                    aria-label="Increment value"
                    onClick={() => dispatch(increment())}
                >
                    +
                </button>
                <span className={styles.value}>{count}</span>
                <button
                    className={styles.button}
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrement())}
                >
                    -
                </button>
            </div>
            <div className={styles.row}>
                <input
                    className={styles.textbox}
                    aria-label="Set increment amount"
                    value={incrementAmount}
                    onChange={(e) => setIncrementAmount(e.target.value)}
                />
                <button
                    className={styles.button}
                    onClick={() =>
                        dispatch(
                            incrementByAmount(Number(incrementAmount) || 0),
                        )
                    }
                >
                    Add Amount
                </button>
                <button
                    className={styles.asyncButton}
                    onClick={() =>
                        dispatch(incrementAsync(Number(incrementAmount) || 0))
                    }
                >
                    Add Async
                </button>
            </div>
            <div className={styles.row}>
                Frank has {count * 2} number of apples
            </div>
            <div className={styles.row}>
                Your number is {magicnumber}
                <br></br>
                Your magic number is {magicnumber * 1000}
                <br></br>
                Set a new magic number! :<br></br>
                <br></br>
                <br></br>
                <br></br>
                <input
                    type="text"
                    value={magicnumber}
                    onChange={(e) => dispatch(setSame(e.target.value))}
                />
                <button
                    className={styles.button}
                    aria-label="Reset"
                    onClick={() => dispatch({ type: "USER_LOGGED_OUT" })}
                >
                    RESET
                </button>
            </div>
        </div>
    );
};

export default Counter;
