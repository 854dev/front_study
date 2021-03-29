const Chat = (function(){
   const myName = "나";

   // init 함수
   function init() {
       // enter 키 이벤트
       $(document).on('keydown', 'textarea.input', function(e){
           if(e.keyCode == 13 && !e.shiftKey) {
               e.preventDefault();
               const message = $(this).val();

               // 메시지 전송
               sendMessage(message);
               // 입력창 clear
               clearTextarea();
           }
       });
   }

   // 메세지 태그 생성
   function createMessageTag(IU_className, senderName, message) {
       // 형식 가져오기
       let chatLi = $('div.chat.format ul li').clone();

       // 값 채우기
       let now_time = new Date();


       chatLi.addClass(IU_className);
       chatLi.find('h3.sendTime').text(now_time.toLocaleTimeString())
       chatLi.find('h2.name').text(senderName);
       chatLi.find('.message h2').text(message);

       return chatLi;
   }

   // 메세지 태그 append
   function appendMessageTag(IU_className, senderName, message) {
       const chatLi = createMessageTag(IU_className, senderName, message);

       $('#chat').append(chatLi);

       // 스크롤바 아래 고정
       $('#chat').scrollTop($('#chat').prop('scrollHeight'));
   }

   // 메세지 전송
   function sendMessage(message) {
       // 서버에 전송하는 코드로 후에 대체
       const data = {
           "senderName"    : "나",
           "message"        : message
       };

       // 통신하는 기능이 없으므로 여기서 receive
       recieve(data);
   }

   // 메세지 입력박스 내용 지우기
   function clearTextarea() {
       $('textarea.input').val('');
   }

   // 메세지 수신
   function recieve(data) {
       const IU = (data.senderName != myName)? "you" : "me";
       appendMessageTag(IU, data.senderName, data.message);
   }

   return {
       'init': init
   };
})();

$(function(){
   Chat.init();
});
