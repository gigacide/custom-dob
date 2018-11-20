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
    a(): void {
        // Set your data slots here...
    }

    @editor
    b(): void {
        // Implement the properties editor here...
    }

    @conditions
    c(): void {
        // Set conditions here...
    }
}
