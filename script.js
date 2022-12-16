function loadFunction(){
    const select=document.querySelector('#select')
    const select1=document.querySelector('#select1')
    for(var i=2; i<=16;i++){
        option='<option class="selceted" value='+i+'>'+i+'</option>';
        select.innerHTML+=option
        select1.innerHTML+=option
    }
}

function systemFunction(){
    let calck=document.getElementById('calc').value;
    let degre=document.querySelector('#select').value;
    let degre1=document.querySelector('#select1').value;
    let result=document.querySelector('#result')
    result.innerHTML='Natija:';
    degre=Number(degre);
    var s=0
    var mod=0
    var s1=[]
    for(var i=1;i<=calck.length;i++)
    {
        len=calck.length
        var a=calck[len-i];
        switch (a) {
        case 'A':
        a=10
        break;
        case 'B':
        a=11
        break;
        case 'C':
        a=12
        break;
        case 'D':
        a=13
        break;
        case 'E':
        a=14
        break;
        case 'F':
        a=15
        break;
        default:
        a=a;
         break;
        }
        const numcalck=Number(a);
        if(numcalck>=degre){
            document.querySelector('.alert').classList.add('animate')
            setTimeout(function(){document.querySelector('.alert').classList.remove('animate'); }, 4000);
            setTimeout(function(){document.querySelector('.alert').classList.add('animateup'); }, 4000);
            setTimeout(function(){document.querySelector('.alert').classList.remove('animateup'); }, 4000);
        }
    else{
        var degrei=i-1;     
        var al=Math.pow(degre,degrei);
        s=a*al+s;
    }
    }//o'nlikka o'tkazish
    var div=s
  //  console.log(degre1)
    while (div >= degre1) {
       // console.log(degre1)
        mod=div%degre1;
        div=div/degre1;
       // console.log(mod)
        div=Math.trunc(div)
        switch (mod) {
            case 10:
            mod='A'
            break;
            case 11:
            mod='B'
            break;
            case 12:
            mod='C'
            break;
            case 13:
            mod='D'
            break;
            case 14:
            mod='E'
            break;
            case 15:
            mod='F'
            break;
        default:
         break;
        }
        s1.push(mod)
        mod=''
            }
            switch (div) {
                case 10:
                div='A'
                break;
                case 11:
                div='B'
                break;
                case 12:
                div='C'
                break;
                case 13:
                div='D'
                break;
                case 14:
                div='E'
                break;
                case 15:
                div='F'
                break;
            default:
             break;
            }
            s1.push(div)
            s1=s1.reverse();
            s1=s1.join(''); 
            result.innerHTML+=' '+s1
}//Kiritilgan sistemaga o'girish
      