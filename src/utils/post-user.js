const backendURI = "http://localhost:5000";

async function postUser(spotifyJSON) {
  const response = await fetch(backendURI+'/user/create', {
    method: 'POST', 
    mode: 'cors', 
    cache: 'no-cache', 
    credentials: 'same-origin', 
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'follow', 
    referrerPolicy: 'no-referrer', 
    body: JSON.stringify(data)
  });
  return 200;
}

async function putSpotifyToken(userId, token) {
    const response = await fetch(backendURI+'/user/update/'+userId, {
      method: 'PUT', 
      mode: 'cors', 
      cache: 'no-cache', 
      credentials: 'same-origin', 
      headers: {
        'Content-Type': 'application/json'
      },
      body: {
        "spotify_token": token
      },
      redirect: 'follow', 
      referrerPolicy: 'no-referrer', 
    });
    return 200;
}

async function getUser(userId) {
    const response = await fetch(backendURI+'/user/'+userId, {
      method: 'GET', 
      mode: 'cors', 
      cache: 'no-cache', 
      credentials: 'same-origin', 
      headers: {
        'Content-Type': 'application/json'
      },
      redirect: 'follow', 
      referrerPolicy: 'no-referrer', 
    });
    return response.json(); 
}