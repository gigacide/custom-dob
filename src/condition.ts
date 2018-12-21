/** Package information retrieved from `package.json` using webpack. */
declare const PACKAGE_NAME: string;
declare const PACKAGE_VERSION: string;

/** Dependencies */
import { ConditionBlock, _, tripetto } from "tripetto";
import { Example } from "./example";

/** Assets */
import * as ICON from "../assets/icon.svg";

@tripetto({
    type: "condition",
    identifier: PACKAGE_NAME,
    version: PACKAGE_VERSION,
    context: Example,
    icon: ICON,
    label: () => _("Boilerplate v%1 condition", PACKAGE_VERSION)
})
export class ExampleCondition extends ConditionBlock {}
