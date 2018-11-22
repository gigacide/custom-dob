/** Package information retrieved from `package.json` using webpack. */
declare const PACKAGE_NAME: string;

/** Dependencies */
import {
    ConditionBlock,
    ConditionResult,
    condition,
    tripetto
} from "tripetto-collector";

@tripetto({
    type: "condition",
    identifier: PACKAGE_NAME
})
export class ExampleCondition extends ConditionBlock<{
    checked: boolean;
}> {
    @condition
    evaluateCondition(): ConditionResult {
        // This example condition will always pass...

        return true;
    }
}
