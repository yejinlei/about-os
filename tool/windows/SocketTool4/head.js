var symbols = " !\"#$%&'()*+,-./0123456789:;<=>?@";
var loAZ = "abcdefghijklmnopqrstuvwxyz";
symbols+= loAZ.toUpperCase();
symbols+= "[\\]^_`";
symbols+= loAZ;
symbols+= "{|}~";

function toAscii(hexinput)
{
	valueStr = hexinput;
	valueStr = valueStr.toLowerCase();
        var hex = "0123456789abcdef";
	var text = "";
	var i=0;

	for( i=0; i<valueStr.length; i=i+2 )
	{
		var char1 = valueStr.charAt(i);
		if ( char1 == ':' )
		{
			i++;
			char1 = valueStr.charAt(i);
		}
		var char2 = valueStr.charAt(i+1);
		var num1 = hex.indexOf(char1);
		var num2 = hex.indexOf(char2);

                if ((num1+num2)==0) break;  //add by lq 0作为可见字符串的结束

		var value = num1 << 4;
		value = value | num2;

		var valueInt = parseInt(value);
		var symbolIndex = valueInt - 32;
		var ch = ' ';
		if ( symbolIndex >= 0 && value <= 126 )
		{
			ch = symbols.charAt(symbolIndex)
		}
		text += ch;
	}
	return text;
}


function toHex(ascinput)
{
      	var valueStr =ascinput;
	var text = "";
	for( i=0; i<valueStr.length; i++ )
	{
		var oneChar = valueStr.charCodeAt(i);
		text = text.toString() + oneChar.toString(16);
	}
	return text;
}


function json2str(o){
  var arr=[];
  var fmt=function(s){
    if(typeof s=='object' && s!=null) return json2str(s);
    if (typeof s=='string') return "'"+s+"'";
    if (typeof s=='number') return s;
  }
  for( var i in o) arr.push(""+i+":"+fmt(o[i]));
  return '{'+arr.join(',')+'}';
}



var sockets=[];
var actions=[];


function SetUiText(socketid,uiid,text){
  var socketid1='';

  for (var socket in sockets){
     socketid1=sockets[socket].ID;
     if (socketid1==socketid){
        for (var uipanel in (sockets)[socket].UI){
               for(var control in ((sockets)[socket].UI)[uipanel]){
                 controlid= (((sockets)[socket].UI)[uipanel])[control].ID;
                 if (controlid==uiid){
                      ((sockets[socket].UI)[uipanel])[control].TEXT=""+text;
                 }
               }
        }
        break;
     }
  }
}

function GetUiText(socketid,uiid){
  var socketid1='';

  for (var socket in sockets){
     socketid1=(sockets)[socket].ID;
     if (socketid1==socketid){
        for (var uipanel in (sockets)[socket].UI){
               for(var control in ((sockets)[socket].UI)[uipanel]){
                 controlid= (((sockets)[socket].UI)[uipanel])[control].ID;
                 if (controlid==uiid){
                     return (((sockets)[socket].UI)[uipanel])[control].TEXT.toString();
                 }
               }
        }
     }
  }
}


function OnEditChange(socketid,editid,text){
  var socketid1='';

  for (var socket in sockets){
     socketid1=(sockets)[socket].ID;
     if (socketid1==socketid){
        for (var uipanel in (sockets)[socket].UI){
               for(var control in ((sockets)[socket].UI)[uipanel]){
                 controlid= (((sockets)[socket].UI)[uipanel])[control].ID;
                 if (controlid==editid){
                     (((sockets)[socket].UI)[uipanel])[control].TEXT=text;
                 }
               }
        }
     }
  }
}

function Display(socketid,text){
 actions.push({TYPE:"DISPLAY",DATA:text,SOCKET:socketid});
}

function SendData(socketid,data){
 actions.push({TYPE:"SEND",DATA:data,SOCKET:socketid});
}

function Connect(socketid){
 actions.push({TYPE:"CONNECT",SOCKET:socketid});
}

function DisConnect(socketid){
 actions.push({TYPE:"DISCONNECT",SOCKET:socketid});
}

function AddTimer(socketid,timerid,interval){
 actions.push({"TYPE":"ADDTIMER","TIMERNAME":timerid,"INTERVAL":interval,"SOCKET":socketid});
}

function SetTimer(socketid,timerid,interval){
 actions.push({"TYPE":"SETTIMER","TIMERNAME":timerid,"INTERVAL":interval,"SOCKET":socketid});
}

function DeleteTimer(socketid,timerid,interval){
 actions.push({"TYPE":"DELTIMER","TIMERNAME":timerid,"SOCKET":socketid});
}

function Alert(socketid,text){
 actions.push({"TYPE":"ALERT","TEXT":text,"SOCKET":socketid});
}

function DeleteSocket(socketid){
   var i=0;
   var socketid1='';

   for (var socket in sockets){
      socketid1=(sockets)[socket].ID;
      if (socketid1==socketid){
        sockets.splice(i,1);
      }
      i++;
   }
}
