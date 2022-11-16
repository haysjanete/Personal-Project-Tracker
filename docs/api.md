# API endpoints

## Create user

* *path:* /account
* *method:* `POST`


* *Request shape(JSON):*
```json
    {"name": string
    "phone-number": int
    "email": string
    "username": string
    "password": string}
```

* *Response:* allows user to create profile, returns token
* *Response shape(JSON):*
```json
    {"JWTO": string}
```

## Logging user in

* *path:* /account
* *method:* `GET` ?`POST` to get token?


* *Request shape(JSON):*
```json
    {"username": string
      "password": string}
```
* *Response:* if user has account, login, redirect to home page. 
* *Response shape (JSON):*
```json
    {"account": {
        "username": string
        "password": string
    }
    {"JWTO": string} 
    }
```

## Logging user out

* *path:* /account
* *method:* `DELETE`

* *headers:*
    * -authorization: JWTO

* *Response:* 
```json
    {"deleted": true }
```

## Account View

* *path:* /account/{account_id}
* *method:* `GET`

* *request body JSON:*
```json
    {"account_id": int}
```

* *headers:*
    * -authorization: JWTO

* *Response:* return account details
* *Response body JSON:*
```json
    {"name": string
    "phone-number": int
    "email": string
    "username": string}
```
## Post parking spot

* *path:* /post_parking
* *method:* POST

* *headers:*
    * -authorization: JWTO

* *Request body (JSON):*
```json
    {"street_name": string
     "city": string
     "state_abbreviation": string
     "zipcode": int} 
```

* *Response:* success alert
* *Response bodyd (JSON):*
```json
    {"posted": boolean
     "parking_spot": [
         "coordinates": int
         "street_name": string
         "city": string
         "state: string
         "zipcode": int
    ]
} 
```

## View user's posted parking spot list

* *path:* account/{account_id}/parking_spots
* *method:* `GET`

* *headers:*
    * -authorization: JWTO

* *request body JSON:*
```json
    {"account_id": int}
```
* *Resopnse:* return user's list of parking spots
* *response body JSON:*
```json
    {"parking_spots": [
        "street_name": string
        "city": string
        "state_abbreviation": string
        "zipcode": int
        ]
    }
```

## Edit user's parking spot post

* *path:* account/{account_id}/parking_spots/{parking_spot_id}
* *method:* `PUT`

* *headers:*
    * -authorization: JWTO

* *Request body JSON:*
```json
    {"spot_id": int
     "street_name": string
     "city": string
     "state_abbreviation": string
     "zipcode": int}
```

* *Response:* return updated parking spot OR success alert?
* *Response body: JSON*
```json
    {"coordinates": int
    "street_name": string
    "city": string
    "state_abbreviation": string
    "zipcode": int}
```

## Delete parking spot

* *path:* account/{account_id}/parking_spots/{parking_spot_id}
* *method:* `DELETE`

* *headers: 
    * -authorization: JWTO

* *Request body JSON:*
```json
    {"spot_id": int}
```

* *Response body JSON:*
```json
    {"deleted": boolean}
```

## List spots in area based on user query

* *path:* /parking
* *method:* `GET`

* *headers:*
    * -authorization: JWTO

* *Request body JSON:*
```json
    {"bounding_box": [int, int, int, int]}
```

* *Response:* return parking spots that are with bounding box borders
* *Response body JSON:*
```json
    {"parking_spots": [
        "coordinates": int
        "street_name": string
        "city": string
        "state_abbreviation": string
        "zipcode": int
        ]
    }
```

## Parking spot detail page

* *path:* /parking/{spot_id}
* *method:* `GET`

* *headers:*
    * -authorization: JWTO

* *Request body JSON:*
```json
    {"spot_id": int}
```

* *Response:* return parking spot details
* *response body JSON:
```json
    {"coordinates": int
     "street_name": string
     "city": string
     "state_abbreviation: string
     "zipcode": int
     "available": boolean}
```




