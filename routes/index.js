var express = require('express');
var router = express.Router();
const {google} = require('googleapis');
const youtube = google.youtube('v3');

// YT_URL = 'https://www.googleapis.com/youtube/v3/';


validateHeaders = function(headers) {
  if(!headers['x-api-key']) {
    throw new Error({code: 400, errors: "Missing API key in header. Add x-api-key header"});
  }
}


/* GET some random homepage. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


/**
 * List YT videos
 * https://developers.google.com/youtube/v3/docs/search/list
 */
router.post('/search', async function(req, res, next) {
  try {
    validateHeaders(req.headers);
    user_apikey = req.headers['x-api-key'];

    const auth = new google.auth.GoogleAuth({
      apiKey: user_apikey,
      scopes: [
        'https://www.googleapis.com/auth/youtube.readonly'
      ],
    });

    const authClient = await auth.fromAPIKey(user_apikey);
    google.options({auth: authClient});

    const result = await youtube.search.list(req.body);

    if(result.status == 200) {
      res.send(result.data);
    } else {
      res.send("Error: "+ result.status.toString() + result.statusText);
    }

  } catch (error) {
    console.error("Error: ", error.errors);
    res.status(error.code).send({
      code: error.code, 
      errors: error.errors
    });
  }

});


/**
 * List the different types of categories
 * https://developers.google.com/youtube/v3/docs/videoCategories/list
 */
router.post('/categories', async function(req, res, next) {
  try {
    validateHeaders(req.headers);
    user_apikey = req.headers['x-api-key'];

    const auth = new google.auth.GoogleAuth({
      apiKey: user_apikey,
      scopes: [
        'https://www.googleapis.com/auth/youtube.readonly'
      ],
    });

    const authClient = await auth.fromAPIKey(user_apikey);
    google.options({auth: authClient});

    const result = await youtube.videoCategories.list(req.body);

    if(result.status == 200) {
      res.send(result.data);
    } else {
      res.send("Error: "+ result.status.toString() + result.statusText);
    }

  } catch (error) {
    console.error(error);
    res.status(error.code).send({
      code: error.code, 
      errors: error.errors
    });
  }

});


/**
 * List comments for video
 * https://developers.google.com/youtube/v3/docs/comments/list
 */
 router.post('/comments', async function(req, res, next) {
  try {
    validateHeaders(req.headers);
    user_apikey = req.headers['x-api-key'];

    const auth = new google.auth.GoogleAuth({
      apiKey: user_apikey,
      scopes: [
        'https://www.googleapis.com/auth/youtube.readonly'
      ],
    });

    const authClient = await auth.fromAPIKey(user_apikey);
    google.options({auth: authClient});

    const result = await youtube.comments.list(req.body);

    if(result.status == 200) {
      res.send(result.data);
    } else {
      res.send("Error: "+ result.status.toString() + result.statusText);
    }

  } catch (error) {
    console.error("Error: ", error.errors);
    res.status(error.code).send({
      code: error.code, 
      errors: error.errors
    });
  }

});


/**
 * Information about a specific video
 * https://developers.google.com/youtube/v3/docs/videos/list
 */
 router.post('/video', async function(req, res, next) {
  try {
    validateHeaders(req.headers);
    user_apikey = req.headers['x-api-key'];

    const auth = new google.auth.GoogleAuth({
      apiKey: user_apikey,
      scopes: [
        'https://www.googleapis.com/auth/youtube.readonly'
      ],
    });

    const authClient = await auth.fromAPIKey(user_apikey);
    google.options({auth: authClient});

    const result = await youtube.videos.list(req.body);

    if(result.status == 200) {
      res.send(result.data);
    } else {
      res.send("Error: "+ result.status.toString() + result.statusText);
    }

  } catch (error) {
    console.error("Error: ", error.errors);
    res.status(error.code).send({
      code: error.code, 
      errors: error.errors
    });
  }

});


/**
 * Retrieve playlists
 * https://developers.google.com/youtube/v3/docs/playlists/list
 */
 router.post('/playlist', async function(req, res, next) {
  try {
    validateHeaders(req.headers);
    user_apikey = req.headers['x-api-key'];

    const auth = new google.auth.GoogleAuth({
      apiKey: user_apikey,
      scopes: [
        'https://www.googleapis.com/auth/youtube.readonly'
      ],
    });

    const authClient = await auth.fromAPIKey(user_apikey);
    google.options({auth: authClient});

    const result = await youtube.playlists.list(req.body);

    if(result.status == 200) {
      res.send(result.data);
    } else {
      res.send("Error: "+ result.status.toString() + result.statusText);
    }

  } catch (error) {
    console.error("Error: ", error.errors);
    res.status(error.code).send({
      code: error.code, 
      errors: error.errors
    });
  }

});



/**
 * Retrieve information associated with a channel
 * https://developers.google.com/youtube/v3/docs/channels/list
 */
 router.post('/channel', async function(req, res, next) {
  try {
    validateHeaders(req.headers);
    user_apikey = req.headers['x-api-key'];

    const auth = new google.auth.GoogleAuth({
      apiKey: user_apikey,
      scopes: [
        'https://www.googleapis.com/auth/youtube.readonly'
      ],
    });

    const authClient = await auth.fromAPIKey(user_apikey);
    google.options({auth: authClient});

    const result = await youtube.channels.list(req.body);

    if(result.status == 200) {
      res.send(result.data);
    } else {
      res.send("Error: "+ result.status.toString() + result.statusText);
    }

  } catch (error) {
    console.error("Error: ", error.errors);
    res.status(error.code).send({
      code: error.code, 
      errors: error.errors
    });
  }

});



module.exports = router;
