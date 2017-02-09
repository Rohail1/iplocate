# iplocate

This is a simple middleware for an express App that gets the locations of every request thats hits the server.

##Installation

`npm install iplocate --save`

### How to use

```javascript

    let iplocate = require('iplocate');
    
    app.use(iplocate);
    
    router.get('api/route',function(req,res){
      if(req.locationError){
        // In case of Any error locationError will be populated
        console.log('req.locationError ',req.locationError)
      }else {
        // The location object will be attached to request
        console.log('req.location',req.location)
      }
    })

```
###Tests

  `npm test`

###Issues

Create an issue if there are any bugs. 


### For Any Queries

Feel free to contact me via [email](mailto:rohail@lumous.pk) or on my website [lumous.pk](http://lumous.pk)