// alert("Welcome to Hussain's resturant")
arry1 = [" Biryani "," Zarda "," Qourma "," Nehari "]
var menusearch = prompt("Enter an item name to search");
nmenusearch = menusearch.toLowerCase();
if(nmenusearch=="biryani")
{
        document.write("yes "+arry1[0] +" is available")
}
else if(nmenusearch=="zarda")
{
        document.write("yes "+arry1[1] +" is available")
}
else if(nmenusearch=="1ourma")
{
        document.write("yes "+arry1[2] +" is available")
}
else if(nmenusearch=="nehari")
{
        document.write("yes "+arry1[3] +" is available")
}
else
{
    alert("We're glade to serve you :)")
}

var x = prompt("Do You want to see menu? y/n");
if(x=="y")
{
    document.write("<br>" +"<br>"+"<b>Menu is here<b/>")
    for(var i=0; i<=arry1.length; i++)
    {
        
        document.write(arry1[i] +"<br>")
    }
}

//var makemenu = prompt("Enter items to menu");
//var makemenu = promt("Enter items to menu")
arr = []
arr.push(makemenu)
alert(makemenu)
//var1 = promt("Search items from menu")