//var str='RRRR';
var str='SRRR'
var res=0;
if(str[0]=='R')
{
for(i=0;i<str.length;i++)
{
    if(str[i]=='R')
    {
        res=res+2
    }
    else if(str[i]=='T')
    {
        res=res+4
    }
    else
    {
        res=res+4
    }
}
}
//console.log(res);
else if(str[0]=='S')
{
    for(i=0;i<str.length;i++)
{
    if(str[i]=='R')
    {
        res=res+1
    }
    else if(str[i]=='T')
    {
        res=res+3
    }
    else
    {
        res=res+4
    }
}
}
console.log(res);