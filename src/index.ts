/** Package information retrieved from `package.json` using webpack. */
declare const PACKAGE_NAME: string;
declare const PACKAGE_VERSION: string;

/** Dependencies */
import { NodeBlock, _, block, conditions, editor, slots } from "tripetto";

/** Assets */
import * as ICON from "../assets/icon.svg";

@block({
    type: "node",
    identifier: PACKAGE_NAME,
    version: PACKAGE_VERSION,
    icon: ICON,
    label: _("Boilerplate v%1", PACKAGE_VERSION)
})
export class Example extends NodeBlock {
    @slots
    defineSlots(): void {
        // Define your data slots here...
    }

    @editor
    defineEditor(): void {
        // Define controls to edit your properties here...
    }

    @conditions
    defineConditions(): void {
        // Define conditions here...
    }
}
