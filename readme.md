# Book API
RESTful web API using node and express. Started out as the result of a tutorial but became useful as an API for playing with aurelia. At some point I'll come back and tart it up properly but it works for now :)

## To run
start mongodb then gulp

## Notes
For Homebrew mongodb, use `brew services start mongodb`

Add data by POSTing 
```
{
    "author": "Frank Herbert",
    "title": "Dune",
    "genre": "Science Fiction"
}
```
and similar to http://localhost:8000/api/books as raw JSON via POSTman or the like
