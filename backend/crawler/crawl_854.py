# 클래스 정의
# 수집 한번 할때마다 세션 한번.
# 몰 클래스가 키워드 들고 검색한다
import requests
from bs4 import BeautifulSoup
import re
import os
import csv
import json
import itertools
# import pandas as pd
from fake_useragent import UserAgent


# 텍스트 정제 - 에러나면 원본그대로
class TextClean:
    # 특정 패턴 제거
    def clean_pat(self, pat,text):
        try:
            pat = re.compile(pat)
            text_return = re.sub(pat, "", text)
        except:
            text_return = text
        return text_return

    # 특정 패턴만 뽑기 - 첫번째 단어, 에러시 원문 그대로
    def pick_pat(self,pat, text):
        pat = pat
        pat = re.compile(pat)
        try :
            text_return = re.findall(pat,text)[0]
        except :
            text_return = text
        return text_return

    # 명령 받기 : code 에 code_list 단어 들어가 있으면 ,해당 패턴 실행
    # Mall.get_content_from_selector 에서 실행됨
    # code : __pat__ =>  해당 패턴에 맞는 문자열만 가져옴
    # 나머지 : 해당 패턴 제거 
    def run_clean(self, code, text, **pat):
        code_list = {
            "__escape__" : "\\.{1}",
            "__whitespace__":'[\t\s]',
            "__linespace__": '[\n\r]',
            "__kor__" : '[가-힣]',
            "__eng__" : '[a-z,A-Z]',
            "__bracket__":'[\(\)\[\]\<\>]',
            "__num__" : '[0-9]',
            "__spchar__":'[₩&!,/?%;:^\_+=]', # 특문 제거
            "__pat__": pat
        }
        for code_iter in code_list.keys() :
            if (code_iter in code) :
                if (code_iter== "__pat__") :
                    text = self.pick_pat(code_list[code_iter],text)
                else:
                    text = self.clean_pat(code_list[code_iter],text)
        return text

# 몰 정보 슈퍼클래스
class Mall:
    ############## 기본정보 ################
    mall_name = "몰 이름"
    url_main = "메인화면 URL"
    search_result_url = "검색결과 URL"

    # 저장, 전처리 클래스
    # url_saver = UrlSaver()
    # product_saver = ProductSaver()
    text_clean = TextClean()

    # 이런식으로 셀렉터를 내부에 선언해 사용함
    # selector_search_result = {
    #     "selector_search_prd_list": "상품목록",
    # }

    def __init__(self, kwd_to_search, **kwargs):
        # 세션
        self.sess = requests.session()
        self.sess.headers['upgrade-insecure-requests'] = '1'
        # self.sess.headers['referer'] = kwargs['referer']

        ua = UserAgent()
        headers = {
            'user-agent': ua.random
        }
        # 검색 키워드
        self.kwd = kwd_to_search
        return

    # 리퀘스트 바디 (필요시)
    sess_data = {}

    # 공통 - 리퀘스트로 get, BeautifulSoup 리턴
    def get_url_soup(self,url,data):
        data = self.sess_data
        res_search = self.sess.get(url, data=data)
        if (res_search.status_code == 200) :
            # 접속 성공
            # print(url)
            # print("connected :" + self.mall_name + str(res_search.status_code))
            # 태그 파싱
            res_search_txt = res_search.text
            soup = BeautifulSoup(res_search_txt, 'html.parser')
            f = open( '{0}_{1}.html'.format(self.kwd,self.mall_name), 'w', encoding="utf-8-sig")
            f.write(soup.prettify())   
            f.close()

            return soup
        else:
            print(url)
            print("connect fail :" + self.mall_name + str(res_search.status_code))
            return

    # 공통 - 셀렉터에서 텍스트 끌어오기, 에러뜨면 '-'
    def get_content_from_selector(self, soup, selector, attr='', regex=''):
        # soup : BeautifulSoup
        # selector : string ( css 셀렉터 또는 __soup__ )
        # attr : string(어트리뷰트 이름) , "__len__"(엘리먼트의 길이) , "__tag__"(태그 원문 그대로), ""(어트리뷰트 없음)
        # regex : string(정규식)

        # selector 가 빈값이면 대시 리턴
        if (selector == "") :
            return "-"

        # 결과값 초기화
        result = "#N/A"
        
        # 최종적으로 가져올 soup 객체
        try : 
            if (selector=="__soup__") :
                # 항상 배열을 전달하기 위해 셀렉터가 __soup__ 일때 배열로 변환 
                soup = [soup]
            else :
                soup = soup.select(selector)
        except Exception as e :
            print("ERROR_SELECT : " + self.mall_name )
            print(e)
            result = '-'
        

        # text 가져오기
        try :
            if (attr == ""):
                result = soup[0].text
            # 선택된 요소 갯수 가져오기
            elif (attr == "__len__"):
                result = soup.__len__()
            # 선택된 요소 태그 그대로 가져오기
            elif (attr == "__tag__"):
                result = str(soup[0])
            else:
                # attr 이름의 어트리뷰트 가져오기
                result = soup[0][attr]
        except Exception as e :
            print("ERROR_TEXT : " + self.mall_name )
            print(e)
            result = '-'

        # 텍스트 클렌징 :
        if (regex == ""):
            return result
        else :
            result = self.text_clean.run_clean(regex, result)
        return result

    # 검색결과 상품목록을 반환하는 함수로 자식클래스에서 세부구현한다
    # def get_search_result(self):
        # IN : 없음. 검색결과 URL로 들어가서 
        # OUT : [{상품 데이터}] 리턴
        # return []

    # 상세 상품정보 리턴하는 함수로 자식클래스에서 세부구현한다
    # def get_prd_result(self, procuct_url):
        # return {}

# 옥션 리액트버전
class AuctionReact(Mall) :
    # 자식클래스 추가변수 : 키워드
    kwd = "검색대상 키워드"
    mall_name = "auction"
    url_main = "http://www.auction.co.kr/"
    search_result_url = 'http://browse.auction.co.kr/search?&s=8&keyword='

    # 검색결과 화면 - 셀렉터
    selector_search_result = {
        "selector_search_prd_list": "#initial-state",
    }

    # from 검색결과 - 상품 리스트 뽑기(최소 url 30개)
    def get_search_result(self):
        print(self.kwd)
        kwd_encoded = requests.utils.quote(self.kwd)
        soup = self.get_url_soup(self.search_result_url + kwd_encoded, self.sess_data)
        
        # 최종 결과 리스트
        productListResult = []

        # 파워상품 수집 시작 [맥시멈 갯수]
        state_json_str = str(soup.select("#initial-state")[0].contents[0]) 
        state_json_str = state_json_str.replace("window.__APP_INITIAL_STATE__=", "")
        initialState = json.loads(state_json_str)
        # 상품 리스트 초기화
        prd_list = []

        # 상품목록이 되는 데이터 키값
        modules = [eachRegions["modules"] for eachRegions in initialState["regions"]\
             if eachRegions.get("name")=="content"][0]

        # 실제 상품 목록
        prd_list = [ eachModules["rows"] for eachModules in modules if eachModules.get("designGroup") == 17]        
        prd_list=list(itertools.chain.from_iterable(prd_list)) 

        for prd in prd_list:
            prd_li_iter = prd["viewModel"]    
            result_dict = {
                "product_title": prd_li_iter["item"].get("text","-"),
                'product_price': self.text_clean.run_clean("__spchar__",
                                                           prd_li_iter["price"].get("couponDiscountedBinPrice", "-")),
                "product_thumbnail":prd_li_iter["item"].get("imageUrl","-"),
                # "price_origin": self.text_clean.run_clean( "__spchar__",prd_li_iter["price"].get("binPrice","-")) ,
                'product_url': prd_li_iter["item"].get("link"),
                'product_rating': prd_li_iter["score"].get("itemScore", "-"),
                'product_rating_cnt': prd_li_iter["score"].get("feedbackCount","-").get("text","-"),
                # 'qna': "-",
            }
            productListResult.append(result_dict)
        
        return productListResult

# 네이버 검색결과 파워상품 
class NaverPowerProduct(Mall) :
    # 자식클래스 추가변수 : 키워드
    kwd = "검색대상 키워드"
    mall_name = "naverPowerProduct"
    url_main = "https://www.naver.com/"
    search_result_url = "https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query="
    # 검색결과 화면 - 셀렉터
    selector_search_result = {
        "selector_search_prd_list": ".z_fashion a.nx_thumb",
    }

    # 상품정보 화면 - 셀렉터
    # 키 : selector_prd_변수
    # 값 : [셀렉터, 어트리뷰트, 문자열 정제 방식] - 길이 3 리스트
    # 별도 처리 필요시, soup.select 로 요소 뽑고 함수 따로 만들기 : score 참고

    # 파워상품 셀렉터 : 이미지, 상품명, 가격, URL만 있음
    selector_product = {
        "product_title": ['img','alt',''],
        'product_price': ['p .price', '', "__spchar__"],
        "product_thumbnail":['img','src',''],
        # "price_origin": ['','',''],
        'product_url': ["__soup__","href",""],
        # 'qna': ["","",""],
        'product_rating': ["","",""],
        'product_rating_cnt': ["", "", ""],
        # 'more': ["","",""],
    }

    # 광고 여부 확인
    # def is_ad(self, product_soup) :
    #     return "_ad" in self.get_content_from_selector(product_soup,"__soup__","class","")


    # 검색결과에서 상품목록 뽑기
    def get_search_result(self):
        kwd_encoded = requests.utils.quote(self.kwd)
        soup = self.get_url_soup(self.search_result_url + kwd_encoded, self.sess_data)

        # 최종 결과 리스트
        productListResult = []

        # 파워상품 수집 시작 [맥시멈 갯수]
        prd_list = soup.select(self.selector_search_result["selector_search_prd_list"])[:10]

        # 파워상품 저장
        for prd_li_iter in prd_list:
            result_dict = {
                # "mall": self.mall_name,
                # "is_ad": True,
            }
            # 상품 데이터에 키값 추가
            for iter_key in self.selector_product.keys() :
                result_dict[iter_key] = self.get_content_from_selector(
                    prd_li_iter,
                    self.selector_product[iter_key][0],
                    self.selector_product[iter_key][1],
                    self.selector_product[iter_key][2],
                )
            productListResult.append(result_dict)

        return productListResult

# 네이버 검색결과 네이버쇼핑
class NaverSearchShopping(Mall):
    # 자식클래스 추가변수 : 키워드
    kwd = "검색대상 키워드"
    mall_name = "naverPowerProduct"
    url_main = "https://www.naver.com/"
    search_result_url = "https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query="

    # 검색결과 화면 - 셀렉터
    selector_search_result = {
        "selector_search_prd_list_nshopping": ".shop_list_vertical._page._ad li",
    }

    selector_nshopping = {
        "product_title": ['div > a > img','alt',''],
        "product_thumbnail":['div > a > img','src',''],
        # "price_origin": ['','',''],
        'product_price': ['div .price > strong', '',"__spchar__"],
        'product_rating_cnt': ["div > div.product_info > div.reaction > .data:nth-of-type(1) > em", "", ""],
        # 'qna': ["","",""],
        'product_rating': ["","",""],
        # 'more': ["","",""],
        'product_url': ['div > a','href',''],
    }

        # 검색결과에서 상품목록 뽑기
    def get_search_result(self):
        kwd_encoded = requests.utils.quote(self.kwd)
        soup = self.get_url_soup(self.search_result_url + kwd_encoded, self.sess_data)

        # 최종 결과 리스트
        productListResult = []

        # 네이버쇼핑 상품 [맥시멈 10개]
        prd_list = soup.select(self.selector_search_result["selector_search_prd_list_nshopping"])[:10]
        for prd_li_iter in prd_list:
            # result_dict = {
            #     "mall": "Shopping" + self.mall_name,
            #     "is_ad": self.is_ad(prd_li_iter),
            # }
            
            # 결과 딕셔너리 초기화
            result_dict = {}

            # 상품 데이터에 키값 추가
            for iter_key in self.selector_nshopping.keys() :
                result_dict[iter_key] = self.get_content_from_selector(
                    prd_li_iter,
                    self.selector_nshopping[iter_key][0],
                    self.selector_nshopping[iter_key][1],
                    self.selector_nshopping[iter_key][2],
                )
            productListResult.append(result_dict)

        return productListResult

# 구글 광고
class MallGoogleAdProduct(Mall) :
    # 자식클래스 추가변수 : 키워드
    kwd = "검색대상 키워드"
    mall_name = "GoogleAdProduct"
    url_main = "https://www.google.com/"
    search_result_url = "https://www.google.co.kr/search?q="

    # 검색결과 화면 - 셀렉터
    selector_search_result = {
        "selector_search_prd_list": ".mnr-c.pla-unit",
    }

    # 상품정보 화면 - 셀렉터
    # 키 : selector_prd_변수
    # 값 : [셀렉터, 어트리뷰트, 정규식] - 길이 3 리스트
    # 별도 처리 필요시, soup.select 로 요소 뽑고 함수 따로 만들기 : score 참고
    selector_product = {
        "product_title": ['div.pla-unit-container > div:nth-of-type(3) .pla-unit-title > a:nth-of-type(2) > span','',''],
        "product_thumbnail" : ['div.pla-hovercard-content img[data-src]','data-src',''],
        # "price_origin": ["","",""],
        'product_price': ['div:nth-of-type(3) > div > div:nth-of-type(2)','','__spchar__'],
        'product_rating_cnt': ["", "", ""],
        # 'qna': ["","",""],
        'product_rating': ["","",""],
        # 'more': ["","",""],
        'product_url': [" div > a:nth-of-type(2)","href",""],
    }

    # from 검색결과 - 상품 리스트 뽑기(최소 url 30개)
    def get_search_result(self):
        print(self.kwd)
        kwd_encoded = requests.utils.quote(self.kwd)
        soup = self.get_url_soup(self.search_result_url + kwd_encoded, self.sess_data)

        # 최종 결과 리스트
        productListResult = []

        # 상품 URL 수집 시작 [맥시멈 갯수]
        prd_list = soup.select(self.selector_search_result["selector_search_prd_list"])[:10]
        print("상품 갯수 :" + str(prd_list.__len__()))

        # 상품 목록 저장하기
        for prd_li_iter in prd_list:
            result_dict = {
                "mall": self.mall_name,
                "is_ad": True,
            }
            # 상품 데이터에 키값 추가
            for iter_key in self.selector_product.keys() :
                if iter_key == "thumbnail" :
                    product_id = self.get_content_from_selector(prd_li_iter, "div .pla-unit-img-container img", "id", "")
                    result_dict[iter_key] = self.get_base64_product(soup,product_id) 
                else : 
                    result_dict[iter_key] = self.get_content_from_selector(
                        prd_li_iter,
                        self.selector_product[iter_key][0],
                        self.selector_product[iter_key][1],
                        self.selector_product[iter_key][2],
                    )
            productListResult.append(result_dict)
        return productListResult

    # 구글 검색결과 썸네일 가져오기
    # 구글 상품검색결과는 base64 이미지를 별도 script 태그에 따로 받아와
    # 페이지 로딩 완료시 이미지 src를 교체
    def get_base64_product(self,soup_body:BeautifulSoup, product_id):
        # 리턴할 결과값 
        result = ""
        
        # 필요한 셀렉터
        selector_search_result =  "div#rso > div > script[nonce]"

        # script 태그 text를 가져오고
        scriptTags = soup_body.select(selector_search_result)
    
        # scriptTags 중 product_id 일치하는 태그 찾기
        for scriptTag_iter in scriptTags :
            script_content = scriptTag_iter.string
            if product_id in script_content : 
                result = script_content
                # base64 가져오는 정규식
                slice_a = "base64,"
                slice_b = "';v"
                result = result[result.find(slice_a) + len(slice_a) :result.find(slice_b)]
                result = result.replace("\\x3d", "")
        return result