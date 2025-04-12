const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const { promises } = require("nodemailer/lib/xoauth2");
const mongoose = require("mongoose");

const app = express();

app.use(cors())
app.use(express.json());

mongoose.connect("mongodb+srv://anbu:123@cluster0.q1q1lk0.mongodb.net/passkey?retryWrites=true&w=majority&appName=Cluster0")
    .then(function () {
        console.log("connect")
    })
    .catch(function () {
        console.log("fail")
    })

const credential = mongoose.model("credential", {}, "bulkmail")



app.post("/sendemail", function (req, res) {

    var msg = req.body.msg
    var emails = req.body.emails

    credential.find()
        .then(function (data) {
            const transporter = nodemailer.createTransport({
                service: "gmail",
                auth: {
                    user: data[0].toJSON().user,
                    pass: data[0].toJSON().pass,
                },
            });

            new Promise(async function (resolve, reject) {
                try {
                    for (var i = 0; i < emails.length; i++) {
                        await transporter.sendMail(
                            {
                                from: "anbuvijayan02@gmail.com",
                                to: emails[i],
                                subject: "A message from Bulk Mail App.",
                                text: msg
                            },
                            resolve("Success")
                        );
                    }
                }
                catch (error) {
                    reject("Failed")
                }
            }).then(function () {
                res.send(true)
            }).catch(function () {
                res.send(false)
            })

        })
        .catch(function (error) {
            console.log(error)
        })
});

app.listen(5000, function () {
    console.log("Server started......");
});