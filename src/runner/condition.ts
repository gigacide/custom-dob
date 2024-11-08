/** Package information retrieved from `package.json` using webpack. */
declare const PACKAGE_NAME: string;

/** Dependencies */
import { ConditionBlock, condition, tripetto } from "@tripetto/runner";

@tripetto({
    type: "condition",
    identifier: PACKAGE_NAME,
})
export class ExampleCondition extends ConditionBlock<{
    checked: boolean;
}> {
    @condition
    evaluateCondition(): boolean {
        // This example condition will always pass...

        return true;
    }
}
