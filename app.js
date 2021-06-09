require("dotenv").config();
const express = require('express')
const app = express()
const port = 80
const cors = require('cors');
const cookieParser = require("cookie-parser");
const session = require('express-session');
const logger = require('morgan');

const userRouter = require('./routes/user');


// morgan : 서버 요청에 대한 로그를 찍어준다.
app.use(logger('dev'));

// cors : 접근 허용 가능한 origin과 세부 정보를 설정해준다.
app.use(
  cors({
    origin: true,
    credentials: true,
    methods: ["GET", "POST", "OPTIONS"],
  })
);

// body-parser : 요청의 본문에 있는 데이터를 해석하여 req.body 객체로 만들어준다.
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// cookieParser : 요청에 동봉된 쿠키를 해석해 req.cookies 객체로 만들어준다. (문자열로 넘어온 쿠키를 객체로)
app.use(cookieParser());

// express-session : 세션을 생성해준다.
app.use(
  session({ // 세션 식별자를 만들어주는 메서드
    secret: '@hellcoders', // 비밀키
    resave: false, // 클라 접속할 때마다 세션id 새로 발급할 것인지 
    saveUninitialized: true, // 세션 사용하기 전까지 식별자 발급하지 않도록
    cookie: {
      domain: 'localhost',
      path: '/',
      maxAge: 24 * 6 * 60 * 10000,
      sameSite: 'none', //
      httpOnly: true, //
      secure: true, //
    },
  })
);





app.use('/user', userRouter);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})