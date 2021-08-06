# Blog 포ㅓㄹ더 생성
    -> back 폴더 생성
    -> front 폴더 생성 

# 작업할 디렉토리 까지 접근해야됨.


# npm init으로 node.js 환경으로 만들어줌.


# npm install next react react-dom

React 배운느낌보다
Next 기본구조 정도 배운다

# package.json 을 수정함

"dev":"next dev -p 3001 -H 0.0.0.0",
"build":"next build",
"start":"next start",
"lint":"next lint"

# pages 폴더를 생성합니다. 
    url localhost:3001/ 일때 hello world ! 
    어떻게 해야할까요 ?

    pages 폴더안에 index.jsx 파일 만들고 컴포넌트 생성하기.
    * export default 주의 


# dev server로 실행하기
npm run dev 

노트북을 사용하시는분들. wifi 핸드폰이랑 같은 wifi라면
- 윈도우키 누르고 cmd 친다음에 앤터 
    ipconfig 192.168.0.15:3001

  데스크탑인데 공유기사용하고있다 그래도 됩니다. 

  ------------- Next.js 맛보기 --------------------

  # pages 폴더
  -> index.jsx // 메인페이지
  -> join.jsx  // 회원가입
  -> login.jsx // 로그인페이지고
  -> /posts/post.jsx // 글쓰기 
  
    폴더만 생성하면됩니다.

  // localhost:3001/posts/post
  // localhost:3000/user/join


# 동적 라우팅 사용방법

1. 파일명을 배열형식으로 만든다 [post].jsx 


# 레이아웃 구성하기 
-> components 폴더를 생성
   -> BlogLayout.jsx 파일 생성 
       컴포넌트 까지 생성코드작성하기

# 또다른 레이아웃구성하기
-> compoents 폴더안에서 FormLayout.jsx 생성한뒤
    login.jsx / join.jsx에 사용하기.

# Link 컴포넌트 사용하기
  React에 사용되는 Link와 사용법이 다름 
  # import Link from 'next/link'
  ex ) react -> <Link to="/">menu1</Link>
       next.js -> <Link href="/"><a>menu1</a></Link>

# index.html 어디감?


# Next 모든 컴포넌트를 실행하기전에 거처가는 컴포넌트가 있습니다.

# app.jsx ? 어디감? HEAD 모든곳에 공통적으로 사용이 가능하겠죠. 혹은 공통적인 CSS가있다면 여기다가 import 하는게 좋겠져. 


npm install styled-components



# Styled Components 환경설정
# _document.jsx 만들기 
# .babelrc 

# npm install -D babel-plugin-styeld-components
# npm install next



npm install next-redux-wrapper //Store NEXT SSR redux 를 next에맞게 설정
npm install redux // Store middleware combine
npm install react-redux // redux랑 react랑 같이쓸때 컴포넌트 에서 저장소에있는 내용을 가져올떄 
npm install redux-devtools-extension // devtools 설치를 해야지만 가능합니다..

let a = {a:"b"}
undefined
b = {...a}
{a: "b"}
a === b
false
a.a === b.a
true


1. store/configureStore.js
   -> context.jsx 같은 의미 
   -> context.jsx 는 초기상태값을 저장한 컴포넌트를 만드는 파일입니다.
   
2. reducers/reducer.js 

npm run build
npx next build


npm run start
npx next start


git rm -rf --cached .

cd [원격저장소이름]

/home/ubuntu/[원격저장소이름]
~/[원격저장소이름]

npm update

npm install
npm run build
npm run start

linux 80port 는 sudo로 해야하니깐..

sudo npm run start


sudo systemctl stop nginx 

pm2 

서버를 2개돌릴거라 

next서버도 백그라운드에서 돌아가야합니다. 

npm install pm2

# pm2 시작할때

- sudo npx pm2 start server.js
node server.js

- npx pm2 start npm -- start 
npm run start 

cd /etc/nginx/sites-available
ls 치고
파일중
myapp.conf 파일이 존재하는지 확인.

myapp.conf 수정해야됩니다.

sudo vi myapp.conf

proxy_set_header HOST $host;
proxy_pass http://127.0.0.1:3001;
proxy_redirect off;

esc :wq!

sudo systemctl start nginx 
sudo systemctl status nginx 

도메인 연결하셨던 분들은 http://도메인 / http://퍼블릭ip주소

/etc/nginx/sites-available

도메인 연결하신분 http://ingoos.co.kr
sudo vi myapp.conf

server{
  listen 80;
  server_name ingoos.co.kr;
  location / { 
    proxy_set_header HOST $host;
    proxy_pass http://127.0.0.1:3001;
    proxy_redirect off;
  }
}
sudo systemctl restart nginx

# 인증서발급 nginx 같이할겁니다. 

certbot 툴 
인정서를 발급을받을수있는 툴을 설치를하고.
우리가 사용하는 서버 프레임워크를 뭔지만 알려주면
알아서 다 세팅해줍니다..

1. certbot 설치해야합니다.
- wget https://dl.eff.org/certbot-auto 

sudo snap install certbot --classic
sudo certbot --nginx 

1. 이메일을 입력하라고 나올거에요 
자기이메일 web7722@gmail.com enter
2. 약관동의같은게 2?3번나올거에요

3. DNS 관련된내용이 나오실거에요. 만약 거기서 여러분의 도메인나왔다면

[1] ingoos.co.kr

1

이 인증서는3개월만 유효시간을 가짐 


/etc/nginx/sites-available/myapp.conf
sudo systemctl restart nginx


sudo certbot renew --dry-run

/etc/cron.d 여기로 이동
certbot 파일이있는가?

SHELL=/bin/sh
PATH=/user/local/sbin:/user/local/bin:/sbin:/bin:/user/sbin:/user/bin
0 */12 * * * root certbot -q renew --nginx --renew-hook 'service nginx reload'



drwxrwxrwx   5 ubuntu ubuntu   4096 Aug  4 18:30 .next -- 내꺼
drwxrwxr-x   5 ubuntu ubuntu   4096 Aug  5 02:08 .next -- 강지현씨

d rwxrwxrwx

앞글자 첫번쨰는 디렉토리인가? 파일인가 구분값입니다.
d 디렉토리
- 파일이라는뜻.

d

--x--x--x 

r: 읽기 
w: 쓰기가 가능한가?
x: 실행이 가능하냐?

d

d rwxrwxrwx 

d rwx rwx rwx 

  유저 그룹 다른사람들

유저 : 리눅스 사용자



20명

그룹 : 경일아카데미
   ubuntu
   구문영
   김동철
   김서영


drw-rw-rw- 10 ubuntu 경일아카데미 용량 날짜 들 시간 [pages]

내가 1년차이야..
내접속할 서버는 DB서버야

근대 나는 권한이 무제한인 계쩡으로 들어감.

그래서 DB서버를 마구 망가트려 사실 작업을할려다가 모르고 건들지말아야할 파일을 건드려서 폭파시켜버림.

PL 개발팀장 저에게 리눅스계쩡을줍니다. 권한 적은.
리눅스 접속하면 

mysql 

.next폴더기준
   ubutun  ubutun client
d    rwx    r-x    r-- 
          클라이언트 
1    421    421    421 
0

      7      5      4

memo.md 664 -> 777
-rwxrwxrwx 
chmod 

