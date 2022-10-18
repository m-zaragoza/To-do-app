import chai, { expect } from "chai";
import chaiHttp from "chai-http";
import { describe } from "mocha";

import server from "../server.js";
import Todo from "../models/todo.model.js";
import mockTodos from "./mockData/mockTodos.js";
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
        })
    });
});