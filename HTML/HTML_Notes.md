# List in HTML:-
List is collection or group of related items.

# Types of List:-
It is of 3 types
1. Ordered List
2. Unordered List
3. Description List

# Table in HTML
1. It is collection of rows and Columns.
2. To create table in html we use <table></table> tag.
3. Here we are creating table row by row. To create table row we use <tr></tr> tag.
4. <tr></tr> Tag we have to write within table tag.
5. To create cells html provide 2 tags.
     i) <Th></Th> Tag:- It is used to create Table Heading Cells.
    ii) <Td></Td> Tag:- It is used to create Table Data Cells.
6. To provide title or caption to the table we use <caption></caption> Tag.
7. Caption tag we have to write within table tag.

# Cellspanning:- 
Here we have to 2 ways to span the cells.
1. colspan:- Colspan is an attribut used to span the cells on column basis.
2. rowspan:- rowspan is an attribute used to span the cells on row basis.

syntax:- We use these attribute inside cells.
 <td rowspan="3" colspan="2"></td>
 <th rowspan="3" colspan="3"></th>

# Thead Tag:-
The top most part of our table we have to write within <thead></thead> tag.
# Tfoot Tag:-
The bottom most part of our table (example:-conclusion or summary) we have to write within <tfoot></tfoot> tag.
# Tbody Tag:-
The remaining content of our table we have to write within <tbody></tbody> Tag.


# Note:- Thead, Tbody and Tfoot tag are highly recommended to used inside table for better explanation of code and crawler understanding purpose.


# Semantic Tag:- 
Semantic Tags are self explanatory Tag.

Example:- 
1. Header
2. Nav
3. Main
4. Section
5. Article
6. Aside
7. Footer


# Surprise Test:-

1. What is Html? Explain in Brief?
2. What is Image Tag? How many types of path we can use?
3. What is Figure and Figcaption Tag?
4. What is Hyper Link? Create a hyperlink and use their all attribute as an example?
5. What is List? Explain its type with example?
6. What are semantic Tag? Explain all semantic tag?
7. What is the importance of Thead,Tbody and Tfoot Tag?
8. Create a Table?

# Form in HTML:-
1. Forms are used to accept input from the user.
2. To create form in html we have <form></form> tag.
3. To create input field we use <input> tag. It is unpair tag.
4. Input tag we have to write within form tag.

# Attribute of input tag:-
1. Type attribute:- Type attribute is used to specify which type of data we can accept in that input field.

text
tel
email
password
file
date
time
datetime-local
color
range
search
url
submit
reset
number 
radio
checkbox
month
week
image
button

2. Name Attribute:- name attribute is used to provide name to the input field.

3. Value Attribute:- Value attribute is used to provide initial value to the input field.

4. disabled:- It will make the input field as disabled user can not access the input field. 

5. Readonly:- It will make the input field as readonly user can not access the value but can access the input field.

6. Required:- It will make the input field as mandatory.If input field is empty form will not be submitted.

7. placeholder:- It is used to provide hint to the user.

8. autofocus:- Whenever page reload it will automatically focus an input field.

9. maxlength:- The maxlength attribute specifies the maximum number of characters allowed in the <input> element.

10. minlength:- The minlength attribute specifies the minimum number of characters allowed in the <input> element.

11. autocomplete:- on/off


# Label Tag:
Lable tag is used to connect text with the input field.
The text we want to connect we have to write within label tag.
<label for="user-name">
    Name
</label>.

Input tag we have to use id attribute and that id's value we have to pass to label's for attribute.
<input type="text" id="user-name">

whenever use click on that text respective input field will be focused.

# fieldset:-
Fieldset tag is used to group form and it will create one box around all the elements.
Fieldset tag we have to write within form tag.

# Legend tag:-
To provide title or caption to the form we use legend tag.
Legend tag we have to write within fieldset tag.

# Select Tag:-
1. Select tag is used to create dropdown list.
2. Here we are providing multiple option to the user from these option user can select only one value.
3. To create option inside dropdown list we use option tag.
4. syntax:-

        <select name="">
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
        </select>


# Datalist:-
1. The Datalist Tag is introduced in Html5.
2. The Html datalist tag is used to provide an autocomplete feature on the form element.
3. Datalist tag is a container tag.
4. It is block level element.
5. It is used to provide a list of predefined options to the users.
6. Datalist tag is used to create suggestion list or autocomplete list.
7. The <datalist> tag contains a set of <option> tags that define the options in the list.
8. We are binding the suggestion list with the input field, for this we have to provide 'list' attribute in the input tag and 'id' attribute in the datalist tag, this same 'id' we have to provide in the 'list' attribute of input tag.
9. Whenever the user inputs in the input field related suggestions are displayed.
10. The advantage of using the datalist tag is that it allows users to enter values that are not present in the options list.


# Textarea:-
It is used to accept multiline input from the user.
 <textarea name="" id=""></textarea>

 height:- rows="10"
 width:- cols="30"



# 2.  Difference Between Inline and Block Level Element?

Inline Level Element
   i) It occupy space required by content.
  ii) We can not set height and width.
 iii) Example:- <br>,<hr>,<img>,<iframe>,<a>,<video>,<span>

Block Level Element
  i) It always take full width of its parent container.
 ii) We can set height and width.
iii) Example:- <div>,<header>,<footer>,<section>,<article>, <aside>,<nav>,<main>,<body>,<fieldset>


# Difference between Div and Span Tag?

Div:- It is used to create Block level containers.
Span:- It is used to create Inline Level Containers.

# Element:- 
It is the combination of opening tag and content with closing tag.

<opening tag>   content   <closing tag>

Example:- <p> Hello </p>



# Mock Question:-
1. What is Html?
2. what is Hyperlink?
3. What is List and types of List?
4. Diff between pair and unpair tag? 
5. Diff bw inline and block?
6. Diff bw Id and Class?
7. Diff between select list and Data List? Create Both?
8. Diff between Div and Span Tag?
9. What is Thead, Tbody and Tfoot Tag?
10. What are semantic Tag? Explain with example?
11. What is 
    1. label tag?
    2. Fieldset Tag?
    3. Legend Tag?
    4. Textarea?
12. How to create radio and checkbox buttons for gender and Term and condition?


# Communication Questions For Mock
1. Tell me about yourself?
2. What is your Hobbies?
3. what is your strengths and weakness?
4. what is your short term goals and long term goals?
5. where do you see yourself after 5 years?
6. Tell me something about your future plans? Native place?
7. why should i hire you?
8. How much you rate yourself out of 10 in Html?
9. Any technology do you want to learn in future and why?
10. How do you know about us?
11. why do you want to join us?
12. How much salary you are expecting?
13. Are comfortable to relocate and work in night shift and why?




