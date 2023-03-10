/** Package information retrieved from `package.json` using webpack. */
declare const PACKAGE_NAME: string;
declare const PACKAGE_VERSION: string;

/** Dependencies */
import { ConditionBlock, _, tripetto } from "@tripetto/builder";

/** Assets */
import ICON from "../../assets/icon.svg";

@tripetto({
    type: "condition",
    context: PACKAGE_NAME,
    identifier: PACKAGE_NAME,
    version: PACKAGE_VERSION,
    icon: ICON,
    get label() {
        return _("Boilerplate v%1 condition", PACKAGE_VERSION);
    },
})
export class ExampleCondition extends ConditionBlock {}
