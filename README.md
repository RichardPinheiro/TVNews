# Api Nw News

* Api Nw news provides birthdays for all partners, internal company news and more

### Prerequisites

* The following items are necessary to run this application.

```
node
npm
mongodb

```

### Installing

* Clone this repository. Run the following steps/commands:

```
1) Run: npm install
2) In folder config rename the file default.json to development.json
```

* In folder config Create or set database and enter the details in your development.json like:

```
  "database": {
    "mongodb": "mongodb://localhost:27017/nwnews",
  }
```

## Deployment

* Now you can run the following command to run the application.
```
1) Run: nodemon app.js or node app.js

```

## API
* An example on how to use the application API. In this example I will be using [Postman](https://www.getpostman.com/) to test the API.
```
1) Select 'POST' request

2) Enter the URL: http://localhost:8080/api/person/save

3) Click on 'Headers' and add one param:
	3.1) Key: 'Accept'; Value: 'application/json'

4) Click on 'Body', select 'raw':
```
```
	{
        "nickname" : "nickname",
        "name" : "name",
        "birthday" : {
            "day" : number of day,
            "month" : {
                "number" : number of month,
                "name" : name of month
            }
        },
        "phone" : phone number,
        "squad" : squad,
        "picture" : "picture.jpg",
        "backgrounPicture" : "backgrounPicture.jpg",
        "qrcode" : "qrcode"
    }
```
```
5) Click the 'Send' button

6) Open a new request window and select the 'GET' request and enter the URL: http://localhost:8080/api/birthday/day for example.

7) Click the 'Send' button and you should see the birthday of day

8) Open a new request window and select the 'GET' request and enter the URL: http://localhost:8080/api/birthday/others for example.

9) Click the 'Send' button and you should see others birthdays in the month.

10) Select 'POST' request

11) Enter the URL: http://localhost:8080/api/news/save

12) Click on 'Headers' and add one param:
	12.1) Key: 'Accept'; Value: 'application/json'

13) Click on 'Body', select 'raw':
```
```
    {
        "title": "title",
        "description": "description",
        "published": {
            "day": number of day,
            "month": {
                "number": number of month,
                "name": "name od month"
            }
        },
        "qrcode": "qrcode"
    }
```
```
14) Click the 'Send' button.

15) Open a new request window and select the 'GET' request and enter the URL: http://localhost:8080/api/news for example.

16) Click the 'Send' button and you should see the news of company.
```

## Built With

* [Express](https://expressjs.com/pt-br/) - The Node framework used

## Authors

* **Richard Pinheiro** - [RichardPinheiro](https://github.com/RichardPinheiro)
