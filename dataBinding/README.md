# DataBinding
# requirements:
- Add an Input field that updates a property 'username' via Two-Way-Binding
- Output the username property via String Interpolation (in a paragraph below the input)
- Add a button which may only be clicked if the username is NOT an empty string
- Upon clicking the button, the username should be reset to an empty string


Important: For Two-Way-Binding (covered in the next lecture) to work, you need to enable the ngModel  directive. This is done by adding the FormsModule  to the imports[]  array in the AppModule.

You then also need to add the import from @angular/forms  in the app.module.ts file:

import { FormsModule } from '@angular/forms'; 