import {all,fork,put,take,takeLatest} from 'redux-saga/effects'
// 사이드이펙트 
// all call fork take takeEvery takeLatest put throttle 

/*
    all  : 함수를 여러개 실행할때 사용한다. 인자값은 배열입니다.
    fork : 함수를 하나만 실행하는것. (제레이터 함수)
    take : 인자값 내용이 같아질떄까지 가만히있다가. 같아지면 아래의 코드를 실행함
    takeLatest : action값 type에 따라 함수를 호출하는 아이 + 중복되는 액션이 다발적으로 발생되었을때 맨마지막꺼 하나만 실행시킴.
*/

function* testAction(){
    // login 
    console.log('훔쳐오기~')
}

function* test(){
    yield takeLatest('USER_LOGIN_REQUEST',testAction)
    
}

// rootSaga 함수 제네레터
export default function* rootSaga(){
    yield all([
        fork(test)
    ]) 
}

/*
     {
        type:"USER_LOGIN_REQUEST",
        data:{
            userid:'web7722',
            userpw:'1234'
        }
    }
*/