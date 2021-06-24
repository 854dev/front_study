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