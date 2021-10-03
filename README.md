## 쇼핑몰 크롤러
1. 각 쇼핑몰 1페이지를 실시간으로 크롤링해 검색결과를 모아준다.
2. 검색결과에서 특정 키워드가 포함된 상품의 노출 정도를 계산한다.
3. (TODO) 검색결과 상품데이터를 DB에 적재한다

## 프론트엔드
# 패키지 설치
cd frontend
yarn

# 프론트엔드 서버켜기
cd frontend
yarn start

## 백엔드
#가상환경 설치

`python -m venv venv`

#필요 파일 설치

source venv/Scripts/activate

python -m pip install --upgrade pip
pip install -r requirements.txt

#fastapi 설치
현재 경로를 포함하여서 실행하는 방법을 못찾아서 다른 방법으로 적어놓았습니다.

(front_study 디렉토리에 있다는 가정 하에)
cd backend/
uvicorn main:app --reload