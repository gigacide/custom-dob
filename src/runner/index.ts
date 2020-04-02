/** Dependencies */
import { NodeBlock, validator } from "tripetto-runner-foundation";
import "./condition";

export abstract class Example extends NodeBlock {
    @validator
    performValidation(): boolean {
        // This example validator will always pass...

        return true;
    }
}
