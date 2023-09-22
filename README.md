# FazendaBoiTech_API

Welcome to my first own API. I did this to pratice some things I learned in my Node.js couse.

## Purpose

This API is designed to record and track information about cattle, including breed, age, weight, vaccinations, and sales.


## Endpoints

### Cattle:

### /find-cattles

**HTTP Method** GET

**Description** Retrive all registered cattles

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

**HTTP Method** GET

**Description** Retrieves a single record by searching for id

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