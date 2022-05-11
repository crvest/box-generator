import React, { useState } from "react";

const BoxGenerator = ()=>{
    // set state variables
    const [ color, setColor ] = useState('');
    const [ size, setSize ] = useState('');

    // create state variable array of boxes created
    const [ boxList, setBoxList ] = useState([]);

    // submit handler
    const submitBox = (e) => {
        // prevent default
        e.preventDefault();

        // create box object
        let box = {color, size};

        // add box to list of boxes using setter
        setBoxList([...boxList, box]);

        // clear out state variables
        setColor('');
        setSize('');
    }

    return(
        <>
            <form onSubmit={submitBox}>
                <div className="form-group">
                    <label htmlFor="">Color: </label>
                    <input onChange={ (e)=>{setColor(e.target.value)} } type="text" value={color}/>
                </div>
                <div className="form-group">
                    <label htmlFor="">Size: </label>
                    <input onChange={ (e)=>{setSize(e.target.value)} } type="text" value={size}/>
                </div>
                <input type="submit" value="Add Box" className="btn btn-success" />
            </form>
            <hr></hr>

            <div className="box-list">
                {
                    boxList.map((boxObj, idx) => {
                        return(
                            <div className="box" key={idx} style={{width: boxObj.size, height: boxObj.size, backgroundColor: boxObj.color}}></div>
                        )
                        })
                }
            </div>
        </>
    )
}

export default BoxGenerator;