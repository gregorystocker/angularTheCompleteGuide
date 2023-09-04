1. Add a button that says "Display Details"
2.  add a paragraph with content of your choice
3. Toggle the display of the paragraph with the display details button
4. Log all button clicks in an array and outputs that array below the secret paragraph.
5. Starting at the 5th log item, give all future log items a blue background with ngStyle and a white color with ngClass.



## How I did it

I used *ngIf to toggle adding and removing the paragraph element
based on a variable that changes every time the button is clicked.

For adding list elements, I used *ngFor which adds list elements based on an array that is being pushed to with every button click.

I dynamically style it by storing objects in the array. 
I put some login in my .ts class and give the object different attributes based on what its location in the array is. 
I then read those attributes to assign a background color, and I store the index in the object so I can read it and assign a class with ngClass if its 5 or more. 

