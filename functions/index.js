const functions = require('firebase-functions');
const admin = require('firebase-admin');
const rp = require('request-promise');
const nodemailer = require('nodemailer');
const cors = require('cors')({origin: true});
const gmailEmail = functions.config().gmail.email;
const gmailPass = functions.config().gmail.password;


//firebase-adminの初期化
admin.initializeApp();

exports.messagePush = functions.firestore
    .document('chat/{room}')
    .onUpdate((change, context) => {
        const isDocument = !!change.after.exists;
        const newDocument = change.after.data();
        const oldDocument = change.before.data();
        console.log({
            isDocument,
            newDocument,
            oldDocument,
        })
        if(isDocument && newDocument.chatLog.length !== oldDocument.chatLog.length){
            const chatLog = newDocument.chatLog;
            const newChat = chatLog[chatLog.length - 1];
            console.log({
                newChat
            });
        }

    })


//テスト用　Hello World
exports.helloWorld = functions.https.onRequest((request, response) => {
    response.send("Hello from Firebase!" + gmailEmail + gmailPass);
});

//メール送信用設定
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: gmailEmail,
        pass: gmailPass
    }
})

//メール送信
exports.sendMail = functions.https.onRequest((req, res) => {
    cors(req, res, () => {

        const to = req.query.to;
        const msg = req.query.msg;

        const mailOptions = {
            from: gmailEmail,
            to: to,
            subject: 'This is a test of email function',
            html: `${msg}`
        }

        return transporter.sendMail(mailOptions, (erro, info) => {
            if(erro){
                return res.send(erro.toString());
            }
            return res.send('Sended');
        })
    })
})