# false-choice
Simple website with 2 buttons of which 1 is unclickable and **randomly teleports if cursor is in proximity**.

## URL parameters
This project allows for customizable text displayed on buttons as well as the page title via URL parameters.  
Simply go add ?btn1=[btn1_text]&btn2=[btn2_text]&title=[my_title] to the end of your url query.  
*(replace [btn1_text] and [btn2_text] with your choices)*  

**Remember to replace space with %20**.

some examples:  
> https://piolad.github.io/false-choice/?btn1=Choice1  
> https://piolad.github.io/false-choice/?btn2=Nothing&btn1=Dinner  

## Obscuring parameters with base64
You can also obscure your parameters by encoding them in base64.<br>
Add ?base64=[base64_encoded_string] to the end of your url.
>https://piolad.github.io/false-choice/?base64=YnRuMT1DaG9pY2UxJmJ0bjI9Y2hvaWNlMiZ0aXRsZT1NeSBncmVhdCB0aXRsZQ==

There is no need to replace spaces here. <br>
Use a tool such as https://www.base64encode.net/ to encode your strings.