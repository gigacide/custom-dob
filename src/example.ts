/** Package information retrieved from `package.json` using webpack. */
declare const PACKAGE_NAME: string;
declare const PACKAGE_VERSION: string;

/** Dependencies */
import {
    NodeBlock,
    Slots,
    _,
    conditions,
    editor,
    slots,
    tripetto
} from "tripetto";
import { ExampleCondition } from "./condition";

/** Assets */
import * as ICON from "../assets/icon.svg";

@tripetto({
    type: "node",
    identifier: PACKAGE_NAME,
    version: PACKAGE_VERSION,
    icon: ICON,
    label: () => _("Boilerplate v%1", PACKAGE_VERSION)
})
export class Example extends NodeBlock {
    example!: Slots.String;

    @slots
    defineSlot(): void {
        // Define your data slots here...

        this.example = this.slots.static({
            type: Slots.String,
            reference: "example",
            label: _("Example slot")
        });
    }

    @editor
    defineEditor(): void {
        // Define controls to edit your properties here...

        this.editor.name();
        this.editor.description();
        this.editor.placeholder();
        this.editor.explanation();

        this.editor.groups.options();
        this.editor.required(this.example);
        this.editor.visibility();
        this.editor.alias(this.example);
    }

    @conditions
    defineConditions(): void {
        // Define conditions here...

        this.conditions.template({
            condition: ExampleCondition
        });
    }
}
