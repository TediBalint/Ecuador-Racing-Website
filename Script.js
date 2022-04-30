
function AddInput(parentid, tipe, classnev, this_id, labelid, labelcontent, labelclass)
{
   
    var select1 = document.getElementById(parentid);
    var inp = document.createElement('input');
    var label = document.createElement('label');

    //label, input formálása
    label.id = labelid;
    label.innerText = labelcontent;
    label.className = labelclass;
    inp.type = tipe; 
    inp.className = classnev;
    inp.id = this_id;

    inp.name = nev;
    select1.appendChild(label);
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
        AddInput('sel1', 'text', 'form-control  mb-3', 'egyeb_text', 'egyeb_label', 'Kérjük írja le egyéb végzettségét', 'mt-2');
    }
    else
    {
        RemoveById('egyeb_text');
        RemoveById('egyeb_label');
    }
}
function Submit()
{
    
}
// function Table
// {
    
// }