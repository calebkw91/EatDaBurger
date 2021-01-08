let orm = require("../config/orm.js");

let cat = {
    selectAll: (cb) =>
    {
        orm.all("burgers", (res) =>
        {
            cb(res);
        });
    },

    insertOne: (cols, vals, cb) =>
    {
        orm.create("burgers", cols, vals, (res) =>
        {
            cb(res);
        });
    },

    updateOne: (objColVals, condition, cb) =>
    {
        orm.update("burgers", objColVals, condition, (res) =>
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