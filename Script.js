var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab

function showTab(n) {
  // This function will display the specified tab of the form...
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
  //... and fix the Previous/Next buttons:
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n == (x.length - 1)) {
    document.getElementById("nextBtn").innerHTML = "Elküld";
  } else {
    document.getElementById("nextBtn").innerHTML = "Tovább";
  }
  //... and run a function that will display the correct step indicator:
  fixStepIndicator(n)
}

function nextPrev(n) {
  // This function will figure out which tab to display
  var x = document.getElementsByClassName("tab");
  // Exit the function if any field in the current tab is invalid:
  if (n == 1 && !validateForm()) return false;
  // Hide the current tab:
  x[currentTab].style.display = "none";
  // Increase or decrease the current tab by 1:
  currentTab = currentTab + n;
  // if you have reached the end of the form...
  if (currentTab >= x.length) {
    // ... the form gets submitted:
    document.getElementById("allas_form").submit();
    return false;
  }
  // Otherwise, display the correct tab:
  showTab(currentTab);
}
//validator
function validateForm() 
{
  
  var tabs, inputs, i, valid = true;
  tabs = document.getElementsByClassName("tab");
  inputs = tabs[currentTab].getElementsByTagName("input");
  
  for (i = 0; i < inputs.length; i++) 
    {
        if (inputs[i].value == "") 
        {
            inputs[i].className += " invalid";
            valid = false;
        }
    }
if (valid) 
{
    document.getElementsByClassName("step")[currentTab].className += " finish";
}
  return valid; // return the valid status
}

function fixStepIndicator(n) {
  // This function removes the "active" class of all steps...
  var i, x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  //... and adds the "active" class on the current step:
  x[n].className += " active";
}
//form vége



function AddInput(parentid, tipe, classnev, this_id, placeholder)
{
   
    var select1 = document.getElementById(parentid);
    var inp = document.createElement('input');
    

    //label, input formálása
    inp.placeholder = placeholder;
    inp.type = tipe; 
    inp.className = classnev;
    inp.id = this_id;
   
    select1.appendChild(inp);
    // <input type="text" class="form-control w-50" id="alkalmassag" name="Alkalmasság"
}
function RemoveById(id1)
{
    var item =  document.getElementById(id1)
    if(item != null)
    {
        item.remove();
    }
     
}
function optionselect()
{
   
    if(document.getElementById('egyeb').selected)
    {
        AddInput('sel1', 'text', 'form-control  mt-2', 'egyeb_text', 'Egyéb végzettség...');
    }
    else
    {
        RemoveById('egyeb_text');
    }
}