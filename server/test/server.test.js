import chai, { expect } from "chai";
import chaiHttp from "chai-http";
import { describe } from "mocha";

import server from "../server.js";
import Todo from "../models/todo.model.js";
import mockTodos from "./mockData/mockTodos.js";
import mockUsers from "./mockData/mockUsers.js";
import { goodTodo, badTodo } from "./mockData/testInputs.js"

chai.use(chaiHttp);

describe(`Server tests with to-do collection`, () => {

    beforeEach(async () => {
        await Todo.deleteMany()
            .then(() => console.log(`Todos collection cleared`))
            .catch(err => {
                console.log(`Unable to clear todos: ${err}`);
                throw new Error();
            });

        await Todo.insertMany(mockTodos)
            .then(() => console.log(`Collection populated with mock todos`))
            .catch(err => {
                console.log(`Unable to insert todos: ${err}`);
                throw new Error();
            });
    });

    describe(`index route tests`, () => {

        it(`should return all mock todos`, async () => {
            const res = await chai.request(server)
                .get(`/`)

            expect(res.status).to.equal(200);
            expect(res.body).to.be.an(`array`);
            expect(res.body.length).to.be.equal(mockTodos.length);
        });

        it(`should return the todos in order by due date`, async () => {
            const res = await chai.request(server)
                .get(`/`)

            expect(res.body[0].body).to.be.equal(`Follow TDD`);
            expect(res.body[1].body).to.be.equal(`Commit often`);
            expect(res.body[2].body).to.be.equal(`Open pull request`);
            expect(res.body[3].body).to.be.equal(`Think in React`);
            expect(res.body[4].body).to.be.equal(`Add, commit, push, repeat!`);
        });
    });

    describe(`add to-do route tests`, () => {

        it(`should have status 201 when a to-do is added successfully`, async () => {
            const res = await chai.request(server)
                .post(`/add`)
                .send(goodTodo);

            expect(res).to.have.status(201);
            expect(res.body).to.be.an(`object`);
            expect(res.body).to.have.property(`message`, `To-do added successfully`);
        });

        it(`should have 422 status when to-do is not added`, async () => {
            const res = await chai.request(server)
                .post(`/add`)
                .send(badTodo);

            expect(res).to.have.status(422);
            expect(res.body).to.be.an(`object`);
            expect(res.body).to.have.property(`message`, `Unable to add to-do`);
        });
    });

    describe(`Edit route tests`, () => {
        describe(`with GET request`, () => {

            it(`should return a specific to-do`, async () => {
                const res = await chai.request(server)
                    .get(`/`)

                const _id = res.body[0]._id;
                const body = res.body[0].body;

                const res1 = await chai.request(server)
                    .get(`/edit/${_id}`)

                expect(res1).to.have.status(200);
                expect(res1.body).to.be.an(`object`);
                expect(res1.body.body).to.be.equal(body);
            });

            it(`should have status 404 when the to-do can't be found`, async () => {
                const res = await chai.request(server)
                    .get(`/edit/404badTodoID`)

                expect(res).to.have.status(404);
                expect(res.body).to.be.an(`object`);
                expect(res.body).to.have.property(`message`, `To-do not found`);
            });
        });

        describe(`with PUT request`, () => {

            it(`should have status 201 when the to-do updates successfully`, async () => {
                const res = await chai.request(server)
                    .get(`/`)

                const _id = res.body[0]._id;
                const body = `I've been updated`;
                const todoStatus = `In progress`;
                const deadline = res.body[0].deadline;
                const putReq = { _id, body, todoStatus, deadline };

                const res1 = await chai.request(server)
                    .put(`/edit/${_id}`)
                    .send(putReq)

                expect(res1).to.have.status(201);
                expect(res1.body).to.be.an(`object`);
                expect(res1.body).to.have.property(`message`, `To-do updated successfully`);
            });

            it(`should have 400 when to-do can't be updated`, async () => {
                const res = await chai.request(server)
                    .get(`/`)

                const _id = res.body[0]._id;
                const body = `~~I've been updated`;
                const todoStatus = `In progress`;
                const deadline = res.body[0].deadline;
                const putReq = { _id, body, todoStatus, deadline };

                const res1 = await chai.request(server)
                    .put(`/edit/${_id}`)
                    .send(putReq)

                expect(res1).to.have.status(400);
                expect(res1.body).to.be.an(`object`);
                expect(res1.body).to.have.property(`message`, `Unable to update to-do`);
            });

            it(`should have 404 status when the to-do can't be found`, async () => {
                const res = await chai.request(server)
                    .put(`/edit/404badTodoID`)
                    .send({})

                expect(res).to.have.status(404);
                expect(res.body).to.be.an(`object`);
                expect(res.body).to.have.property(`message`, `To-do not found`);
            });
        });

        describe(`with DELETE request`, () => {
            it(`should have status 200 when the to-do is deleted successfully`, async () => {
                const res = await chai.request(server)
                    .get(`/`)

                const _id = res.body[0]._id;

                const res1 = await chai.request(server)
                    .delete(`/edit/${_id}`)

                expect(res1).to.have.status(204);
                expect(res1.body).to.be.an(`object`);
            });

            it(`should have status 404 when the to-do can't be found`, async () => {
                const res = await chai.request(server)
                    .delete(`/edit/404badTodoID`)

                expect(res).to.have.status(404);
                expect(res.body).to.be.an(`object`);
                expect(res.body).to.have.property(`message`, `To-do not found`);
            });
        });
    });
});

describe(`Server tests with users collection`, () => {

    beforeEach(async () => {
        await User.deleteMany()
            .then(() => console.log(`Users collection cleared`))
            .catch(err => {
                console.log(`Unable to clear users: ${err}`);
                throw new Error();
            });

        await User.insertMany(mockUsers)
            .then(() => console.log(`Collection populated with mock users`))
            .catch(err => {
                console.log(`Unable to insert users: ${err}`);
                throw new Error();
            });
    });

    describe(``, () => {

    });
});