import axios from 'axios';


exports.sendToMailchimp = function (email) {
    let mailchimpInstance   = process.env.MY_DATA_CENTER,
        listUniqueId        = process.env.MY_LIST_ID,
        mailchimpApiKey     = process.env.MY_API_KEY

    axios.post('https://' + mailchimpInstance + '.api.mailchimp.com/3.0/lists/' + listUniqueId + '/members/', {
        auth: 'api_key: ' + mailchimpApiKey,
        header: 'content-type: application/json',
        mode: 'no-cors',
        data: {
            "email_address": email,
            "status": "subscribed"
        }
    })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
}

exports.sendToMailchimp2 = function (email) {
    let authenticationString = btoa('api_key: process.env.MY_API_KEY');
        authenticationString = "Basic " + authenticationString;

    let listUniqueId        = process.env.MY_LIST_ID;

    fetch('https://us15.api.mailchimp.com/3.0/lists/' + listUniqueId + '/members', {
        mode: 'no-cors',
        method: 'POST',
        headers: {
            'authorization': authenticationString,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email_address: email,
            status: "subscribed",
        })
    }).then(function(e){
        console.log("fetch finished: " + e )
    }).catch(function(e){
        console.log("fetch error: " + e );
    })
}
