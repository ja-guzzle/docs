For authentication purposes guzzle uses json web token signature encryption. Guzzle will generate a token on User login. Generated tokens have 864000000 seconds default expiration time limit but, Users can  set expiration time for Json web tokens. For update expiration time you can follow below steps

< -After user login Guzzle generate web token which is encrypted and stored automatically in DB.
	- This token have default 846000000 seconds after it expire and you have to login agian.
	- You can change this time by following steps. >

1 : Goto Admin from top navigation bar

2 : Goto Maintenance and click on JWT

3 : Update Expiration time in seconds

4 : Click on the Update
