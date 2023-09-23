# FazendaBoiTech_API

Welcome to my first own API. I did this to pratice some things I learned in my Node.js couse.

## Purpose

This API is designed to record and track information about cattle, including breed, age, weight, vaccinations, and sales.


## Endpoints

### Cattle:

### /find-cattles

**HTTP Method:** GET

**Description:** Retrive all registered cattles

**Example Request:** http://localhost:3000/find-cattles

**Example Response:** 
```json
[
    {
        "id": 1,
        "name": "Belinha",
        "race": "Holandesa",
        "origin": "Propriedade",
        "date_nasc": "2022-02-02T03:00:00.000Z",
        "createdAt": "2023-09-21T23:26:38.000Z",
        "updatedAt": "2023-09-21T23:26:38.000Z"
    }
]
```

### /find-cattle/:{cattleId}

**HTTP Method:** GET

**Description:** Retrieves a single record by searching for id

**Example Request:** http://localhost:3000/find-cattle/1

**Example Response:** 
```json
[
    {
        "id": 1,
        "name": "Belinha",
        "race": "Holandesa",
        "origin": "Propriedade",
        "date_nasc": "2022-02-02T03:00:00.000Z",
        "createdAt": "2023-09-21T23:26:38.000Z",
        "updatedAt": "2023-09-21T23:26:38.000Z"
    }
]
```

### /add-cattle/

**HTTP Method:** POST

**Description:** Register a new cattle

**Parameters(body):**
- `name` (string, required): The name of the cattle.
- `race` (string, required): The breed of cattle.
- `origin` (string, required): The origin of the cattle (ownership/purchase).
- `date_nasc` (date, required): The date of birth of cattle (format YYYY/MM/DD).

**Example Request:** http://localhost:3000/add-cattle/

**Example Response:** 
```json
{
    "success": {
        "id": 3,
        "name": "A Cattle",
        "race": "Holandesa",
        "origin": "Propriedade",
        "date_nasc": "2022-02-02T03:00:00.000Z",
        "updatedAt": "2023-09-22T23:41:15.959Z",
        "createdAt": "2023-09-22T23:41:15.959Z"
    }
}
```
### /edit-cattle/

**HTTP Method:** POST

**Description:** Edit a cattle

**Parameters(body):**
- `id` (string, required): The id of the cattle you want to edit.
- `name` (string, required): The name of the cattle.
- `race` (string, required): The breed of cattle.
- `origin` (string, required): The origin of the cattle (ownership/purchase).
- `date_nasc` (date, required): Data de nascimento do gado (no formato YYYY/MM/DD).

**Example Request:** http://localhost:3000/edit-cattle/

**Example Response:** 
```json
{
    "success": {
        "id": 3,
        "name": "Katarina",
        "race": "Holandesa",
        "origin": "Propriedade",
        "date_nasc": "2022-02-02T03:00:00.000Z",
        "createdAt": "2023-09-22T23:41:15.000Z",
        "updatedAt": "2023-09-22T23:49:44.543Z"
    }
}
```

### /delete-cattle/

**HTTP Method:** POST

**Description:** Delete a cattle

**Parameters(body):**
- `id` (string, required): The id of the cattle you want to delete.

**Example Request:** http://localhost:3000/delete-cattle/

**Example Response:** 
```json
{
    "success": {
        "id": 7,
        "name": "Bernardo",
        "race": "Holandesa",
        "origin": "Propriedade",
        "date_nasc": "2022-02-02T03:00:00.000Z",
        "createdAt": "2023-09-22T23:51:22.000Z",
        "updatedAt": "2023-09-22T23:51:22.000Z"
    }
}
```

### /add-lost-cattle/

**HTTP Method:** POST

**Description:** Add a new data about lost cattles.

**Parameters(body):**
- `cattleId` (string, required): The id of the cattle you want mark as lost.
- `observation` (string, not required) Some observations you want to write about the lost cattle.

**Example Request:** http://localhost:3000/add-lost-cattle/

**Example Response:** 
```json
{
    "id": 1,
    "observation": "Morreu",
    "cattleId": 5,
    "updatedAt": "2023-09-23T00:01:26.440Z",
    "createdAt": "2023-09-23T00:01:26.440Z"
}
```

### /lost-cattle/

**HTTP Method:** GET

**Description:** This will retrive all data about loss cattles

**Example Request:** http://localhost:3000/lost-cattle/

**Example Response:** 
```json
[
    {
        "id": 5,
        "name": "Ricardo",
        "race": "Holandesa",
        "origin": "Propriedade",
        "date_nasc": "2022-02-02T03:00:00.000Z",
        "createdAt": "2023-09-22T23:51:12.000Z",
        "updatedAt": "2023-09-22T23:51:12.000Z",
        "lossControl": {
            "id": 1,
            "observation": "Morreu",
            "createdAt": "2023-09-23T00:01:26.000Z",
            "updatedAt": "2023-09-23T00:01:26.000Z",
            "cattleId": 5
        }
    },
    {
        "id": 6,
        "name": "Richard",
        "race": "Holandesa",
        "origin": "Propriedade",
        "date_nasc": "2022-02-02T03:00:00.000Z",
        "createdAt": "2023-09-22T23:51:17.000Z",
        "updatedAt": "2023-09-22T23:51:17.000Z",
        "lossControl": {
            "id": 2,
            "observation": "Perdido",
            "createdAt": "2023-09-23T00:03:59.000Z",
            "updatedAt": "2023-09-23T00:03:59.000Z",
            "cattleId": 6
        }
    }
]
```

### /lost-cattle/{cattleId}

**HTTP Method:** GET

**Description:** This will retrieve a single data of lost cattle searching by id

**Example Request:** http://localhost:3000/lost-cattle/5

**Example Response:** 
```json
{
    "id": 5,
    "name": "Ricardo",
    "race": "Holandesa",
    "origin": "Propriedade",
    "date_nasc": "2022-02-02T03:00:00.000Z",
    "createdAt": "2023-09-22T23:51:12.000Z",
    "updatedAt": "2023-09-22T23:51:12.000Z",
    "lossControl": {
        "id": 1,
        "observation": "Morreu",
        "createdAt": "2023-09-23T00:01:26.000Z",
        "updatedAt": "2023-09-23T00:01:26.000Z",
        "cattleId": 5
    }
}
```

### /add-weight-cattle/

**HTTP Method:** POST

**Description:** Add new cattle weighing

**Parameters(body):**
- `cattleId` (string, required): The id of the cattle you are weighing
- `weight` (string, required) The weight of the cattle you are weighing
- `date` (string, required) The weighing date (format YYYY/MM/DD).

**Example Request:** http://localhost:3000/add-weight-cattle/

**Example Response:** 
```json
{
    "id": 1,
    "weight": 250,
    "cattleId": "6",
    "date": "2022-02-02T03:00:00.000Z",
    "updatedAt": "2023-09-23T00:13:40.349Z",
    "createdAt": "2023-09-23T00:13:40.349Z"
}
```

### /weight-cattle/

**HTTP Method:** GET

**Description:** Search all weighing data.

**Example Request:** http://localhost:3000/weight-cattle/

**Example Response:** 
```json
[
    {
        "id": 6,
        "name": "Richard",
        "race": "Holandesa",
        "origin": "Propriedade",
        "date_nasc": "2022-02-02T03:00:00.000Z",
        "createdAt": "2023-09-22T23:51:17.000Z",
        "updatedAt": "2023-09-22T23:51:17.000Z",
        "weightControls": [
            {
                "id": 1,
                "weight": 250,
                "date": "2022-02-02T03:00:00.000Z",
                "createdAt": "2023-09-23T00:13:40.000Z",
                "updatedAt": "2023-09-23T00:13:40.000Z",
                "cattleId": 6
            }
        ]
    },
    {
        "id": 3,
        "name": "Katarina",
        "race": "Holandesa",
        "origin": "Propriedade",
        "date_nasc": "2022-02-02T03:00:00.000Z",
        "createdAt": "2023-09-22T23:41:15.000Z",
        "updatedAt": "2023-09-22T23:49:44.000Z",
        "weightControls": [
            {
                "id": 2,
                "weight": 300,
                "date": "2022-02-02T03:00:00.000Z",
                "createdAt": "2023-09-23T00:24:45.000Z",
                "updatedAt": "2023-09-23T00:24:45.000Z",
                "cattleId": 3
            }
        ]
    }
]
```

### /weight-cattle/{cattleId}

**HTTP Method:** GET

**Description:** This will retrieve all data about an expecific cattle.

**Example Request:** http://localhost:3000/weight-cattle/3

**Example Response:** 
```json
{
    "id": 3,
    "name": "Katarina",
    "race": "Holandesa",
    "origin": "Propriedade",
    "date_nasc": "2022-02-02T03:00:00.000Z",
    "createdAt": "2023-09-22T23:41:15.000Z",
    "updatedAt": "2023-09-22T23:49:44.000Z",
    "weightControls": [
        {
            "id": 2,
            "weight": 300,
            "date": "2022-02-02T03:00:00.000Z",
            "createdAt": "2023-09-23T00:24:45.000Z",
            "updatedAt": "2023-09-23T00:24:45.000Z",
            "cattleId": 3
        }
    ]
}
```