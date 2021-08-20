import React from 'react'

export default (props) => {
    return (
        <div className="d-flex justify-content-evenly m-2">
            <button
                type="button"
                onClick={props.funcaoOK}
                className="btn btn-outline-primary">
                    {props.textoOK}
            </button>
            <button
                type="button"
                onClick={props.funcaoNOK}
                className="btn btn-outline-danger">
                {props.textoNOK}
            </button>
        </div>
    )
}
