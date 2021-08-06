const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(cors())

app.get('/',(req,res)=>{
    res.send('hello world!')
})

app.post('/api/login',(req,res)=>{
    const {userid,userpw} = req.body
    let result = {}
    console.log(userid)
    console.log(userpw)

    // DB에서 조회하기 
    if(userid == 'web7722' && userpw=='1234'){
        result = {
            result:'OK',
            msg:'로그인에 성공했습니다.'
        }
    } else {
        result = {
            result:'FAIL',
            msg:'아이디와 패스워드가 틀립니다.'
        }
    }

    res.json(result)
})

app.listen(3000,()=>{
    console.log('server start 3000')
})