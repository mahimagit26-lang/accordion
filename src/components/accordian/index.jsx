//single selection for one click
//multiple selection for one click
import data from "./data"
import { useState } from "react";

export default function Accordian() {
    const [selected, setSelected] = useState(null);


    function handleSingleSelection(getCurrentId) {
        setSelected(getCurrentId);
    }
    console.log(selected);

    return (
        <div className="wrapper">
            <div className="accordian">
                {
                    //here we have used ternary operator where after condition checking
                    //if condition result turns out false "No data found!" will print on screen.
                    data && data.length > 0 ?
                        data.map((dataItem) => <div className="item" key={dataItem.id}>

                            <div
                                onClick={() => handleSingleSelection(dataItem.id)} className="tittle">

                                <h3>{dataItem.question}</h3>
                                <span>+</span>
                            </div>
                            {
                                selected === dataItem.id ?
                                    <div className="content"> {dataItem.answer}</div>
                                    : null
                            }
                        </div>)
                        : (<div>No data found ! </div>
                        )}
            </div>
        </div>
    );
}