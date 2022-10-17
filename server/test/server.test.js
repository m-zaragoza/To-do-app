import chai, { expect } from "chai";
import chaiHttp from "chai-http";
import { describe } from "mocha";

import server from "../server.js";
import Todo from "../models/todo.model.js";
import mockTodos from "./mockData/mockTodos.js";

chai.use(chaiHttp);

describe(`Server tests with to-do collection`, () => {

    // beforeEach(async () => {
    //     await Todo.deleteMany()
    //         .then(() => console.log(`Todos collection cleared`))
    //         .catch(err => {
    //             console.log(`Unable to clear todos`);
    //             throw new Error();
    //         });

    //     await Peep.insertMany(mockTodos)
    //         .then(() => console.log(`Collection populated with mock todos`))
    //         .catch(err => {
    //             console.log(`Unable to insert todos`);
    //             throw new Error();
    //         });
    // });

    describe(`index route tests`, () => {

        it(`should return all mock todos`, async () => {
            const res = await chai.request(server)
                .get(`/`)

            expect(res.status).to.equal(200);
            expect(res.body).to.be.an(`array`);
            expect(res.body.length).to.be.equal(mockTodos.length);
        });
    });
});