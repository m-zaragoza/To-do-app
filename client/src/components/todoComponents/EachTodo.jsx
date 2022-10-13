const EachTodo = ({ todos }) => {
    const { body, todoStatus, deadline } = todos;

    return (<>
        <div className="card mb-3" style={{ maxWidth: '540px' }} >
            <div className="row g-0">
                <div className="col-md-4">
                    <p>{deadline}</p>
                </div>
                <div className="col-md-8">
                    <div className="card-body d-flex">
                        <p className="card-text">{body}</p>
                        <p className="card-text">{todoStatus}</p>
                        <button className="btn">Edit</button>
                    </div>
                </div>
            </div>
        </div >
    </>
    )
};

export default EachTodo;