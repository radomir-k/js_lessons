fetch('https://jsonplaceholder.typicode.com/users/10') // GET
                .then((response) => response.json())
                .then((post) => {
                 console.log(post);
                  $('.root').html(`
                        <h2>${post.name} ${post.username}</h2>
                        <a href="mailto: ${post.email}">E-mail: ${post.email}</a></>
                        <p><a href="tel: ${post.phone}">Phone: ${post.phone}</a></p>
                        <p><a href="${post.website}">WEB: ${post.email}</a></p><br>
                        <h4>Address: </h4>
                        <p>${post.address.street} str., ${post.address.suite}, ${post.address.city}, ${post.address.zipcode}</p>
                        <p>................................................................................</p><br>
                        <h4>Geolocation:</h4>
                        <p>Latitude: ${post.address.geo.lat}</p>
                        <p>Longitude: ${post.address.geo.lng}</p>
                        <p>................................................................................</p><br>
                        <h4>${post.company.name}</h4>
                        <p>${post.company.catchPhrase}</p>
                        <p>${post.company.bs}</p>
                `);
                })
                .catch((error) => {
                  console.log(error);
                });