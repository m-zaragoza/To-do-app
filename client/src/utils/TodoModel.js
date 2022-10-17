export default class TodoModel {
    constructor(user, body, todoStatus, deadline) {
        this.user = user;
        this.body = body;
        this.todoStatus = todoStatus;
        this.deadline = deadline;
    };
};