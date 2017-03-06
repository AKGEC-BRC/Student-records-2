// Import the page's CSS. Webpack will know what to do with it.
import "../stylesheets/app.css";

// Import libraries we need.
import { default as Web3} from 'web3';
import { default as contract } from 'truffle-contract'

// Import our contract artifacts and turn them into usable abstractions.
import student_artifacts from '../../build/contracts/student.json'

// MetaCoin is our usable abstraction, which we'll use through the code below.
var student = contract(student_artifacts);
var account;
var Web3=require('web3');
var web3=new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
var ab=JSON.parse(JSON.stringify(student.abi));
var address=student.address;

var call_function=web3.eth.contract(ab).at(add);
  function setStatus(message) {
  var status = document.getElementById("status");
  status.innerHTML = message;
}

function add() {
  var stud = contract(student_artifacts);
   alert("deployed");
  var first_name = document.getElementById("first_name").value;
  var last_name = document.getElementById("last_name").value;
  var age = parseInt(document.getElementById("age").value);
  var phone_number = parseInt(document.getElementById("phone_number").value);
  var email = document.getElementById("email").value;

  stud.adddetail(first_name,last_name,age,phone_number,email,{from:account}).then(function() {
  setStatus("added");}).catch(function(e) {
    console.log(e);
    setStatus("Error in adding Details ");
  });


}



function view()
{


      var index=call_function.indexValue({from:account});
      console.log(index);
      console.log(index[0].length);
      var table = document.createElement("TABLE");
      table.border = "1";

      var columnCount =4;
      var header=["First Name","Last Name","E-mail","Details"];
      var row = table.insertRow(-1);
      for (var i = 0; i < columnCount; i++) {
          var headerCell = document.createElement("TH");
          headerCell.innerHTML = header[i];
          row.appendChild(headerCell);
      }


      for (var i = 0; i <(index[0].length); i++)
      {
          row = table.insertRow(-1);
          for (var j = 0; j < 3; j++)
          {
              var cell = row.insertCell(-1);
              cell.innerHTML = web3.toAscii(index[j][i]);
            	if(j==2)
            	{
            		var cell = row.insertCell(-1);
            		var inc="";
            		inc="<button onclick=display("+i+")>Details</button>"
                cell.innerHTML = inc;
              }
          }
        }

        var dvTable = document.getElementById("stat");
        dvTable.innerHTML = "";
        dvTable.appendChild(table);



    }
function display(i){
var a=call_function.display(i);

var c=document.getElementById("stats");
d="Name: "+web3.toAscii([0])+web3.toAscii(a[1])+" <br> Age : "+a[2]+"<br> Phone :"+a[3]+"<br> Email:"+web3.toAscii(a[4])+".";
c.innerHTML=d;
}


window.onload = function() {

  web3.eth.getAccounts(function(err, accs) {
    if (err != null) {
      alert("There was an error fetching your accounts.");
      return;
    }

    if (accs.length == 0) {
      alert("Couldn't get any accounts! Make sure your Ethereum client is configured correctly.");
      return;
    }

    accounts = accs;
    account = accounts[0];
  });
}
