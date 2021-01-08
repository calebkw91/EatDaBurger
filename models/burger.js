let orm = require("../config/orm.js");

let cat = {
    selectAll: (cb) =>
    {
        orm.selectAll("burgers", (res) =>
        {
            cb(res);
        });
    },

    insertOne: (cols, vals, cb) =>
    {
        orm.insertOne("burgers", cols, vals, (res) =>
        {
            cb(res);
        });
    },

    updateOne: (objColVals, condition, cb) =>
    {
        orm.updateOne("burgers", objColVals, condition, (res) =>
        {
            cb(res);
        });
    },

    delete: (table, id, cb) =>
    {
        orm.delete(table, id, (res) =>
        {
            cb(res);
        });
    }
};

// Export the database functions for the controller (catsController.js).
module.exports = cat;