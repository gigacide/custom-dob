/** Package information retrieved from `package.json` using webpack. */
declare const PACKAGE_NAME: string;
declare const PACKAGE_VERSION: string;

/** Dependencies */
import { ConditionBlock, _, tripetto } from "tripetto";
import { Example } from "./example";

/** Assets */
import ICON from "../../assets/icon.svg";

@tripetto({
    type: "condition",
    identifier: PACKAGE_NAME,
    version: PACKAGE_VERSION,
    context: Example,
    icon: ICON,
    get label(): string {
        return _("Boilerplate v%1 condition", PACKAGE_VERSION);
    },
})
export class ExampleCondition extends ConditionBlock {}
