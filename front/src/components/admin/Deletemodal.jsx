import React from 'react';

const Deletemodal = (props) => {

    const handleDelete = async (e, id) => {
        e.preventDefault();
        const request = await fetch(`${process.env.REACT_APP_HOST}:${process.env.REACT_APP_PORT}/api/admins/${id}`, {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            id: id,
          }),
        });
        const response = await request;
        console.log(response);
        props.setRender(!props.render);
      };
    return ( 
        <div>
        <h1 className='status-del'>{`Are you sure you want to delete ${props.name}?`}</h1>
        <button
        className="yes-del"
        onClick={e => {
            handleDelete(e,props.id);
            props.setShow(false);
        }}
        >YES</button>
        <button
        className="no-del"
        onClick={() => {
            props.setShow(false);
        }}
        >NO</button>
        </div>
     );
}
 
export default Deletemodal;