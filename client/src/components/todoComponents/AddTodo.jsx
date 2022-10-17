const AddTodo = () => {
    return (
        <form>
            <div className="form-floating ps-5 pe-5">
                <textarea className="form-control" placeholder="What do you need to do?" id="floatingTextarea2" required></textarea>
            </div>
            <div className="pt-3 ps-5 ms-1 row">
                <button type="submit" className="btn col-md-auto py-3 px-3">Add</button>
            </div>
        </form>
    )
};

export default AddTodo;