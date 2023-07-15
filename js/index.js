var quote=document.getElementById('quote');
var author__quote=document.getElementById('author__quote');

var quotes=
    [
        "“Be yourself; everyone else is already taken.”",
        "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
        "“So many books, so little time.”",
        "“You only live once, but if you do it right, once is enough.”",
        "“Be the change that you wish to see in the world.”",
        "“In three words I can sum up everything I've learned about life: it goes on.”",
        "“If you tell the truth, you don't have to remember anything.”",
        "“To live is the rarest thing in the world. Most people exist, that is all.”",
        "“Live as if you were to die tomorrow. Learn as if you were to live forever.”",
        "“To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.”",
     ];
var authorQuote=
    [
        '― Oscar Wilde',
        '― Albert Einstein',
        '― Frank Zappa',
        '― Mae West',
        '― Mahatma Gandhi',
        '― Robert Frost',
        '― Mark Twain',
        '― Oscar Wilde',
        '― Mahatma Gandhi',
        '― Ralph Waldo Emerson',
    ];

    var temp=-1;
function generateQuote()
{

   var randomNumber=Math.floor(Math.random()*quotes.length);
   if(randomNumber!=temp)
   {
    temp=randomNumber;
   }
   else
   {
    if(randomNumber==quotes.length-1)
    {
        randomNumber=0;
    }
    else 
    {
        ++randomNumber;
    }

   }

   var randomQuote=quotes[randomNumber];
   var randomAuthor=authorQuote[randomNumber];

   quote.innerHTML=randomQuote;
   author__quote.innerHTML=randomAuthor;
   console.log(temp ,randomNumber);
   
}