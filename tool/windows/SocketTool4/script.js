
function AddEdit(groupbox,name,text){
 groupbox.push({ID:name,TYPE:"Edit",TEXT:text});
}
function AddButton(groupbox,name,text){
 groupbox.push({ID:name,TYPE:"Button",TEXT:text});
}
function AddLabel(groupbox,name,text,width){
 groupbox.push({ID:name,TYPE:"Label",TEXT:text,WIDTH:width});
}


function OnInit(){

 var socket1={ID:"TcpServer01",SOCKETTYPE:"TCP Server",PORT:60000,HEX:1,UI:[]};
 sockets.push(socket1);

 var group1=[];
 AddLabel(group1,'Label1','请输入数字1',80); AddEdit(group1,'Edit1','');    AddButton(group1,'Button1','Button1');
 AddLabel(group1,'Label1','请输入数字2',80); AddEdit(group1,'Edit2','');   AddButton(group1,'Button2','Button2');

 var group2=[];
 AddLabel(group2,'Label1','请输入数字3',80);AddEdit(group2,'Edit3','');    AddButton(group2,'Button3','Button3');
 AddLabel(group2,'Label1','请输入数字4',80);AddEdit(group2,'Edit4','');   AddButton(group2,'Button4','Button4');

 var socket2={ID:"TcpServer02",SOCKETTYPE:"TCP Server",PORT:61000,HEX:0,UI:[]};
 socket2.UI.push(group1);
 socket2.UI.push(group2);

 sockets.push(socket2);

 for(i=1;i<=5;i++){
  var socket3={ID:"TcpClient0"+i,SOCKETTYPE:"TCP Client",HOST:"127.0.0.1",PORT:60000,HEX:0,UI:[]};
  var group3=[];
  AddEdit(group3,'Edit1',''); AddButton(group3,'Button1','Button1');
  AddEdit(group3,'Edit2',''); AddButton(group3,'Button2','Button2');
  socket3.UI.push(group3);
  sockets.push(socket3);
  AddTimer(socket3.ID,'timer01',10);
 }
}


function OnTimerEvent(socketid,timername){
  if (socketid=='TcpClient01'){
     connect(socketid);
 }
}

function OnButtonClick(socketid,buttonid){
  if (buttonid=='Button1'){
    Alert(socketid,GetUiText(socketid,'Edit1'));
    a=toHex(GetUiText(socketid,'Edit1'));
    SetUiText(socketid,'Button1',GetUiText(socketid,'Edit1'));
    SetUiText(socketid,'Edit2',a);
  }
  if (buttonid=='Button2'){
    Display(socketid,GetUiText(socketid,'Edit2'));
    DisConnect(socketid);
  }
}



function OnTimerEvent(socketid,timername){
  if (socketid=='TcpClient01') {
   Connect(socketid);
 }
}


function OnSocketEvent(socketid,eventname,param1,param2){
   var now=new Date();
   var hour=now.getHours();
   var minute=now.getMinutes();
   var second=now.getSeconds();
   var timestr=hour+':'+minute+':'+second+' ';

   if (eventname=='OnConnect'){
     if (socketid.substring(0,9)=='TcpClient'){
        Display(socketid,timestr+socketid+'建立连接');
     }
     if (socketid.substring(0,11)=='TcpServer01'){
        var group=[];
        group.push({ID:"Edit1",TYPE:"Edit",TEXT:"text1"});
        group.push({ID:"Button1",TYPE:"Button",TEXT:"Button1"});
        group.push({ID:"Edit2",TYPE:"Edit",TEXT:"text2"});
        group.push({ID:"Button2",TYPE:"Button",TEXT:"Button2"});

        var socket1={ID:socketid,SOCKETTYPE:"TCP Server-Client",PORT:60000,HEX:0,UI:[]};
        socket1.UI.push(group);
        sockets.push(socket1);
        Display(socketid,timestr+socketid+'建立连接');
     }
   }
   else  if (eventname=='OnRead'){
    if (socketid=='TcpClient01'){
       Display(socketid,'hello');
       SendData(socketid,param1);
    }
    else  {
    }
  }
  else if  (eventname=='OnDisConnect') {
      if (socketid.substring(0,9)=='TcpClient'){
         Display(socketid,timestr+socketid+'断开连接');
      }
      if (socketid.substring(0,11)=='TcpServer01'){
        var now=new Date();
        var hour=now.getHours();
        var minute=now.getMinutes();
        var second=now.getSeconds();
        Display(socketid,timestr+socketid+'断开连接');
      }
  }
  else{
    Display(socketid,timestr+socketid+' ' +eventname+ ' '+param1+' '+param2);
  }
}

