<script type="text/javascript">
            //var i,type;
      
            function jsFunction(value)
                {
                //alert(value);
      
               var drValue = parseInt(value);
      
               for (let i = 1; i <= drValue; i++)
               {
                    var control='tr'+i;
                  document.getElementById(control).style.visibility='visible';
               }
            } 
      
      
            function Scube()
            {
               //type=document.main.txtvalue.value;
               //i=type*type*type;
               //document.main.result.value= i ;
      
               
               var e = document.getElementById("ddl");
               var RowNo = parseInt(e.options[e.selectedIndex].text);
      
               //if	(RowNo == 2)
               //{
               //		RowNo = RowNo - 1;
               //}
      
               for (let i = 1; i <= RowNo; i++)
               {
                    var controlInput='n'+i;
                  var controlResult = 'r'+i; 
                  var number = parseFloat(document.getElementById(controlInput).value.replace(",","."));
                  //var number = parseFloat(document.getElementById('txtvalue1'.value.replace(',', '.')));
                  var cube = number * number * number	;
                  document.getElementById(controlResult).value = cube;
                  
               }	
            }
         </script>