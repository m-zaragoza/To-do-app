import { NavLink } from 'react-router-dom';

const EachTodo = ({ todosProps }) => {
    // console.log(todosProps);
    const { _id, body, todoStatus, deadline } = todosProps;

    return (<>
        <div className="card mb-3" key={_id} style={{ maxWidth: '540px' }} >
            <div className="row g-0">
                <div className="col-md-4">
                    <p>{deadline}</p>
                </div>
                <div className="col-md-8">
                    <div className="card-body d-flex">
                        <p className="card-text">{body}</p>
                        <p className="card-text">{todoStatus}</p>
                        <NavLink to={`/edit/${_id}`}>
                            <button className="btn">Edit</button>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div >
    </>
    )
};

export default EachTodo;