//const express = require('express' )
import express, {Express,Application,Request,Response}from 'express'
const app: Application =  express()
const port = 3000

app.get('/',(req : Request,res: Response) => {
    res.send('hello world !')
})

app.get('/name',(req : Request,res: Response) => {
    res.send('Anarana : judi')
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
} )

