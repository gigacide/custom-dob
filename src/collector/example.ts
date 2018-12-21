/** Dependencies */
import { NodeBlock, validator } from "tripetto-collector";

export abstract class Example extends NodeBlock {
    @validator
    performValidation(): boolean {
        // This example validator will always pass...

        return true;
    }
}
