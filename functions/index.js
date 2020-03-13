const functions = require('firebase-functions');
const admin = require('firebase-admin');
const rp = require('request-promise');

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
    response.send("Hello from Firebase!");

});