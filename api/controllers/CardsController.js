/**
 * CardsController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

    createC: (req, res) =>  {
        var message = {
            err: null,
            query: null,
            mes: null
        };

        var nCard = {
            title: req.body.title,
            description: req.body.description,
            initDate: req.body.initDate,
            dueDate: req.body.dueDate,
            state: 1
        };

        sendConsult();
        res.redirect("/");

        async function sendConsult() {
            var createdRecord = await Cards.create(nCard).fetch();
        };
    },

    listC: function (req, res) {
        var message = {
            err: null,
            query: null,
            mes: null
        };

        async.series([
            sendConsult
        ], end);

        function sendConsult(done) {
            Cards.find().exec((err, doc) => {
                if (err) {
                    message.err = "Cards not found - Database error\n" + err;
                    done(err);
                } else {
                    message.mes = "Cards Selected Correctly";
                    message.query = doc;
                    done(null);
                }
            });
        };

        function end() {
            return res.view('homepage', message);
        };
    },

    deleteC: (req, res) => {
        var message = {
            err: null,
            query: null,
            mes: null
        };

        var cId = req.params.id;

        del();
        res.redirect("/");

        async function del() {
            var destroyedRecords = await Cards.destroy({id: cId}).fetch();
        };
    },

    updateC: (req, res) => {
        var message = {
            err: null,
            query: null,
            mes: null
        };

        var mCard = {
            title: req.body.title,
            description: req.body.description,
            initDate: req.body.initDate,
            dueDate: req.body.dueDate,
        };

        mCId = req.params.id;

        upd();
        return res.redirect("/");

        async function upd() {
            message.query = await Cards.update({id: mCId}, mCard).fetch();
        }
    },

    showC: (req, res) => {
        var message = {
            err: null,
            query: null,
            mes: null
        };

        var idC = req.params.id;

        async.series([
            selectOne
        ], end);

        function selectOne(done) {
            Cards.findOne({id: idC}).exec((err, doc) => {
                if (err) {
                    message.err = "Card not found - Database error\n" + err;
                    done(err);
                } else {
                    message.mes = "Card Selected Correctly";
                    message.query = doc;
                    done(null);
                }
            });
        };

        function end() {
            if (message.err) {
                return res.json(message);
            }
            return res.view('viewCard', message);
        };
    },

    changeStateC: (req, res) => {
        var message = {
            err: null,
            query: null,
            mes: null
        };

        var idC = req.params.id;
        var stateS = req.body.status;

        update();
        end();

        async function update() {
            message.query = await Cards.update({id: idC}, {state: stateS}).fetch();
        };

        function end() {
            if (message.err) {
                return res.json(message);
            }
            return res.redirect("/");
        };
    }
};
