import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";

import { Item } from "./item";
import { Http } from "@angular/http";
import { ItemService } from "./item.service";
import { TextField } from "ui/text-field";

@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./items.component.html",
})
export class ItemsComponent implements OnInit {
    items: Item[];
    search = '';
    img = {};
    public host: string;
    public userAgent: string;
    public origin: string;
    public url: string;



    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class. 
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    constructor(
        private itemService: ItemService
    ) { }

    ngOnInit(): void {
        this.items = this.itemService.getItems();
    }
    searchGifs(){
        this.itemService.postData({ search: this.search }).subscribe((res) => {
            this.img = res.results
            }, 
            (err)=>console.log("Something went wrong "+err)
        );
    }
    onReturnPress(args) {
        // returnPress event will be triggered when user submits a value
        let textField = <TextField>args.object;
    
        // Gets or sets the placeholder text.
        console.log(textField.hint);
        // Gets or sets the input text.
        console.log(textField.text);
        // Gets or sets the secure option (e.g. for passwords).
        console.log(textField.secure);
    
        // Gets or sets the soft keyboard type. Options: "datetime" | "phone" | "number" | "url" | "email"
        console.log(textField.keyboardType);
        // Gets or sets the soft keyboard return key flavor. Options: "done" | "next" | "go" | "search" | "send"
        console.log(textField.returnKeyType);
        // Gets or sets the autocapitalization type. Options: "none" | "words" | "sentences" | "allcharacters"
        console.log(textField.autocapitalizationType);
    
        // Gets or sets a value indicating when the text property will be updated.
        console.log(textField.updateTextTrigger);
        // Gets or sets whether the instance is editable.
        console.log(textField.editable);
        // Enables or disables autocorrection.
        console.log(textField.autocorrect);
        // Limits input to a certain number of characters.
        console.log(textField.maxLength);
    
        setTimeout(() => {
            textField.dismissSoftInput(); // Hides the soft input method, ususally a soft keyboard.
        }, 100);
    }
    
    onFocus(args) {
        // focus event will be triggered when the users enters the TextField
        let textField = <TextField>args.object;
    }
    
    onBlur(args) {
        // blur event will be triggered when the user leaves the TextField
        let textField = <TextField>args.object;
    }

    
}