function vreme()
        {
        var danas=new Date()
        var h=danas.getHours()
        var m=danas.getMinutes()
        var s=danas.getSeconds()
        //dodaje nulu ispred brojeva ako su manji od 10
        m=proveriVreme(m)
        s= proveriVreme (s)
        document.getElementById('txt').innerHTML=h+":"+m+":"+s
        t=setTimeout('vreme()',500)
        }
        
 function proveriVreme (i)
        {
        if (i<10) 
          {i="0" + i}
          return i
        }
 function datum() 
		{
		   var dan = new Date();  
		   var a =
		          new Array("nedelja","ponedeljak","utorak","sreda","četvrtak","petak","subota"); 
		   i = dan.getDay(); 
		   dannedelje = a[i]; 
		   danmeseca= dan.getDate();  
		   mesec = dan.getMonth() + 1; 
		   godina = dan.getFullYear();  
		   
		   document.write(dannedelje + ", " + danmeseca + "." + mesec + ". " + godina + ". " );
        }
        
function popUp1() {
              window.open("https://www.facebook.com/", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=800,height=600");
          }
function popUp2() {
              window.open("https://www.instagram.com/", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=800,height=600");
          }       