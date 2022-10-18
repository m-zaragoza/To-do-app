import DatePicker from "react-date-picker";
import TodoModel from "../../utils/TodoModel";

const EditTodo = ({ url }) => {

    return (
        <>
            <h1>Edit your task here</h1>
            <form>
                <div className="form-floating ps-5 pe-5">
                    <textarea className="form-control" placeholder="Edit your task here" id="floatingTextarea2" required></textarea>
                </div>
                <div className="pt-3 ps-5 ms-1 row">
                    <DatePicker />
                    <input type="submit" value="Delete" className="btn col-md-auto py-3 px-3" />
                    <input type="submit" value="Confirm changes" className="btn col-md-auto py-3 px-3" />
                </div>
            </form>
        </>
    )
};

export default EditTodo;