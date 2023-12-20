const { google } = require('googleapis');
const path = require('path');
const fs = require('fs');
const { script } = require('googleapis/build/src/apis/script');

const CLIENT_ID = '1009172821571-fks348iafk7s70tqsc5f20kticaj8qc7.apps.googleusercontent.com'
const CLIENT_SECRET = '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';
const REDIRECT_URI = 'https://developers.google.com/oauthplayground'

const REFRESH_TOKEN = '1//04djqTSPKu6dkCgYIARAAGAQSNwF-L9IrQJIcEc_K23zWaFu5rUiV7DrqyzdSbWzCaP8MlCQ-N1YJltMD_p9XB9x7CCMhfMoeBA8'

const oauth2Client = new google.outh.OAuth2(
    CLIENT_ID,
    CLIENT_SECRET,
    REDIRECT_URI
);

oauth2Client.setCredentials({refresh_token: REFRESH_TOKEN})

const drive = google.drive({
    version: 'v3',
    auth: oauth2Client
})

const filePath = path.join(__dirname, '../imagens/img-banner-jet.jpg')

async function uploadFile(){
    try{

        const response = await drive.files.create({
            requestBody: {
                name: ''
            }
        })

    }catch (error){
        console.log(error.message)
    }
}