import React from 'react';

export const getChatData = async () => {
    const spreadsheetId = '1Fg73KJwE8huq0U8pxVlL_gjlv7TWvfYiV-UnBTEIosQ';
    const response = await fetch(`https://api.graphqlsheet.com/api/${spreadsheetId}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'token': 'bb88b42339262b0990b90a6c89112f22a53d3962'
        },
        body: JSON.stringify({
            query: `
          {
            get (limit: 20) {
              name
              text
            }
          }
        `
        })
    });
    const responseJSON = await response.json();
    console.log(responseJSON);
};

export const setChatData = async (props) => {
    const {
        name,
        text,
    } = props;
    const spreadsheetId = '1Fg73KJwE8huq0U8pxVlL_gjlv7TWvfYiV-UnBTEIosQ';
    const response = await fetch(`https://api.graphqlsheet.com/api/${spreadsheetId}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'token': 'bb88b42339262b0990b90a6c89112f22a53d3962'
        },
        body: JSON.stringify({
            query: `
          mutation {
            add (name: ${name}, text: ${text}) {
              name
              text
            }
          }
        `
        })
    });
    const responseJSON = await response.json();
    console.log(responseJSON);
};